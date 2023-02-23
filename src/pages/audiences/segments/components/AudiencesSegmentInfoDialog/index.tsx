import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';
import { XCircle } from 'phosphor-react';

import { Box } from '@components/Box';
import LineChart from '@components/Graphics/LineChart';
import { activeUsersChartMockSerie } from '@components/Graphics/mock';
import { SubMenu } from '@components/SubMenu';
import { Tag } from '@components/Tag';

export function AudienceSegmentInfoDialog() {
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
                <Tag.Title className="text-xs">Nome do Anunciante (Nº ID)</Tag.Title>
              </Tag.Root>

              <Tag.Root>
                <Tag.Title className="font-medium ml-14">
                  Nome Segmentação (Nº ID)
                </Tag.Title>
              </Tag.Root>
            </div>

            <div className="flex justify-between">
              <SubMenu.List>
                <SubMenu.Trigger value="settings">
                  <SubMenu.Title>Configurações</SubMenu.Title>
                </SubMenu.Trigger>
              </SubMenu.List>

              <div className="h-fit flex items-end gap-12 mb-2">
                <span className="flex gap-2 text-xl font-medium text-orange-600">
                  <Image src="/svg/pencil.svg" width={20} height={24} alt="" />
                  Editar
                </span>
              </div>
            </div>
          </header>

          <Tabs.Content value="settings" className="pt-28">
            <div className="flex flex-col gap-8 px-20 py-4">
              <div className="w-full flex flex-col gap-8">
                <Box.Root>
                  <Box.Title>Usuários Ativos</Box.Title>

                  <Box.Column>
                    <LineChart
                      axisLeft={{ tickSize: 5, tickPadding: 10 }}
                      axisBottom={{ tickSize: 5, tickPadding: 10 }}
                      className="h-[300px]"
                      color={['#000']}
                      data={activeUsersChartMockSerie}
                      margin={{ top: 20, right: 60, bottom: 30, left: 60 }}
                      pointColor={['#118DFF']}
                      pointSize={8}
                      useMesh
                    />
                  </Box.Column>
                </Box.Root>
              </div>

              <div className="w-full flex flex-col gap-8">
                <Box.Root>
                  <Box.Title>Configurações</Box.Title>

                  <Box.Column className="ml-20">
                    <Box.Label>Código</Box.Label>
                    <Box.Value className="ml-2">- -</Box.Value>
                  </Box.Column>

                  <Box.Column className="ml-20">
                    <Box.Label>Validade</Box.Label>
                    <Box.Value className="ml-2">180 dias</Box.Value>
                  </Box.Column>
                </Box.Root>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
