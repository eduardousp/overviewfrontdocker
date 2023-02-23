import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import React, { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { RhythmReplacementDialog } from '@components/Dialog/RhythmReplacementDialog';
import { Input } from '@components/Form/Input';
import { HelpTooltip } from '@components/HelpTooltip';

type ItemType = 'equally' | 'asap';

export default function RateDayAllocation() {
  const [itemType, setItemType] = useState<ItemType>('equally');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openNewDialog, setOpenNewDialog] = useState(false);

  const handleSelectTypeResult = useCallback(
    (resultType: ItemType) => {
      if (resultType === itemType) return;
      setItemType(resultType);
    },
    [itemType]
  );

  return (
    <Box.Column className=" flex justify-start">
      <Input.Label className=" w-auto gap-6 text-blue-900">
        Alocação de ritmo diário
        <HelpTooltip className="text-gray-300">
          Informação sobre o tópico que aparece ao se passar o mouse.
        </HelpTooltip>
      </Input.Label>

      <Box.Row className=" flex justify-start mt-4 mb-4">
        <Box.Column className="flex-row items-start mr-1">
          <ButtonOrange
            title="Igualmente"
            background={itemType === 'equally'}
            onClick={() => handleSelectTypeResult('equally')}
          />
        </Box.Column>
        <Box.Column className="flex-row items-start">
          <ButtonOrange
            title="ASAP"
            background={itemType === 'asap'}
            onClick={() => handleSelectTypeResult('asap')}
          />
        </Box.Column>
      </Box.Row>

      <Box.Title className="justify-center w-auto gap-6 text-blue-900">
        Substituições de ritmo horário
        <HelpTooltip className="text-gray-300">
          Informação sobre o tópico que aparece ao se passar o mouse.
        </HelpTooltip>
      </Box.Title>

      <Box.Label className="flex flex-row justify-start w-auto gap-2 mt-4 mb-4 text-blue-900">
        Substituição de ritmo nº1
        <Dialog.Root open={openEditDialog} onOpenChange={setOpenEditDialog}>
          <Dialog.Trigger>
            <Image src="/svg/pencil.svg" width={20} height={24} alt="" className="ml-1" />
          </Dialog.Trigger>

          <RhythmReplacementDialog title="Editar" />
        </Dialog.Root>
      </Box.Label>

      <Box.Row className=" flex justify-start mb-4">
        <Box.Column className="flex-row items-start mr-20">
          <Dialog.Root open={openNewDialog} onOpenChange={setOpenNewDialog}>
            <Dialog.Trigger>
              <ButtonOrange
                title="+Novo"
                background={false}
                border={false}
                onClick={() => {}}
              />
            </Dialog.Trigger>

            <RhythmReplacementDialog title="Criar" />
          </Dialog.Root>
        </Box.Column>
        <Box.Column className="flex-row items-start">
          <ButtonOrange
            title="Remove Todos"
            background={false}
            border={false}
            onClick={() => {}}
          />
        </Box.Column>
      </Box.Row>
    </Box.Column>
  );
}
