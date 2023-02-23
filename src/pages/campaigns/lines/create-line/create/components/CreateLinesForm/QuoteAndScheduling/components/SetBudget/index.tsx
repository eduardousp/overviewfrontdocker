import React, { useCallback, useState, useMemo } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';

import Flight, { FlightProps } from './Flight';

type ItemType = 'defined_budget' | 'infinite_budget';

const generateId = () => `id${Math.random().toString(16).slice(2)}`;

const listFlight: FlightProps[] = [
  {
    id: generateId(),
    position: 1,
    name: 'Flight',
  },
];

export default function SetBudget() {
  const [itemType, setItemType] = useState<ItemType>('infinite_budget');
  const [flights, setFlights] = useState<FlightProps[]>(listFlight);

  const handleSelectTypeResult = useCallback(
    (resultType: ItemType) => {
      if (resultType === itemType) return;
      setItemType(resultType);
    },
    [itemType]
  );

  const handleRemoveFlight = useCallback(
    (data: FlightProps) => {
      if (flights.length === 1) return;
      const list = flights.filter((item) => item.id !== data.id);
      setFlights(list);
    },
    [flights]
  );

  const handleAddFlight = useCallback(() => {
    const id = generateId();

    setFlights([
      ...flights,
      {
        id,
        name: 'Flight',
        position: flights[flights.length - 1].position + 1,
      },
    ]);
  }, [flights]);

  const listViewsFlights = useMemo(() => {
    return (
      <>
        {flights.map((item) => (
          <div key={item.id}>
            <Flight
              infiniteBudget={itemType === 'infinite_budget'}
              data={item}
              onClickRemove={() => handleRemoveFlight(item)}
            />
          </div>
        ))}
      </>
    );
  }, [flights, handleRemoveFlight, itemType]);

  return (
    <div>
      <Input.Root className="flex flex-col gap-8 pt-0 pb-4">
        <Box.Row className=" flex justify-start">
          <Input.Label className=" w-auto gap-6 text-blue-900">
            Definir Orçamento<Input.Required className="mr-1">*</Input.Required>
          </Input.Label>

          <Box.Row className="flex justify-start ml-5">
            <Box.Column className="flex-row items-start mr-1">
              <ButtonOrange
                title="Orçamento Definido"
                background={itemType === 'defined_budget'}
                onClick={() => handleSelectTypeResult('defined_budget')}
              />
            </Box.Column>
            <Box.Column className="flex-row items-start">
              <ButtonOrange
                title="Orçamento Ilimitado"
                background={itemType === 'infinite_budget'}
                onClick={() => handleSelectTypeResult('infinite_budget')}
              />
            </Box.Column>
          </Box.Row>
        </Box.Row>
        {listViewsFlights}
      </Input.Root>
      <Box.Row>
        <button
          type="button"
          onClick={handleAddFlight}
          className="h-7 px-4 text-orange-600 border border-orange-600 rounded"
        >
          + Adicionar Flight
        </button>
        <Box.Row>
          <Box.Label>R$ 999,99 Orçado</Box.Label>
          <ButtonOrange title="Auto-Orçamento" />
        </Box.Row>
      </Box.Row>
    </div>
  );
}
