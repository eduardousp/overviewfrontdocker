/* eslint-disable react/jsx-no-undef */
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { XCircle } from 'phosphor-react';
import { useState } from 'react';

import ActiveIcon from '@assets/svg/active.svg';

import { Button } from '@components/Button';

import { MenuButton } from './MenuButton';
import { Summary } from './Summary';
import { Browser, Language, OperationalSystemFamily, DeviceModel, Carrier } from './Tabs';

export function SystemTargetingDialog() {
  const [selected, setSelected] = useState('os');

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col py-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none w-[1440px] h-[550px] state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <div className="border-b border-purple-900 h-[57px]">
          <Dialog.Title className="ml-7 text-2xl font-medium text-black-900">
            Sistema de Segmentação
          </Dialog.Title>
          <Dialog.Close className="top-1 right-1 absolute">
            <XCircle size={32} weight="fill" className="text-gray-300" />
          </Dialog.Close>
        </div>

        <div className="flex">
          <section className="flex flex-col w-[320px] h-[400px] border-r border-purple-900">
            <MenuButton
              selected={selected === 'os'}
              onClick={() => setSelected('os')}
              className="mt-4 flex items-center justify-between pr-4"
            >
              Família OS
              <Image src={ActiveIcon} height={12} />
            </MenuButton>
            <MenuButton
              selected={selected === 'browser'}
              onClick={() => setSelected('browser')}
            >
              Navegador
            </MenuButton>
            <MenuButton
              selected={selected === 'language'}
              onClick={() => setSelected('language')}
            >
              Idioma
            </MenuButton>
            <MenuButton
              selected={selected === 'device_model'}
              onClick={() => setSelected('device_model')}
            >
              Modelo do Dispositivo
            </MenuButton>
            <MenuButton
              selected={selected === 'carrier'}
              onClick={() => setSelected('carrier')}
            >
              Operadora
            </MenuButton>
            <MenuButton
              selected={selected === 'summary'}
              onClick={() => setSelected('summary')}
              className="border-b border-orange-500"
            >
              Resumo
            </MenuButton>
          </section>

          {selected !== 'summary' ? (
            <section className="w-[720px] h-[400px] border-r border-purple-900">
              {selected === 'os' && <OperationalSystemFamily />}
              {selected === 'browser' && <Browser />}
              {selected === 'language' && <Language />}
              {selected === 'device_model' && <DeviceModel />}
              {selected === 'carrier' && <Carrier />}
            </section>
          ) : (
            <div />
          )}

          <Summary selected={selected} />
        </div>

        <footer className="border-t border-purple-900 md:gap-0 flex h-[68px] flex-row justify-end items-center gap-2 px-8">
          <Dialog.Close className="hover:opacity-60 text-xl font-medium text-orange-600 transition-opacity mr-[32px]">
            Cancelar
          </Dialog.Close>

          <Button type="submit" className="text-xl h-8">
            <span>Salvar</span>
          </Button>
        </footer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
