import React, { useCallback, useMemo, useState } from 'react';

import Arrow from '@assets/Arrow';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';

import Chart from './Chart';
import { data } from './Chart/mockdata';

type ItemType = 'diary' | 'cumulative';

const listMonths = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default function OverviewBudget() {
  const [itemType, setItemType] = useState<ItemType>('diary');
  const [currentMonth, setCurrentMonth] = useState<number>(10);

  const handleSelectTypeResult = useCallback(
    (resultType: ItemType) => {
      if (resultType === itemType) return;
      setItemType(resultType);
    },
    [itemType]
  );

  const nextMonth = useCallback(() => {
    if (currentMonth + 1 === listMonths.length) {
      return;
    }
    setCurrentMonth((prev) => prev + 1);
  }, [currentMonth]);

  const prevMonth = useCallback(() => {
    if (currentMonth === 0) {
      return;
    }
    setCurrentMonth((prev) => prev - 1);
  }, [currentMonth]);

  const getCurrentMonth = useMemo(
    () => listMonths[currentMonth].toUpperCase(),
    [currentMonth]
  );

  return (
    <Box.Column className="flex justify-start">
      <Input.Label className=" w-auto gap-6 text-blue-900">
        Overview do Orçamento
      </Input.Label>
      <Box.Row className="flex items-center justify-between">
        <Box.Row className=" flex justify-start mt-4 mb-4">
          <Box.Column className="flex-row items-start mr-1">
            <ButtonOrange
              title="Diário"
              background={itemType === 'diary'}
              onClick={() => handleSelectTypeResult('diary')}
            />
          </Box.Column>
          <Box.Column className="flex-row items-start">
            <ButtonOrange
              title="Cumulativo"
              background={itemType === 'cumulative'}
              onClick={() => handleSelectTypeResult('cumulative')}
            />
          </Box.Column>
        </Box.Row>

        <Box.Row className="flex items-center justify-end flex-1 mr-10">
          <Arrow
            width={22}
            height={22}
            className=" cursor-pointer"
            onClick={prevMonth}
            stroke={currentMonth !== 0 ? '#F16024' : '#C6C6C5'}
          />
          <Box.Value className="flex items-center justify-center w-20 ml-1 mr-1 text-base font-medium text-center text-purple-900">
            {getCurrentMonth}
          </Box.Value>

          <Arrow
            width={22}
            height={22}
            className="-scale-x-100 cursor-pointer"
            onClick={nextMonth}
            stroke={currentMonth + 1 !== listMonths.length ? '#F16024' : '#C6C6C5'}
          />
        </Box.Row>

        <div className="border-purple-900 rounded-md border-[1px] flex flex-row justify-center items-center h-6">
          <div className="w-4 h-4 ml-3 mr-1 bg-purple-900" />
          <Box.Value>Orçamento Entregue</Box.Value>

          <div className="w-4 h-4 ml-6 mr-1 bg-gray-300" />
          <Box.Value className="mr-3">Orçamento Esperado</Box.Value>
        </div>
      </Box.Row>

      <Box.Column className="w-full h-56">
        <Chart data={data} />
      </Box.Column>
    </Box.Column>
  );
}
