import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import React, { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import { KeyValueDialog } from '@components/Dialog/KeyValueDialog';
import { Input } from '@components/Form/Input';

interface KeyValue {
  id: number;
  value: string;
}

const SegmentationValueKey = () => {
  const [listKeysValues, setListKeysValues] = useState<KeyValue[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleListKeysSelected = useCallback((value: any[]) => {
    setListKeysValues(value);
    setOpenDialog(false);
  }, []);

  return (
    <Box.Column>
      <Input.Root className="w-fit flex-row items-center">
        <Input.Label className="flex flex-row text-blue-900">
          Segmentação Chave/Valor
        </Input.Label>
      </Input.Root>
      <Box.Row className="justify-start mt-4 ml-5">
        {listKeysValues.length === 0 ? (
          <Box.Value>Sem pixel de conversão associado</Box.Value>
        ) : (
          <Box.Column>
            {listKeysValues.map((keyValue) => (
              <Box.Value key={keyValue.id}>
                {keyValue.id} - {keyValue.value}
              </Box.Value>
            ))}
          </Box.Column>
        )}
        <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
          <Dialog.Trigger>
            <Image src="/svg/pencil.svg" width={20} height={24} alt="" className="ml-1" />
          </Dialog.Trigger>

          <KeyValueDialog
            handlePixelSelected={handleListKeysSelected}
            currentListPixelsSelected={listKeysValues}
          />
        </Dialog.Root>
      </Box.Row>
    </Box.Column>
  );
};

export default SegmentationValueKey;
