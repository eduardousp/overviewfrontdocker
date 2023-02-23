import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import React from 'react';

import { Box } from '@components/Box';
import CalendarWeek from '@components/CalendarWeek';
import { Input } from '@components/Form/Input';

export default function MomentTheDay() {
  return (
    <Box.Column className="flex justify-start">
      <Input.Label className=" w-auto gap-6 text-blue-900">Momentos do dia</Input.Label>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Box.Label className="flex flex-row justify-start w-auto gap-2 mt-4 mb-4 text-blue-900">
            Segmentação Definida
            <Image
              src="/svg/pencil.svg"
              width={20}
              height={24}
              alt=""
              className="cursor-pointer"
            />
          </Box.Label>
        </Dialog.Trigger>
        <CalendarWeek />
      </Dialog.Root>
    </Box.Column>
  );
}
