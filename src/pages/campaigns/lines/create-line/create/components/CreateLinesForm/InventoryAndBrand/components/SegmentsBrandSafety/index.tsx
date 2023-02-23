import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import React, { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import { BrandSafetyDialog } from '@components/Dialog/BrandSafetyDialog';
import { Input } from '@components/Form/Input';

interface BrandSafety {
  id: number;
  value: string;
}

const SegmentsBrandSafety = () => {
  const [listBrandSafety, setListBrandSafety] = useState<BrandSafety[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleListBrandSafetySelected = useCallback((value: any[]) => {
    setListBrandSafety(value);
    setOpenDialog(false);
  }, []);

  return (
    <Box.Column>
      <Input.Root className="w-fit flex-row items-center">
        <Input.Label className="flex flex-row text-blue-900">
          Segmentos de Brand Safety
        </Input.Label>
      </Input.Root>
      <Box.Row className="justify-start mt-4 ml-5">
        {listBrandSafety.length === 0 ? (
          <Box.Value>Segmentação definida</Box.Value>
        ) : (
          <Box.Column>
            {listBrandSafety.map((brandSafety) => (
              <Box.Value key={brandSafety.id}>
                {brandSafety.id} - {brandSafety.value}
              </Box.Value>
            ))}
          </Box.Column>
        )}
        <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
          <Dialog.Trigger>
            <Image src="/svg/pencil.svg" width={20} height={24} alt="" className="ml-1" />
          </Dialog.Trigger>

          <BrandSafetyDialog
            handleItemSelected={handleListBrandSafetySelected}
            currentListItemsSelected={listBrandSafety}
          />
        </Dialog.Root>
      </Box.Row>
    </Box.Column>
  );
};

export default SegmentsBrandSafety;
