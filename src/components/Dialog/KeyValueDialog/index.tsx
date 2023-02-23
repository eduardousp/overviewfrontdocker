/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Image from 'next/future/image';
import { CheckCircle, XCircle } from 'phosphor-react';
import { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { RadioItem } from '@components/Form/RadioItem';
import { SearchInput } from '@components/Form/SearchInput';

interface Key {
  id: number;
  value: string;
  success: boolean;
}

interface GroupKey {
  id: number;
  listKeys: Key[];
}

// interface Props {}

const keysDefault: Key[] = [{ id: 0, value: '', success: true }];

const listGroupKeyDefault: GroupKey[] = [
  {
    id: 0,
    listKeys: keysDefault,
  },
];

export function KeyValueDialog() {
  const [listGroupKeys, setListGroupKeys] = useState<GroupKey[]>(listGroupKeyDefault);
  const [type, setType] = useState<string>('any');

  const handleAddKey = useCallback(
    (group: GroupKey) => {
      const updateList = listGroupKeys.map((item) => {
        if (item.id === group.id) {
          return {
            id: item.id,
            listKeys: [
              ...item.listKeys,
              {
                id: item.listKeys.length + 1,
                value: '',
                success: true,
              },
            ],
          };
        }
        return item;
      });

      setListGroupKeys(updateList);
    },
    [listGroupKeys]
  );

  const handleAddGroup = useCallback(() => {
    const updateList = [
      ...listGroupKeys,
      { id: listGroupKeys.length + 1, listKeys: keysDefault },
    ];

    setListGroupKeys(updateList);
  }, [listGroupKeys]);

  const handleRemoveGroup = useCallback((id: number) => {
    setListGroupKeys((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleRemoveKey = useCallback(
    ({ keyId, groupId }: { groupId: number; keyId: number }) => {
      if (listGroupKeys.length === 1 && listGroupKeys[0].listKeys.length === 1) {
        setListGroupKeys([]);
        return;
      }

      const checkListSize = listGroupKeys.filter((item) => item.id === groupId);

      if (checkListSize[0].listKeys.length === 1) {
        handleRemoveGroup(groupId);
        return;
      }

      const updateList = listGroupKeys.map((itemGroup) => {
        if (itemGroup.id === groupId) {
          const updateKeys = itemGroup.listKeys.filter((key) => key.id !== keyId);
          return {
            id: itemGroup.id,
            listKeys: updateKeys,
          };
        }
        return itemGroup;
      });
      setListGroupKeys(updateList);
    },
    [handleRemoveGroup, listGroupKeys]
  );

  const handleUpdateSuccessKey = useCallback(
    ({ keyId, groupId }: { groupId: number; keyId: number }) => {
      const updateList = listGroupKeys.map((itemGroup) => {
        if (itemGroup.id === groupId) {
          const updateItemList = itemGroup.listKeys.map((itemKey) => {
            if (itemKey.id === keyId) {
              return {
                ...itemKey,
                success: !itemKey.success,
              };
            }
            return itemKey;
          });
          return {
            ...itemGroup,
            listKeys: updateItemList,
          };
        }
        return itemGroup;
      });
      setListGroupKeys(updateList);
    },
    [listGroupKeys]
  );

  const handleUpdateValueKey = useCallback(
    ({ keyId, groupId, value }: { groupId: number; keyId: number; value: string }) => {
      const updateList = listGroupKeys.map((itemGroup) => {
        if (itemGroup.id === groupId) {
          const updateItemList = itemGroup.listKeys.map((itemKey) => {
            if (itemKey.id === keyId) {
              return {
                ...itemKey,
                value,
              };
            }
            return itemKey;
          });
          return {
            ...itemGroup,
            listKeys: updateItemList,
          };
        }
        return itemGroup;
      });
      setListGroupKeys(updateList);
    },
    [listGroupKeys]
  );

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col py-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none max-w-5xl w-full h-[36rem] rounded-xl state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <Dialog.Title className="ml-7 text-2xl font-medium text-purple-900">
          Segmentação Chave/Valor
        </Dialog.Title>
        <Box.Divider className="mt-3 mb-3" />

        <Box.Column className="flex justify-start px-8 mt-2">
          <Box.Row className="flex justify-start">
            <RadioGroup.Root
              className="flex items-center gap-6"
              defaultValue={type}
              onValueChange={setType}
            >
              <RadioItem label="Qualquer um" value="any" />
              <RadioItem label="Todos" value="all" />
            </RadioGroup.Root>

            <Box.Value className="flex flex-row">
              <Box.Value className="text-orange-500">*</Box.Value>dos seguintes grupos
              chaves/valores
            </Box.Value>
          </Box.Row>

          <Box.Column className=" h-[350px] px-4 mx-8 mt-6 overflow-y-scroll">
            {listGroupKeys.map((group) => (
              <Box.Column
                key={group.id}
                className="bg-gray-50 relative w-full p-4 mt-2 mb-4"
              >
                <button
                  type="button"
                  onClick={() => handleRemoveGroup(group.id)}
                  className="-top-2 -right-2 absolute"
                >
                  <XCircle size={26} weight="fill" className="text-gray-300" />
                </button>
                {group.listKeys.map((key, index) => (
                  <Box.Column key={key.id}>
                    <Box.Row className="bg-white border-[1px] border-success px-3 py-1 items-center relative">
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateSuccessKey({ groupId: group.id, keyId: key.id })
                        }
                      >
                        <CheckCircle
                          size={26}
                          weight={key.success ? 'fill' : 'thin'}
                          className="text-success"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateSuccessKey({ groupId: group.id, keyId: key.id })
                        }
                      >
                        <XCircle
                          size={26}
                          weight={!key.success ? 'fill' : 'thin'}
                          className="text-danger"
                        />
                      </button>
                      <SearchInput
                        value={key.value}
                        onChange={(e) =>
                          handleUpdateValueKey({
                            keyId: key.id,
                            groupId: group.id,
                            value: e.target.value,
                          })
                        }
                      />
                      <Image src="/svg/pencil.svg" width={27} height={27} alt="" />
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveKey({ groupId: group.id, keyId: key.id })
                        }
                      >
                        <XCircle size={26} weight="fill" className="text-gray-300" />
                      </button>
                    </Box.Row>
                    {group.listKeys.length > 1 && index + 1 < group.listKeys.length && (
                      <Box.Value className="my-1">
                        {type === 'any' ? 'e' : 'ou'}
                      </Box.Value>
                    )}
                  </Box.Column>
                ))}
                <ButtonOrange
                  background={false}
                  border={false}
                  title="Add Chave"
                  onClick={() => handleAddKey(group)}
                />
              </Box.Column>
            ))}
            <ButtonOrange
              background={false}
              border={false}
              title="Add Grupo"
              onClick={handleAddGroup}
            />
          </Box.Column>
          <Box.Divider className="mt-3" />
          <Box.Row className="flex justify-end mt-3">
            <Dialog.DialogClose onClick={() => setListGroupKeys([])}>
              <ButtonOrange title="Cancelar" background={false} />
            </Dialog.DialogClose>
            <ButtonOrange title="Salvar" />
          </Box.Row>
        </Box.Column>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
