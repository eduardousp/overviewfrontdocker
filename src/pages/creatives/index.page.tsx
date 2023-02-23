import { Advertiser } from '@model/Advertiser';
import * as Dialog from '@radix-ui/react-dialog';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { CaretDown } from 'phosphor-react';
import { useState } from 'react';

import { Breadcrumbs } from '@components/Breadcrumb';
import { SelectAdvertiserDialog } from '@components/Dialog/SelectAdvertiserDialog';
import { SearchInput } from '@components/Form/SearchInput';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { Pagination } from '@components/Pagination';
import { Tag } from '@components/Tag';

import { CreativeTable } from '@pages/creatives/components/CreativeTable';
import { FolderSidebar } from '@pages/creatives/components/FolderSidebar';

import { withSSRAuth } from '@utils/withSSRAuth';

export default function ListCreatives() {
  const router = useRouter();

  const [folders, setFolders] = useState<number[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<number | 'all'>('all');

  const [selectAdvertiserDialogOpen, setSelectAdvertiserDialogOpen] = useState(true);
  const [selectedAdvertiser, setSelectedAdvertiser] = useState<Advertiser | null>(null);

  function handleAdvertiserSelected(advertiser: Advertiser) {
    setSelectedAdvertiser(advertiser);
    setSelectAdvertiserDialogOpen(false);
    setFolders(Array.from(Array(30).keys()));
  }

  return (
    <div className="flex overflow-hidden h-full">
      <NextSeo title="Criativos | Overview" />

      <Breadcrumbs
        routes={[{ id: '1', path: '/creatives', title: 'Criativos', active: true }]}
      />

      <FolderSidebar
        folders={folders}
        selectedFolder={selectedFolder}
        onFolderChange={setSelectedFolder}
      />

      <div className="flex flex-col pb-4 w-full overflow-hidden">
        <header className="py-8 pl-6 pr-16 flex h-fit justify-between w-full">
          {!selectedAdvertiser ? (
            <Dialog.Root
              open={selectAdvertiserDialogOpen}
              onOpenChange={setSelectAdvertiserDialogOpen}
            >
              <Dialog.Trigger className="group">
                <Tag.Root>
                  <Tag.Label className="w-16 h-7 text-xl">ANU</Tag.Label>
                  <Tag.Title className="text-orange-600 text-2xl font-medium group-hover:underline">
                    Escolher um anunciante
                  </Tag.Title>
                </Tag.Root>
              </Dialog.Trigger>

              <SelectAdvertiserDialog
                handleAdvertiserSelected={handleAdvertiserSelected}
              />
            </Dialog.Root>
          ) : (
            <Tag.Root>
              <Tag.Label className="w-16 h-7 text-xl">ANU</Tag.Label>
              <Tag.Title className="text-2xl font-medium">Anunciante escolhido</Tag.Title>
            </Tag.Root>
          )}

          <div className="flex items-center gap-10">
            <SelectRoot
              onValueChange={(value) => router.push(value)}
              placeholder="+ Novos Criativos"
            >
              <SelectItem value="/creatives/banner/create">Banner</SelectItem>
              <SelectItem value="/creatives/html/create">HTML5</SelectItem>
              <SelectItem value="/creatives/native/create">Native</SelectItem>
              <SelectItem value="/creatives/video/create">Video</SelectItem>
              <SelectItem value="/creatives/upload">Vários</SelectItem>
            </SelectRoot>

            <SearchInput />
          </div>
        </header>

        {selectedAdvertiser && (
          <>
            <CreativeTable />

            <footer className="pl-10 pr-16 mt-5 flex justify-between">
              <span className="text-blue-900">Apresentando 3 Itens</span>

              <div className="flex gap-24">
                <div className="flex items-center gap-1">
                  <span className="text-blue-900">Fileiras por página: 10</span>
                  <button type="button">
                    <CaretDown weight="bold" size={12} className="text-orange-600" />
                  </button>
                </div>

                <Pagination />
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = withSSRAuth();
