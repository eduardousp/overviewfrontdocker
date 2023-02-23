/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { XCircle } from 'phosphor-react';
import { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { Switch } from '@components/Switch';

import { listTagPosition, TagPosition } from './helper';

export function PagePropertiesDialog() {
  const [listTagPositionSelect, setTagPositionSelect] = useState(listTagPosition);

  const handleClickTagPositionSelect = useCallback(
    (item: TagPosition) => {
      setTagPositionSelect(
        listTagPositionSelect.map((itemTagPosition) => ({
          ...itemTagPosition,
          selected:
            itemTagPosition.id === item.id
              ? !itemTagPosition.selected
              : itemTagPosition.selected,
        }))
      );
    },
    [listTagPositionSelect]
  );

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col py-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none w-[720px] h-[450px] state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <div className="border-b border-purple-900 h-[40px]">
          <Dialog.Title className="ml-3 text-2xl font-medium text-black-900">
            Segmentação por propriedades de páginas
          </Dialog.Title>
          <Dialog.Close className="top-1 right-1 absolute">
            <XCircle size={32} weight="fill" className="text-gray-300" />
          </Dialog.Close>
        </div>

        <div className="flex flex-1 flex-col">
          <section className="ml-4 mt-3">
            <label className="font-medium text-lg">Posição da tag</label>

            <div className="flex flex-row mt-1">
              {listTagPositionSelect.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleClickTagPositionSelect(item)}
                  className={`flex flex-col w-32 h-32 mr-10 border-2 ${
                    item.selected ? 'border-orange-500' : 'border-purple-900'
                  } rounded cursor-pointer`}
                >
                  <div className="flex border-[1px] w-4 h-4 ml-1 mt-1 items-center justify-center border-orange-500 rounded-sm">
                    {item.selected && <a className="mb-1 font-bold text-orange-500">x</a>}
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <Image src={item.image} width={48} height={32} alt="" />
                    <Box.Label className="mt-2 text-purple-900">{item.name}</Box.Label>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="ml-4 mt-3">
            <label className="font-medium text-lg">String de consulta</label>

            <div className="ml-2">
              <Switch.Root className="w-8 h-4 pl-1">
                <Switch.Thumb className="w-3" />
              </Switch.Root>

              <label className="ml-2 text-sm">String de Consulta Específica</label>

              <div className="flex flex-row items-center">
                <SelectRoot
                  disabled
                  defaultValue="include"
                  className="bg-[#C6C6C5] mt-2 p-2"
                >
                  <SelectItem value="include">Incluir</SelectItem>
                </SelectRoot>

                <label className="mx-2 mt-1 text-slate-400 font-medium">se</label>

                <SelectRoot
                  disabled
                  defaultValue="include"
                  className="bg-[#C6C6C5] mt-2 p-2"
                >
                  <SelectItem value="include">Incluir</SelectItem>
                </SelectRoot>

                <label className="mx-2 mt-1 text-slate-400 font-medium">
                  das seguintes strings de consulta estão presentes.
                </label>
              </div>

              <button type="button" className="mt-3 text-slate-400 font-medium">
                + Add outra String
              </button>
            </div>
          </section>
        </div>

        <footer className="border-t border-purple-900 md:gap-0 flex h-[40px] flex-row justify-end items-center gap-2 pr-8 pt-6">
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
