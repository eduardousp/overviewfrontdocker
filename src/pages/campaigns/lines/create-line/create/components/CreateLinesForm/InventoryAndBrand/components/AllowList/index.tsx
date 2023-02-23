import { BlockList } from '@model/Blocklist';
import * as Dialog from '@radix-ui/react-dialog';
import React, { useCallback, useMemo, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import BlockListDialog from '@components/Dialog/BlockListDialog';
import { Input } from '@components/Form/Input';
import { SearchInput } from '@components/Form/SearchInput';
import { HelpTooltip } from '@components/HelpTooltip';

export default function AllowListView() {
  const [openDialog, setOpenDialog] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [listBlocklist, setListBlocklist] = useState<BlockList[]>([]);

  const handleRemoveBlock = useCallback(
    (id: number) => {
      setListBlocklist(listBlocklist.filter((item) => item.id !== id));
    },
    [listBlocklist]
  );

  const blockLists = useMemo(() => {
    if (!search) return listBlocklist;

    return listBlocklist.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [listBlocklist, search]);

  const handleCloseDialog = useCallback(
    (value: BlockList) => {
      if (value.listDomains.length !== 0) {
        setListBlocklist([...listBlocklist, value]);
      }
      setOpenDialog(false);
    },
    [listBlocklist]
  );

  return (
    <Box.Column className="flex items-center">
      <Box.Row className="flex justify-start w-full">
        <Input.Root className="flex flex-row w-[10%]">
          <Input.Label className="flex flex-row text-blue-900">Allowlist</Input.Label>
          <HelpTooltip className="text-gray-300">
            Informação sobre o tópico que aparece ao se passar o mouse.
          </HelpTooltip>
        </Input.Root>

        <Box.Row className="flex justify-start ml-5">
          <Box.Column className="w-[60%] ">
            <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
          </Box.Column>

          <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
            <Dialog.Trigger>
              <ButtonOrange title="+ Criar Allowlist" background={false} />
            </Dialog.Trigger>

            <BlockListDialog closeModal={handleCloseDialog} />
          </Dialog.Root>
        </Box.Row>
      </Box.Row>

      {blockLists.length !== 0 && (
        <Box.Column className="flex w-[90%] mt-4">
          <tr className=" flex justify-between w-full px-3">
            <td className="w-[30%]">
              <Box.Label className="text-blue-900">Nome</Box.Label>
            </td>
            <td className="flex flex-row w-[30%]">
              <Box.Label className="mr-1 text-blue-900">ID</Box.Label>
            </td>
            <td className="flex flex-row w-[30%]">
              <Box.Label className="mr-1 text-blue-900">Provedor</Box.Label>
            </td>
            <td className="w-[10%]" />
          </tr>
          {blockLists.map((block) => (
            <tr
              key={block.id.toString()}
              className="bg-gray-50 flex justify-between w-full px-3 pt-2 pb-1"
            >
              <td className="w-[30%]">
                <Box.Value className="text-blue-900">{block.name}</Box.Value>
              </td>
              <td className="w-[30%]">
                <Box.Value className="mr-1 text-blue-900">{block.id}</Box.Value>
              </td>
              <td className="w-[30%]">
                {block.listDomains.map((domain) => (
                  <Box.Value className="mr-1 text-blue-900">{domain.domain}</Box.Value>
                ))}
              </td>
              <td className="w-[10%]">
                <ButtonOrange
                  title="Remover"
                  border={false}
                  background={false}
                  onClick={() => handleRemoveBlock(block.id)}
                />
              </td>
            </tr>
          ))}
        </Box.Column>
      )}
    </Box.Column>
  );
}
