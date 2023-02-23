/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Pixel } from '@model/Pixel';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import Link from 'next/link';
import { ArrowUp, CaretDown } from 'phosphor-react';
import { useCallback, useMemo, useState } from 'react';

import ButtonOrange from '@components/ButtonOrange';
import CheckBox from '@components/CheckBox/index';
import { Input } from '@components/Form/Input';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { Pagination } from '@components/Pagination';

import { createListPixel } from '@utils/mocks';

interface Props {
  handlePixelSelected?: (pixelList: Pixel[]) => void;
  currentListPixelsSelected?: Pixel[];
}

const listPixels = createListPixel(20);

export function PixelConverterDialog({
  handlePixelSelected,
  currentListPixelsSelected,
}: Props) {
  const [pixelsList, setPixelsList] = useState(listPixels);

  const showCheckBoxOptions = useMemo(
    () => !!currentListPixelsSelected,
    [currentListPixelsSelected]
  );

  useCallback(() => {
    if (currentListPixelsSelected) {
      setPixelsList(
        listPixels.map((item) => ({
          ...item,
          selected: !!currentListPixelsSelected.find((obj) => obj.id === item.id),
        }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = useCallback(() => {
    if (!handlePixelSelected) return;

    const listPixelsSelected = pixelsList.filter((item) => item.selected);

    handlePixelSelected(listPixelsSelected);
  }, [handlePixelSelected, pixelsList]);

  const checkBoxHandleClick = useCallback(
    (itemChecked: Pixel) => {
      const updateList = pixelsList.map((obj) => {
        if (obj.id === itemChecked.id) {
          return { ...obj, selected: !obj.selected };
        }

        return obj;
      });

      setPixelsList(updateList);
    },
    [pixelsList]
  );

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col py-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none max-w-5xl w-full h-[32rem] rounded-xl state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <Dialog.Title className="ml-7 text-2xl font-medium text-purple-900">
          Rastreamento de Conversão
        </Dialog.Title>

        <div className="flex items-center gap-8 px-8 mt-6">
          <SelectRoot placeholder="" defaultValue="all" className="h-8">
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="view">View</SelectItem>
            <SelectItem value="click">Click</SelectItem>
            <SelectItem value="hibride">Hibrido</SelectItem>
          </SelectRoot>

          <Input.Root>
            <Input.Box className="h-10 bg-[#F9F9F9] rounded-xl">
              <Input.TextInput placeholder="Nome/ID" className="text-base" />
              <Image src="/svg/search.svg" width={24} height={24} alt="" />
            </Input.Box>
          </Input.Root>
        </div>

        <div className="mt-6 mb-4 overflow-auto scrollbar-thin scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5]">
          <table className="w-full border-b border-purple-900">
            <thead>
              <tr>
                <th className="items-center pl-12 text-xl font-medium text-left text-purple-900 border-t border-r border-purple-900">
                  <div className="flex items-center gap-4">
                    Nome
                    <ArrowUp size={16} weight="bold" className="text-orange-600" />
                  </div>
                </th>
                <th className="text-purple-900 text-xl font-medium border-t border-purple-900 border-r w-[25%]">
                  <div className="flex items-center justify-center gap-2">ID</div>
                </th>

                <th className=" text-xl font-medium text-purple-900 border-t border-purple-900">
                  <div className="flex items-center justify-center gap-2">
                    Tipo
                    <ArrowUp size={16} weight="bold" className="text-orange-600" />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {pixelsList.map((pixel, index) => (
                <tr key={String(pixel.id + index)}>
                  <td className="pl-12 text-xl font-medium text-purple-900 border-t border-r border-purple-900">
                    <div className=" flex flex-row items-center">
                      {showCheckBoxOptions && (
                        <div className="mr-3">
                          <CheckBox
                            value={pixel.selected}
                            handleClick={() => checkBoxHandleClick(pixel)}
                          />
                        </div>
                      )}
                      {handlePixelSelected ? (
                        <p
                          onClick={() =>
                            !showCheckBoxOptions && handlePixelSelected([pixel])
                          }
                          className={`hover:underline ${
                            !showCheckBoxOptions && 'cursor-pointer'
                          }`}
                        >
                          {pixel.name}
                        </p>
                      ) : (
                        <Link
                          href={`/campaigns/insertion-orders/create/${pixel}`}
                          className="hover:underline"
                        >
                          {pixel.name}
                        </Link>
                      )}
                    </div>
                  </td>
                  <td className=" text-xl font-medium text-center text-purple-900 border-t border-r border-purple-900">
                    {String(pixel.id).padStart(4, '0')}
                  </td>
                  <td className=" text-xl font-medium text-center text-purple-900 border-t border-purple-900">
                    {String(pixel.type).padStart(4, '0')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="md:flex-row md:gap-0 flex flex-col gap-2 px-8 mt-auto">
          <div className="md:flex-row md:gap-8 flex flex-col gap-4">
            <span className="text-blue-900">Apresentando 10 itens</span>

            <div className="flex gap-8">
              <div className="flex items-center gap-1">
                <span className="text-blue-900">Fileiras por página: 10</span>
                <button type="button">
                  <CaretDown weight="bold" size={12} className="text-orange-600" />
                </button>
              </div>

              <Pagination />
            </div>
          </div>

          <Dialog.Close className="hover:opacity-60 ml-auto text-xl font-medium text-orange-600 transition-opacity">
            Cancelar
          </Dialog.Close>

          {showCheckBoxOptions && (
            <div className="ml-12">
              <ButtonOrange title="Salvar" onClick={handleSave} />
            </div>
          )}
        </footer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
