import { getAdvertisers } from '@controllers/advertisers';
import {
  Advertiser as IAdvertiser,
  Advertisers as IAdvertisers,
} from '@model/Advertiser';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { CaretDown } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import { SearchInput } from '@components/Form/SearchInput';
import { HelpTooltip } from '@components/HelpTooltip';
import { Loading } from '@components/Loading';
import { Pagination } from '@components/Pagination';
import { Tag } from '@components/Tag';

import { AdvertiserInfoDialog } from '@pages/campaigns/advertisers/components/AdvertiserInfoDialog';

import { withSSRAuth } from '@utils/withSSRAuth';

interface Props {
  advertisers: IAdvertiser;
}

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/', title: 'Campanhas' },
  { id: '2', path: '/campaigns/advertisers', title: '> Anunciantes', active: true },
];

function LoadingPage() {
  return (
    <div className="flex h-full items-center justify-center ">
      <NextSeo title="Carregando... | Overview" />

      <div role="status">
        <Loading />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default function Advertisers({ advertisers }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [Advertiser, setAdvertisers] = useState(advertisers);
  const [currentPage, setCurrentPage] = useState(0);
  const [AdvertiserClicked, setAvertiserClicked] = useState<IAdvertisers>();
  const pageSize = 10;

  const getAdvertiser = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/advertiser?start=${
          currentPage * pageSize
        }&limit=${currentPage * pageSize + pageSize}`,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
          },
        }
      );

      if (res.status === 200) {
        setAdvertisers(res.data);
      }
    } catch (err) {
      console.log(err);
    }

    return setIsLoading(false);
  };

  useEffect(() => {
    getAdvertiser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    const controller = new AbortController();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const FetchAdvertiserByQuery = async () => {
      // const res = await api.get(`/advertiser/find-by?search=${query}`);
      // console.log(res);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/advertiser/find-by?search=${query}`,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
          },
        }
      );

      if (res.status === 200) {
        setAdvertisers(res.data);
      }
    };

    if (query.length > 2) FetchAdvertiserByQuery();
    if (query.length === 0) getAdvertiser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-hidden pb-10">
      <NextSeo title="Anunciantes | Overview" />

      <header className="flex justify-end mt-6 pr-16 pb-3">
        <div>
          <SearchInput onChange={(ev) => setQuery(ev.target.value)} />
        </div>
      </header>

      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Breadcrumbs routes={breadcrumbsConfig} />

          <Dialog.Root>
            <div className="flex ml-4">
              <div className="flex flex-col">
                {Advertiser?.advertisers?.map((item) => {
                  return (
                    <Dialog.Trigger
                      key={item.id}
                      className="odd:bg-zinc-50 even:bg-white p-2 h-36 w-[19rem] min-w-[19rem] border-r border-b border-purple-900 flex flex-col gap-3"
                      onClick={() => setAvertiserClicked(item)}
                    >
                      <span className="text-gray-300 font-semibold text-base">Nome</span>

                      <Tag.Root>
                        <Tag.Label>ANU</Tag.Label>
                        <Tag.Title className="font-medium">{item.name}</Tag.Title>
                      </Tag.Root>
                    </Dialog.Trigger>
                  );
                })}
              </div>

              <Tooltip.Provider delayDuration={0}>
                <div className="scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5] scrollbar-thin ">
                  {Advertiser?.advertisers.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="odd:bg-zinc-50 even:bg-white p-2 pr-6 gap-[3.75rem] h-36 border-b border-purple-900 whitespace-nowrap inline-flex min-w-full"
                      >
                        <div className="flex flex-col gap-4">
                          <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                            ID
                            <HelpTooltip>
                              Informação sobre o tópico que aparece ao se passar o mouse.
                            </HelpTooltip>
                          </span>
                          <span className="font-semibold text-blue-900">{item.id}</span>
                        </div>

                        <div className="flex flex-col gap-4">
                          <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                            Entrega de Receita (Últimos 7 dias)
                            <HelpTooltip>
                              Informação sobre o tópico que aparece ao se passar o mouse.
                            </HelpTooltip>
                          </span>
                          <span className="font-semibold text-blue-900">R$ 68,90</span>
                        </div>

                        <div className="flex flex-col gap-4">
                          <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                            Imps entregues (últimos 7 dias)
                            <HelpTooltip>
                              Informação sobre o tópico que aparece ao se passar o mouse.
                            </HelpTooltip>
                          </span>
                          <span className="font-semibold text-blue-900">
                            366,394 imps
                          </span>
                        </div>

                        <div className="flex flex-col gap-4">
                          <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                            CPM (Últimos 7 dias)
                            <HelpTooltip>
                              Informação sobre o tópico que aparece ao se passar o mouse.
                            </HelpTooltip>
                          </span>
                          <span className="font-semibold text-blue-900">R$0,98</span>
                        </div>

                        <div className="flex flex-col gap-4">
                          <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                            Taxa de visibilidade IAB (Últimos 7 dias)
                            <HelpTooltip>
                              Informação sobre o tópico que aparece ao se passar o mouse.
                            </HelpTooltip>
                          </span>
                          <span className="font-semibold text-blue-900">60.000%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Tooltip.Provider>
            </div>

            <AdvertiserInfoDialog data={AdvertiserClicked} />
          </Dialog.Root>

          <footer className="pl-20 pr-16 mt-5 flex justify-between">
            <span className="text-blue-900">
              Apresentando {Advertiser?.advertisers.length}
              {Advertiser?.advertisers.length === 1 ? ' Item' : ' Itens'}
            </span>

            <div className="flex gap-24">
              <div className="flex items-center gap-1">
                <span className="text-blue-900">Fileiras por página: 10</span>
                <button type="button">
                  <CaretDown weight="bold" size={12} className="text-orange-600" />
                </button>
              </div>

              <Pagination
                items={Advertiser?.count} // 30
                currentPage={currentPage} // 1
                pageSize={pageSize} // 10
                onPageChange={onPageChange}
              />
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  withSSRAuth();
  try {
    const response = await getAdvertisers(0, 10);

    if (response.status === 200) {
      return { props: { response } };
    }
  } catch (err) {
    return { props: {} };
  }

  return { props: {} };
};
