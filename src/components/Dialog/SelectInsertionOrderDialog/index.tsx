/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { InsertionOrder } from '@model/InsertionOrder';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import Link from 'next/link';
import { ArrowUp, CaretDown } from 'phosphor-react';
import { useCallback, useMemo, useState } from 'react';

import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { Pagination } from '@components/Pagination';

import { createListInsertionOrder } from '@utils/mocks';

interface Props {
  handleInsertionOrderSelected?: (insertionOrder: InsertionOrder[]) => void;
  currentListIOSelected?: InsertionOrder[];
}

const listInsertionOrder = createListInsertionOrder(20);
listInsertionOrder.sort((a, b) => Number(a.id) - Number(b.id));

interface CheckBoxProps {
  defaultValue: boolean;
  handleClick: () => void;
}

const CheckBox = ({ defaultValue = false, handleClick }: CheckBoxProps) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const onClick = useCallback(() => {
    setValue((prev) => !prev);
    handleClick();
  }, [handleClick]);

  return (
    <div
      className="w-4 h-4 border-[1px] rounded-full border-orange-500 p-[2px] cursor-pointer"
      onClick={onClick}
    >
      {value && <div className="w-full h-full bg-orange-600 rounded-full" />}
    </div>
  );
};

export function SelectInsertionOrderDialog({
  handleInsertionOrderSelected,
  currentListIOSelected,
}: Props) {
  const [insertionOrders, setInsertionOrders] = useState(listInsertionOrder);

  const showCheckBoxOptions = useMemo(
    () => !!currentListIOSelected,
    [currentListIOSelected]
  );

  useCallback(() => {
    if (currentListIOSelected) {
      setInsertionOrders(
        listInsertionOrder.map((item) => ({
          ...item,
          selected: !!currentListIOSelected.find((obj) => obj.id === item.id),
        }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = useCallback(() => {
    if (!handleInsertionOrderSelected) return;

    const listIOSelected = insertionOrders.filter((item) => item.selected);

    handleInsertionOrderSelected(listIOSelected);
  }, [handleInsertionOrderSelected, insertionOrders]);

  const checkBoxHandleClick = useCallback(
    (itemChecked: InsertionOrder) => {
      const updateList = insertionOrders.map((obj) => {
        if (obj.id === itemChecked.id) {
          return { ...obj, selected: !obj.selected };
        }

        return obj;
      });

      setInsertionOrders(updateList);
    },
    [insertionOrders]
  );

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col py-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none max-w-5xl w-full h-[32rem] rounded-xl state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <Dialog.Title className="ml-7 text-2xl font-medium text-purple-900">
          Selecione um anunciante
        </Dialog.Title>

        <div className="flex items-center gap-8 px-8 mt-6">
          <SelectRoot placeholder="" defaultValue="active" className="h-8">
            <SelectItem value="active">Ativo</SelectItem>
            <SelectItem value="inactive">Inativo</SelectItem>
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
                  <div className="flex items-center gap-2">
                    Anunciante
                    <ArrowUp size={16} weight="bold" className="text-orange-600" />
                  </div>
                </th>
                <th className="text-purple-900 text-xl font-medium border-t border-purple-900 w-[15%]">
                  <div className="flex items-center justify-center gap-2">
                    ID
                    <ArrowUp size={16} weight="bold" className="text-orange-600" />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {insertionOrders.map((insertionOrder, index) => (
                <tr key={String(insertionOrder.id + index)}>
                  <td className="pl-12 text-xl font-medium text-purple-900 border-t border-r border-purple-900">
                    <div className=" flex flex-row items-center">
                      {showCheckBoxOptions && (
                        <div className="mr-3">
                          <CheckBox
                            defaultValue={insertionOrder.selected}
                            handleClick={() => checkBoxHandleClick(insertionOrder)}
                          />
                        </div>
                      )}
                      {handleInsertionOrderSelected ? (
                        <p
                          onClick={() =>
                            !showCheckBoxOptions &&
                            handleInsertionOrderSelected([insertionOrder])
                          }
                          className={`hover:underline ${
                            !showCheckBoxOptions && 'cursor-pointer'
                          }`}
                        >
                          {insertionOrder.name}
                        </p>
                      ) : (
                        <Link
                          href={`/campaigns/insertion-orders/create/${insertionOrder}`}
                          className="hover:underline"
                        >
                          {insertionOrder.name}
                        </Link>
                      )}
                    </div>
                  </td>
                  <td className=" text-xl font-medium text-center text-purple-900 border-t border-purple-900">
                    {String(insertionOrder.id).padStart(4, '0')}
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
