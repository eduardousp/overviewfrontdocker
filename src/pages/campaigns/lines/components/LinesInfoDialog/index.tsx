/* eslint-disable react/jsx-no-undef */
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import { XCircle } from 'phosphor-react';

import { SubMenu } from '@components/SubMenu';
import { Tag } from '@components/Tag';

import {
  Analytics,
  Settings,
  Solutions,
} from '@pages/campaigns/lines/components/LinesInfoDialog/Tabs';

export function LinesInfoDialog() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-[#F9F9F9] absolute top-3 bottom-0 right-0 outline-none w-[1240px] state-open:animate-slide-left state-closed:animate-slide-left-out h-full">
        <Tabs.Root defaultValue="lines_settings" orientation="vertical">
          <header className="bg-white pl-7 pr-10 pt-3 flex flex-col gap-2 fixed w-[1240px] z-10">
            <Dialog.Close className="top-2 right-2 absolute">
              <XCircle size={32} weight="fill" className="text-gray-300" />
            </Dialog.Close>

            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <Tag.Root>
                  <Tag.Label className="text-[0.625rem] w-8 h-4 ">ANU</Tag.Label>
                  <Tag.Title className="text-xs">Nome do Anunciante (Nº ID)</Tag.Title>
                </Tag.Root>
                <p className="px-4">|</p>
                <Tag.Root>
                  <Tag.Label className="text-[0.625rem] w-8 h-4 text-white bg-purple-900">
                    ANU
                  </Tag.Label>
                  <Tag.Title className="text-xs">Nome do I.O (Nº ID)</Tag.Title>
                </Tag.Root>
              </div>

              <Tag.Root>
                <Tag.Label className="text-white bg-orange-600">LI</Tag.Label>
                <Tag.Title className="font-medium">Nome da Linha. (Nº ID)</Tag.Title>
              </Tag.Root>
            </div>

            <div className="flex justify-between">
              <SubMenu.List>
                <SubMenu.Trigger value="lines_settings">
                  <SubMenu.Title>Configurações</SubMenu.Title>
                </SubMenu.Trigger>

                <SubMenu.Trigger value="lines_analytics">
                  <SubMenu.Title>Análise</SubMenu.Title>
                </SubMenu.Trigger>

                <SubMenu.Trigger value="lines_solutions">
                  <SubMenu.Title>Solução de Problemas</SubMenu.Title>
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

          <Settings />
          <Analytics />
          <Solutions />
        </Tabs.Root>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
