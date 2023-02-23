/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUp, XCircle } from 'phosphor-react';
import { useCallback, useMemo, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import CheckBox from '@components/CheckBox/index';
import { SearchInput } from '@components/Form/SearchInput';
import { Pagination } from '@components/Pagination';

import { TabItem, Type } from './types';
import { getListButtonsTypes, getListTabs } from './utils';

interface Props {
  handleItemSelected?: (itemList: any[]) => void;
  currentListItemsSelected?: any[];
}

export function BrandSafetyDialog({
  handleItemSelected,
  // eslint-disable-next-line no-unused-vars
  currentListItemsSelected,
}: Props) {
  const [listTabs, setListTabs] = useState<TabItem[]>(getListTabs());
  const [listButtonsType, setListButtonsType] = useState<Type[]>(getListButtonsTypes());
  const [search, setSearch] = useState<string>('');

  const handleTabSelect = useCallback(
    (tabId: number) => {
      setListTabs(
        listTabs.map((item) => {
          return {
            ...item,
            selected: item.id === tabId,
          };
        })
      );
    },
    [listTabs]
  );

  const handleButtonSelected = useCallback(
    (buttonTypeId: number) => {
      setListButtonsType(
        listButtonsType.map((item) => {
          return {
            ...item,
            selected: item.id === buttonTypeId,
          };
        })
      );
    },
    [listButtonsType]
  );

  const listItems = useMemo(() => {
    const currentTabList = listTabs.filter((item) => item.selected);
    if (search) {
      return currentTabList[0]?.listItems.filter((currentItem) =>
        currentItem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
    return currentTabList[0]?.listItems;
  }, [listTabs, search]);

  const handleItemChecked = useCallback(
    (itemId: number) => {
      const updateListItems = listItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });

      const updateListTabs = listTabs.map((tab) => {
        if (tab.selected) {
          return {
            ...tab,
            listItems: updateListItems,
          };
        }
        return tab;
      });

      setListTabs(updateListTabs);
    },
    [listItems, listTabs]
  );

  const handleRemoveAllItems = useCallback(() => {
    const updateListItems = listItems.map((item) => {
      return {
        ...item,
        selected: false,
      };
    });

    const updateListTabs = listTabs.map((tab) => {
      if (tab.selected) {
        return {
          ...tab,
          listItems: updateListItems,
        };
      }
      return tab;
    });

    setListTabs(updateListTabs);
  }, [listItems, listTabs]);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col py-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none max-w-[85%] w-full h-[40rem] rounded-xl state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <Dialog.Title className="ml-7 text-2xl font-medium text-purple-900">
          Segmentos de Brand Safety
        </Dialog.Title>

        <Box.Divider className="mt-2" />
        <Box.Row className="flex w-full h-full gap-0">
          <Box.Column className="w-[17%] h-full border-r-[1px] border-purple-900  m-0">
            <Box.Column className="gap-0 mt-2">
              {listTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`flex items-center w-full h-8  border-b-[${
                    index + 1 === listTabs.length ? '1px' : '0px'
                  }] border-t-[1px]  border-orange-500 hover:cursor-pointer`}
                >
                  <div
                    className={`${
                      tab.selected ? 'bg-orange-500' : 'bg-transparent'
                    } w-[7px] h-full`}
                  />
                  <Box.Label className="ml-5">{tab.value}</Box.Label>
                </div>
              ))}
            </Box.Column>
          </Box.Column>

          <Box.Column className="w-[55%] h-full border-r-[1px] m-0 border-purple-900 p-0  relative">
            <Box.Column className="flex items-center w-full h-full">
              <Box.Column className="w-[70%] mt-3 mb-2">
                <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />

                <Box.Row className="items-center justify-center mt-2">
                  <Box.Label>Tipo</Box.Label>
                  {listButtonsType.map((buttonType) => (
                    <ButtonOrange
                      title={buttonType.value}
                      background={buttonType.selected}
                      key={buttonType.id}
                      onClick={() => handleButtonSelected(buttonType.id)}
                    />
                  ))}
                </Box.Row>
              </Box.Column>
              <Box.Column className="h-[380px] overflow-y-scroll w-full pb-8">
                <table className="w-full border-b border-purple-900">
                  <thead>
                    <tr>
                      <th className="gap-1" />

                      <th className="justify-start gap-12 font-medium text-purple-900 border-purple-900">
                        <div className="flex justify-start text-base font-semibold">
                          Nome
                          <ArrowUp
                            size={16}
                            weight="bold"
                            className="ml-3 text-orange-600"
                          />
                        </div>
                      </th>
                      <th className="w-[10%] text-purple-900 border-purple-900 items-center justify-center">
                        <div className="flex items-center justify-center text-base font-semibold">
                          ID
                          <ArrowUp size={16} weight="bold" className="text-orange-600" />
                        </div>
                      </th>

                      <th className="w-[100px] text-purple-900 border-purple-900 items-center justify-center flex">
                        <div className="flex text-base font-semibold">
                          Preço
                          <ArrowUp size={16} weight="bold" className="text-orange-600" />
                        </div>
                      </th>

                      <th className=" text-xl font-medium text-purple-900 border-purple-900">
                        <div className="flex items-center gap-4 text-base font-semibold">
                          Comportamento
                          <ArrowUp size={16} weight="bold" className="text-orange-600" />
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {listItems.map((item) => (
                      <tr key={item.id} className="h-10">
                        <td className="text-xl font-medium text-purple-900 border-t border-purple-900">
                          <div className="flex flex-row items-center pl-2">
                            <div className="mr-3">
                              <CheckBox
                                value={item.selected}
                                handleClick={() => handleItemChecked(item.id)}
                              />
                            </div>
                          </div>
                        </td>
                        <td className=" text-base font-medium text-purple-900 border-t border-purple-900">
                          {item.name}
                        </td>
                        <td className=" text-base font-medium text-center text-purple-900 border-t border-purple-900">
                          {String(item.id)}
                        </td>
                        <td className=" text-base font-medium text-center text-purple-900 border-t border-purple-900">
                          {String(item.price)}
                        </td>
                        <td className=" pr-6 text-base font-medium text-center text-purple-900 border-t border-purple-900">
                          {item.behavior}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box.Column>
            </Box.Column>
            <Box.Divider />
            <Box.Row className=" bottom-0 z-10 flex flex-row items-center px-2 mb-1 bg-white">
              <span className="text-blue-900">Fileiras por páginas: 10</span>

              <div className="flex gap-8">
                <Pagination />
              </div>
            </Box.Row>
          </Box.Column>
          <Box.Column className="w-[33%] h-full m-0 p-2">
            <Box.Label>Segmentos Selecionados</Box.Label>
            <Box.Column>
              {listItems.map((item) => {
                if (!item.selected) return null;
                return (
                  <Box.Row
                    key={item.id}
                    className="w-full h-10 border-[1px] border-orange-500 items-center px-2"
                  >
                    {`${item.name} (Nº ${item.id})`}
                    <button
                      type="button"
                      onClick={() => handleItemChecked(item.id)}
                      className=""
                    >
                      <XCircle size={26} weight="fill" className="text-gray-300" />
                    </button>
                  </Box.Row>
                );
              })}
            </Box.Column>
            {listItems.filter((obj) => obj.selected).length !== 0 && (
              <div className="w-[140px] mt-3 -ml-2">
                <ButtonOrange
                  title="Remover Todos"
                  background={false}
                  border={false}
                  onClick={handleRemoveAllItems}
                />
              </div>
            )}
          </Box.Column>
        </Box.Row>
        <Box.Divider className="mb-2" />

        <footer className="md:flex-row md:gap-0 flex flex-col gap-2 px-8 mt-auto">
          <Dialog.Close className="hover:opacity-60 ml-auto text-xl font-medium text-orange-600 transition-opacity">
            Cancelar
          </Dialog.Close>

          <div className="ml-12">
            <ButtonOrange title="Salvar" onClick={() => handleItemSelected} />
          </div>
        </footer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
