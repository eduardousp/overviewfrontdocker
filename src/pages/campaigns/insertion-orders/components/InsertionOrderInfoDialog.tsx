/* eslint-disable react/destructuring-assignment */
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';
import { ArrowDown, ArrowUp, CaretDown, XCircle } from 'phosphor-react';

import { Box } from '@components/Box';
import { Pagination } from '@components/Pagination';
import { SubMenu } from '@components/SubMenu';
import { Tag } from '@components/Tag';

import { formatCurrency } from '@utils/formatCurrency';

const DATA = [1, 2];

export function InsertionOrderInfoDialog({ insertionOrder }: any) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-[#F9F9F9] absolute top-3 bottom-0 right-0 outline-none w-[1240px] state-open:animate-slide-left state-closed:animate-slide-left-out h-full">
        <Tabs.Root defaultValue="settings">
          <header className="bg-white pl-7 pr-10 pt-3 flex flex-col gap-2 fixed w-[1240px] z-10">
            <Dialog.Close className="top-2 right-2 absolute">
              <XCircle size={32} weight="fill" className="text-gray-300" />
            </Dialog.Close>

            <div className="flex flex-col gap-1">
              <Tag.Root>
                <Tag.Label className="text-[0.625rem] w-8 h-4">ANU</Tag.Label>
                <Tag.Title className="text-xs">
                  Nome do anunciante ({insertionOrder.advertiser_id})
                </Tag.Title>
              </Tag.Root>

              <Tag.Root>
                <Tag.Label className="text-white bg-purple-900">I.O.</Tag.Label>
                <Tag.Title className="font-medium">
                  {insertionOrder.name} ({insertionOrder.id})
                </Tag.Title>
              </Tag.Root>
            </div>

            <div className="flex justify-between">
              <SubMenu.List>
                <SubMenu.Trigger value="settings">
                  <SubMenu.Title>Configurações</SubMenu.Title>
                </SubMenu.Trigger>

                <SubMenu.Trigger value="analytics">
                  <SubMenu.Title>Análise</SubMenu.Title>
                </SubMenu.Trigger>
              </SubMenu.List>

              <div className="h-fit flex items-end gap-12 mb-2">
                <span className="flex gap-2 text-xl font-medium text-orange-600">
                  <Image src="/svg/pencil.svg" width={20} height={24} alt="" />
                  Editar
                </span>
                <span className="text-xl font-medium text-blue-900">
                  Nº Linha Associadas
                </span>
                <span className="text-xl font-medium text-blue-900">
                  Nº Objetos Associados
                </span>
              </div>
            </div>
          </header>

          <Tabs.Content value="settings" className="pt-28">
            <div className="flex gap-8 px-6 py-4">
              <div className="w-[264px] flex flex-col gap-8">
                <Box.Root>
                  <Box.Title>Orçamento</Box.Title>

                  <Box.Column>
                    <Box.Label>Tipo de Orçamento</Box.Label>
                    <Box.Value className="ml-2">
                      {insertionOrder.budget_type === 'revenue' ? 'Receita' : 'Impressão'}
                    </Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>Orçamento Total</Box.Label>
                    <Box.Value className="ml-2">R$10.000,00</Box.Value>
                  </Box.Column>
                </Box.Root>

                <Box.Root className="px-0">
                  <Box.Title className="px-4">Faturamento</Box.Title>

                  <Box.Column className="px-4">
                    <Box.Label>Períodos de Faturamento</Box.Label>
                    <Box.Value>Fuso horário de Brasília</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label className="px-4">Períodos de Faturamento Atuais</Box.Label>
                    <Box.Value className="border border-purple-900 bg-[#F9F9F9] px-4 py-2 text-sm whitespace-pre flex items-center justify-between">
                      <span>01/01/2022 12:00AM{'\n'}30/01/2022 11:59PM</span>
                      <span>R$5.000,00</span>
                    </Box.Value>
                  </Box.Column>

                  <Box.Column className="gap-0">
                    <Box.Label className="px-4 mb-1">
                      Períodos de Faturamento Passados
                    </Box.Label>
                    <Box.Value className="border border-purple-900 bg-[#F9F9F9] px-4 py-2 text-sm whitespace-pre flex items-center justify-between">
                      <span>01/12/2021 12:00AM{'\n'}30/12/2012 11:59PM</span>
                      <span>R$3.000,00</span>
                    </Box.Value>
                    <Box.Value className="border border-t-0 border-purple-900 bg-[#F9F9F9] px-4 py-2 text-sm whitespace-pre flex items-center justify-between">
                      <span>05/11/2021 12:00AM{'\n'}15/11/2012 11:59PM</span>
                      <span>R$1.000,00</span>
                    </Box.Value>
                  </Box.Column>
                </Box.Root>
              </div>

              <div className="w-[264px] flex flex-col gap-8">
                <Box.Root>
                  <Box.Title>Equipes</Box.Title>

                  <Box.Column>
                    <Box.Value>Sem Equipes associadas</Box.Value>
                  </Box.Column>
                </Box.Root>

                <Box.Root>
                  <Box.Title>Etiquetas de Relatórios</Box.Title>

                  <Box.Column>
                    <Box.Value>Sem Etiquetas de Relatórios</Box.Value>
                  </Box.Column>
                </Box.Root>

                <Box.Root>
                  <Box.Title>Frequência e Recência</Box.Title>

                  <Box.Column>
                    <Box.Label>Critérios Adicionais</Box.Label>
                    <Box.Value>N/A</Box.Value>
                  </Box.Column>
                </Box.Root>

                <Box.Root>
                  <Box.Title>Comentários</Box.Title>

                  <Box.Column>
                    <Box.Value>Sem Comentários</Box.Value>
                  </Box.Column>
                </Box.Root>
              </div>

              <div className="flex flex-col flex-1 gap-8">
                <Box.Root className="px-0 overflow-x-auto">
                  <Box.Title className="ml-4">Insertion Orders Associadas</Box.Title>

                  <table>
                    <thead>
                      <tr className="border-b border-purple-900">
                        <th className="pb-2 pl-6 pr-10 text-base font-normal text-left text-blue-900">
                          Nome
                        </th>
                        <th className="px-10 pb-2 text-base font-normal text-left text-blue-900">
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
                        <th className="px-10 pb-2 text-base font-normal text-left text-blue-900">
                          <div className="flex items-center gap-1">
                            Otimização
                            <button type="button">
                              <ArrowDown
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
                            <td className="whitespace-nowrap py-2 pl-6 pr-10">
                              <Box.Column className="gap-0">
                                <Box.Label>Nome</Box.Label>
                                <Box.Value className="font-normal">Nº ID</Box.Value>
                              </Box.Column>
                            </td>

                            <td className="px-10 py-2">
                              <Box.Column className="gap-0">
                                <Box.Label>R$10.000,00 vida</Box.Label>
                                <Box.Value className="font-normal max-w-[200px]">
                                  R$2.000,00 primeiro flight Ritmo definido em 100%
                                </Box.Value>
                              </Box.Column>
                            </td>

                            <td className="px-10 py-2">
                              <Box.Column className="gap-0">
                                <Box.Label>Desativada</Box.Label>
                              </Box.Column>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <footer className="flex justify-between px-8">
                    <span className="text-blue-900">
                      Apresentando {DATA.length} {DATA.length === 1 ? 'Item' : 'Itens'}
                    </span>
                    <Pagination />
                  </footer>
                </Box.Root>

                <Box.Root className="px-0 overflow-x-auto">
                  <Box.Title className="ml-4">Estratégia de Suprimentos</Box.Title>

                  <Box.Column className="px-3 pb-4 border-b border-purple-900">
                    <Box.Label>Segmentação de Tipo de Inventário</Box.Label>
                    <Box.Value className="ml-2">Qualquer tipo de inventário</Box.Value>
                  </Box.Column>

                  <Box.Column className="px-3 pb-4 border-b border-purple-900">
                    <Box.Label>Segmentação de Inventário</Box.Label>
                    <Box.Value className="ml-2 font-normal">
                      Inventário Direto - Blocklists
                      <span className="flex items-center gap-1 font-light">
                        <XCircle size={20} weight="fill" className="text-orange-600" />
                        Nome Blocklist (00)
                      </span>
                    </Box.Value>
                  </Box.Column>

                  <Box.Column className="px-3">
                    <Box.Label>Visibilidade</Box.Label>
                    <Box.Value className="ml-2 font-normal">
                      Padrão
                      <span className="block ml-2 font-light">IAB</span>
                    </Box.Value>
                  </Box.Column>
                </Box.Root>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content
            value="analytics"
            className="flex flex-col h-screen gap-4 px-20 pt-32 pb-8 overflow-y-auto"
          >
            <Box.Root>
              <div className="flex gap-2">
                <strong className="text-xl font-medium text-blue-900">
                  Entrega Ativa:
                </strong>
                <span className="text-xl font-normal text-blue-900">
                  R$5,50 nos últimos 60 minutos
                </span>
              </div>

              <div className="h-24">
                <ResponsiveLine
                  data={[
                    {
                      id: 'active',
                      data: [
                        { x: '3:40PM', y: 100 },
                        { x: '3:45PM', y: 70 },
                        { x: '3:50PM', y: 10 },
                        { x: '3:55PM', y: 40 },
                        { x: '4:00PM', y: 5 },
                        { x: '4:05PM', y: 15 },
                        { x: '4:10PM', y: 80 },
                        { x: '4:15PM', y: 5 },
                        { x: '4:20PM', y: 65 },
                        { x: '4:25PM', y: 50 },
                        { x: '4:30PM', y: 90 },
                        { x: '4:35PM', y: 0 },
                        { x: '4:40PM', y: 0 },
                      ],
                    },
                  ]}
                  margin={{ top: 16, right: 60, bottom: 24, left: 60 }}
                  yScale={{ type: 'linear' }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{ tickSize: 4, tickPadding: 8 }}
                  axisLeft={null}
                  enableGridX={false}
                  enableGridY={false}
                  enablePoints={false}
                  useMesh
                  yFormat={(value) => `${value} R$`}
                  colors="#61449B"
                />
              </div>
            </Box.Root>

            <Box.Root className="gap-6 px-0">
              <div>
                <div className="flex gap-10 px-4 pt-2">
                  <strong className="text-xl font-medium text-blue-900">
                    Métricas Chave
                  </strong>
                  <span className="flex items-center gap-4 px-4 font-medium text-white bg-orange-600 rounded">
                    Período de Faturamento Atual: 01/01/2022 - 30/01/2022
                    <CaretDown weight="bold" size={24} />
                  </span>
                </div>

                <div className="mx-14 grid grid-cols-4 gap-10 px-10 pb-6 mt-6 border-b border-purple-900">
                  <Box.Column>
                    <Box.Label>CPM de receita reservada</Box.Label>
                    <Box.Value>R$0,90</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPC de receita reservada</Box.Label>
                    <Box.Value>R$0,80</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPA de receita reservada</Box.Label>
                    <Box.Value>R$0,00</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPM Visível de receita reservada</Box.Label>
                    <Box.Value>R$1,50</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>Taxa de cliques</Box.Label>
                    <Box.Value>0.200%</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>Taxa de visualização</Box.Label>
                    <Box.Value>69.550%</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>Taxa de conversão</Box.Label>
                    <Box.Value>R$0,00</Box.Value>
                  </Box.Column>
                </div>
              </div>

              <div>
                <strong className="ml-4 text-xl font-medium text-blue-900">
                  Período de faturamento atual - Entrega por dia
                </strong>

                <div className="h-80 border-b border-purple-900 pb-4 px-[2.625rem] mx-[3.75rem] mt-4">
                  <ResponsiveBar
                    data={[
                      { value: 70, id: '01' },
                      { value: 80, id: '02' },
                      { value: 76, id: '03' },
                      { value: 78, id: '04' },
                      { value: 75, id: '05' },
                      { value: 80, id: '06' },
                      { value: 35, id: '07' },
                      { value: 80, id: '08' },
                      { value: 100, id: '09' },
                      { value: 50, label: '10' },
                    ]}
                    keys={['value']}
                    indexBy="id"
                    padding={0.2}
                    maxValue={100}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors="#61449B"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={null}
                    axisLeft={null}
                    enableGridY={false}
                    enableLabel={false}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    legends={[]}
                    isInteractive={false}
                    role="application"
                  />
                </div>
              </div>

              <div>
                <strong className="ml-4 text-xl font-medium text-blue-900">
                  Período de faturamento atual - Desempenho monetário por dia
                </strong>

                <div className="h-[20rem] border-b border-purple-900 pb-4 px-[2.625rem] mx-[3.75rem] mt-4">
                  <ResponsiveLine
                    theme={{
                      textColor: '#1F2047',
                      fontSize: 12,
                    }}
                    data={[
                      {
                        id: '01',
                        data: [
                          { x: '01/09/2022', y: 0.59 },
                          { x: '03/09/2022', y: 0.65 },
                          { x: '06/09/2022', y: 0.35 },
                          { x: '12/09/2022', y: 0.5 },
                          { x: '14/09/2022', y: 0.8 },
                        ],
                      },
                      {
                        id: '02',
                        data: [
                          { x: '01/09/2022', y: 0.75 },
                          { x: '03/09/2022', y: 0.8 },
                          { x: '06/09/2022', y: 1 },
                          { x: '12/09/2022', y: 0.5 },
                          { x: '14/09/2022', y: 0.6 },
                        ],
                      },
                    ]}
                    margin={{ top: 16, right: 60, bottom: 24, left: 60 }}
                    yScale={{ type: 'linear' }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{ tickSize: 4, tickPadding: 8 }}
                    axisLeft={{ format: (value) => formatCurrency(value) }}
                    enableGridX={false}
                    enableGridY={false}
                    enablePoints={false}
                    isInteractive={false}
                    useMesh
                  />
                </div>
              </div>

              <div>
                <strong className="ml-4 text-xl font-medium text-blue-900">
                  Período de faturamento atual - Desempenho de engajamento por dia
                </strong>

                <div className="h-[20rem] border-b border-purple-900 pb-4 px-[2.625rem] mx-[3.75rem] mt-4">
                  <ResponsiveLine
                    theme={{
                      textColor: '#1F2047',
                      fontSize: 12,
                    }}
                    data={[
                      {
                        id: '01',
                        data: [
                          { x: '01/09/2022', y: 0.7 },
                          { x: '03/09/2022', y: 0.71 },
                          { x: '06/09/2022', y: 0.68 },
                          { x: '12/09/2022', y: 0.71 },
                          { x: '14/09/2022', y: 0.8 },
                        ],
                      },
                    ]}
                    margin={{ top: 16, right: 60, bottom: 24, left: 60 }}
                    yScale={{ type: 'linear' }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{ tickSize: 4, tickPadding: 8 }}
                    axisLeft={{ format: (value) => `${value}%` }}
                    enableGridX={false}
                    enableGridY={false}
                    enablePoints={false}
                    isInteractive={false}
                    useMesh
                  />
                </div>
              </div>

              <div>
                <strong className="ml-4 text-xl font-medium text-blue-900">Custo</strong>

                <div className="mx-14 grid grid-cols-4 gap-10 px-10 pb-6 mt-6">
                  <Box.Column>
                    <Box.Label>Receita de reserva</Box.Label>
                    <Box.Value>R$0,90</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>Custo de mídia</Box.Label>
                    <Box.Value>R$0,80</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPM Receita de reserva</Box.Label>
                    <Box.Value>R$0,00</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPM Custo de mídia</Box.Label>
                    <Box.Value>R$1,50</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPC Receita de reserva</Box.Label>
                    <Box.Value>R$0,90</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPC custo de mídia</Box.Label>
                    <Box.Value>69.550%</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPA Receita de reserva</Box.Label>
                    <Box.Value>R$0,00</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPA Custo de mídia</Box.Label>
                    <Box.Value>R$0,00</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>Custo de dados</Box.Label>
                    <Box.Value>0.200%</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPM Visível Custo de mídia</Box.Label>
                    <Box.Value>R$0,00</Box.Value>
                  </Box.Column>

                  <Box.Column>
                    <Box.Label>CPM Visível Receita de reserva</Box.Label>
                    <Box.Value>69.550%</Box.Value>
                  </Box.Column>
                </div>
              </div>
            </Box.Root>
          </Tabs.Content>
        </Tabs.Root>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
