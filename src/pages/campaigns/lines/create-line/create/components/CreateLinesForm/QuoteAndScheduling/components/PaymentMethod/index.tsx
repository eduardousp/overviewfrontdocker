import React, { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';
import { HelpTooltip } from '@components/HelpTooltip';
import SelectBox from '@components/SelectBox';
import { SelectBoxItem } from '@components/SelectBox/types';

import { listTypeResultSelect } from '../../uteis';

export default function PaymentMethod() {
  const [resultTypeDefault, setResultTypeDefault] = useState<'default' | 'result'>(
    'default'
  );

  const [typeResultList, setTypeResultList] =
    useState<SelectBoxItem[]>(listTypeResultSelect);

  const handleTypeResultSelected = useCallback((item: SelectBoxItem) => {
    setTypeResultList(
      listTypeResultSelect.map((typeResult) => ({
        ...typeResult,
        selected: typeResult.id === item.id,
      }))
    );
  }, []);

  const handleSelectTypeResult = useCallback(
    (resultType: 'default' | 'result') => {
      if (resultType === resultTypeDefault) return;
      setResultTypeDefault(resultType);
    },
    [resultTypeDefault]
  );

  return (
    <Input.Root className="flex flex-row gap-6 px-8 pt-6">
      <Input.Label className="gap-6 text-blue-900">
        Método de pagamento<Input.Required className="mr-1">*</Input.Required>
        <HelpTooltip className="text-gray-300">
          Informação sobre o tópico que aparece ao se passar o mouse.
        </HelpTooltip>
      </Input.Label>

      <Box.Column className="flex-row items-start ml-10">
        <ButtonOrange
          title="Padrão"
          background={resultTypeDefault === 'default'}
          onClick={() => handleSelectTypeResult('default')}
        />
      </Box.Column>
      <Box.Column>
        <Box.Row className="mb-2">
          <ButtonOrange
            title="Resultados"
            background={resultTypeDefault === 'result'}
            onClick={() => handleSelectTypeResult('result')}
          />
        </Box.Row>
        {resultTypeDefault === 'result' && (
          <SelectBox data={typeResultList} onItemPressed={handleTypeResultSelected} />
        )}
      </Box.Column>
    </Input.Root>
  );
}
