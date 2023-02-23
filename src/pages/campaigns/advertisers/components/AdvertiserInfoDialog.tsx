import { Advertisers } from '@model/Advertiser';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { ArrowUp, XCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { Box } from '@components/Box';
import { Pagination } from '@components/Pagination';
import { SubMenu } from '@components/SubMenu';

const DATA = [1, 2, 3, 4, 5, 6];

interface Props {
  data?: Advertisers;
}

export function AdvertiserInfoDialog({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 20;

  useEffect(() => {
    // TODO: Implement associated Insertion Order
    // const getAssociatedInsertinOrder = async () => {
    //   const response = await axios.get(
    //     `${process.env.NEXT_PUBLIC_API_URL}/insertion-order/id/4985271`,
    //     {
    //       headers: {
    //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdxTnpxMUQzVmJLTHU0N01XOUZiIiwiaGFzRXhwZXJpZW5jZSI6dHJ1ZSwibmFtZSI6InJhYmUiLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwidXNlcm5hbWUiOiJyYWJlbG9qdW5pb3IxMDUiLCJjb21wYW55SWQiOiJoSEdtV0tOQkt2eXlpck40UlBsYSIsInBob25lIjoiMTE5NDMzMDkwMzkiLCJpc1JlZ2lzdGVyQ29tcGxldGVkIjp0cnVlLCJwZXJtaXNzaW9ucyI6WyJsaXN0OnVzZXIiLCJjcmVhdGU6dXNlciIsImRlbGV0ZTp1c2VyIiwibGlzdGJ5OnVzZXIiLCJtYW5hZ2VyOnVzZXIiXSwidXBkYXRlZF9hdCI6eyJzZWNvbmRzIjoxNjY5ODEyODkzLCJuYW5vc2Vjb25kcyI6OTI5MDAwMDAwfSwic3RhdHVzIjp0cnVlLCJlbWFpbCI6InJhYmVsbzEwNUBnbWFpbC5jb20iLCJjcmVhdGVfYXQiOnsic2Vjb25kcyI6MTY2OTgxMjg5MywibmFub3NlY29uZHMiOjkyOTAwMDAwMH0sImlhdCI6MTY3MzQ0MjI3Nn0.XLJvk4dsiI2JF-hpKPtU5HzKcbpOCUmctOuzADq-s9g`,
    //       },
    //     }
    //   );
    //   console.log(response);
    // };
    // getAssociatedInsertinOrder();
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed state-open:animate-fade-in state-closed:animate-fade-out" />

      <Dialog.Content
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="bg-[#F9F9F9] fixed top-3 bottom-0 right-0 outline-none w-[1240px] state-open:animate-slide-left state-closed:animate-slide-left-out"
      >
        <Tabs.Root defaultValue="settings">
          <div className="bg-white pt-6 pl-6 pr-10 flex flex-col animate-fade">
            <header className="flex items-center gap-2">
              <span className="bg-gray-300 text-blue-900 font-semibold text-xl leading-6 h-8 w-16 flex items-center justify-center rounded-[4px] rounded-br-[25px] rounded-tl-[15px]">
                ANU
              </span>
              <Dialog.Title className="text-blue-900 font-medium text-xl">
                {data?.name} ({data?.id})
              </Dialog.Title>

              <Dialog.Close className="absolute top-2 right-2">
                <XCircle size={32} weight="fill" className="text-gray-300" />
              </Dialog.Close>
            </header>

            <div className="flex justify-between items-end mt-1">
              <SubMenu.List>
                <SubMenu.Trigger value="settings">
                  <SubMenu.Title>Configurações</SubMenu.Title>
                </SubMenu.Trigger>
              </SubMenu.List>

              <div className="flex h-fit items-end gap-12 mb-2">
                <span className="text-xl font-medium text-orange-600">
                  Ir aos Relatórios
                </span>
                <span className="text-xl font-medium text-blue-900">
                  Nº Insertion Orders
                </span>
                <span className="text-xl font-medium text-blue-900">
                  Nº Objetos Associados
                </span>
              </div>
            </div>
          </div>

          <Tabs.Content value="settings">
            <div className="px-6 py-4 flex gap-8">
              <div className="w-[264px]">
                <Box.Root>
                  <Box.Title>Informações Básicas</Box.Title>

                  <Box.Row>
                    <Box.Label>Fuso Horário</Box.Label>
                    <Box.Value>{data?.timezone}</Box.Value>
                  </Box.Row>

                  <Box.Row>
                    <Box.Label>Formato de tempo</Box.Label>
                    <Box.Value>{data?.time_format}</Box.Value>
                  </Box.Row>

                  <Box.Row>
                    <Box.Label>Moeda</Box.Label>
                    <Box.Value>{data?.default_currency}</Box.Value>
                  </Box.Row>

                  <Box.Divider />

                  <Box.Column>
                    <Box.Label>Publicidade Política</Box.Label>
                    <Box.Value className="text-xs">
                      {data?.is_running_political_ads
                        ? 'Sim, estou exibindo anúncios relacionados a eleições,iniciativas eleitorais ou candidatos políticos'
                        : 'Não, não estou exibindo anúncios relacionados a eleições,iniciativas eleitorais ou candidatos políticos.'}
                    </Box.Value>
                  </Box.Column>
                </Box.Root>
              </div>

              <div className="flex flex-col gap-8 w-[264px]">
                <Box.Root>
                  <Box.Title>Pixels Associados</Box.Title>

                  <Box.Row>
                    <Box.Column>
                      <Box.Label>ID</Box.Label>
                      <Box.Value>0001</Box.Value>
                    </Box.Column>

                    <Box.Column>
                      <Box.Label>Nome</Box.Label>
                      <Box.Value>Nome_Pixel</Box.Value>
                    </Box.Column>
                  </Box.Row>
                </Box.Root>

                <Box.Root>
                  <Box.Title>Etiquetas de Relatórios</Box.Title>
                  <Box.Value>Sem Etiquetas de Relatórios</Box.Value>
                </Box.Root>

                <Box.Root>
                  <Box.Title>Informações de Pagamento</Box.Title>
                  <Box.Value>Sem Informações de pagamento</Box.Value>
                </Box.Root>

                <Box.Root>
                  <Box.Title>Frequência e Recência</Box.Title>

                  <Box.Column>
                    <Box.Label>Critérios Adicionais</Box.Label>
                    <Box.Value>N/A</Box.Value>
                  </Box.Column>
                </Box.Root>
              </div>

              <Box.Root className="flex-1 px-0 overflow-x-auto">
                <Box.Title className="ml-4">Insertion Orders Associadas</Box.Title>

                <table className="">
                  <thead>
                    <tr className="border-b border-purple-900">
                      <th className="text-blue-900 font-normal text-base text-left pl-6 pr-10 pb-2">
                        Nome
                      </th>
                      <th className="text-blue-900 font-normal text-base text-left px-10 pb-2">
                        <div className="flex items-center gap-1">
                          Status
                          <button type="button">
                            <ArrowUp
                              size={18}
                              weight="bold"
                              className="text-orange-600"
                            />
                          </button>
                        </div>
                      </th>
                      <th className="text-blue-900 font-normal text-base text-left px-10 pb-2">
                        <div className="flex items-center gap-1">
                          Orçamento
                          <button type="button">
                            <ArrowUp
                              size={18}
                              weight="bold"
                              className="text-orange-600"
                            />
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {DATA.map((item) => {
                      return (
                        <tr key={item} className="border-b border-purple-900">
                          <td className="pl-6 pr-10 py-2 whitespace-nowrap">
                            <Box.Column className="gap-0">
                              <Box.Label>Nome</Box.Label>
                              <Box.Value className="font-normal">Nº ID</Box.Value>
                            </Box.Column>
                          </td>

                          <td className="py-2 px-10 whitespace-nowrap">
                            <Box.Column className="gap-0">
                              <Box.Label>
                                {String(item).padStart(2, '0')} Dias restantes
                              </Box.Label>
                              <Box.Value className="font-normal">Em andamento</Box.Value>
                            </Box.Column>
                          </td>

                          <td className="py-2 px-10 whitespace-nowrap">
                            <Box.Column className="gap-0">
                              <Box.Label>R$10.000,00</Box.Label>
                              <Box.Value className="font-normal">
                                Ritmo definido em 0%
                              </Box.Value>
                            </Box.Column>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <footer className="px-8 flex justify-between">
                  <span className="text-blue-900">
                    Apresentando {DATA.length} {DATA.length === 1 ? 'Item' : 'Itens'}
                  </span>
                  <Pagination
                    items={DATA?.length} // 30
                    currentPage={currentPage} // 1
                    pageSize={pageSize} // 10
                    onPageChange={onPageChange}
                  />
                </footer>
              </Box.Root>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
