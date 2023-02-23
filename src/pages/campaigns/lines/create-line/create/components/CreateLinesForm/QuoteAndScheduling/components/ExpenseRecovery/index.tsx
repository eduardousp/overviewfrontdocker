import React, { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';
import { HelpTooltip } from '@components/HelpTooltip';

type ItemType = 'equally' | 'asap';

export default function ExpenseRecovery() {
  const [itemType, setItemType] = useState<ItemType>('equally');

  const handleSelectTypeResult = useCallback(
    (resultType: ItemType) => {
      if (resultType === itemType) return;
      setItemType(resultType);
    },
    [itemType]
  );

  return (
    <Box.Row className=" flex justify-start">
      <Input.Label className=" w-auto gap-6 text-blue-900">
        Recuperação de gastos insuficientes
        <HelpTooltip className="text-gray-300">
          Informação sobre o tópico que aparece ao se passar o mouse.
        </HelpTooltip>
      </Input.Label>

      <Box.Row className="flex justify-start ml-5">
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
    </Box.Row>
  );
}
