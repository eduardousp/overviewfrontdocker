import Image from 'next/image';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';

import calendarSvg from '@assets/svg/calendar.svg';
import clockSvg from '@assets/svg/clock.svg';
import close from '@assets/svg/close.svg';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import CustomInput from '@components/CustomInput';
import { Input } from '@components/Form/Input';
import { HelpTooltip } from '@components/HelpTooltip';
import SelectBox from '@components/SelectBox';
import { SelectBoxItem } from '@components/SelectBox/types';

import { listRateSelect } from '../../uteis';

export interface FlightProps {
  id: string;
  position: number;
  name: string;
}

interface PropsFlight {
  data: FlightProps;
  onClickRemove: () => void;
  infiniteBudget: boolean;
}

const Flight = ({ data, onClickRemove, infiniteBudget }: PropsFlight) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [startHour, setStarHour] = useState<Date | null>(new Date());
  const [endHour, setEndHour] = useState<Date | null>(new Date());
  const [budgetValue, setBudgetValue] = useState<string>('');
  const [budgetDayValue, setBudgetDayValue] = useState<string>('');
  const [budgetPercentage, setBudgePercentage] = useState<string>('');
  const [typeRateList, setTypeRateList] = useState<SelectBoxItem[]>(listRateSelect);

  const handleTypeRateSelected = useCallback(
    (item: SelectBoxItem) => {
      setTypeRateList(
        listRateSelect.map((typeResult) => ({
          ...typeResult,
          selected: typeResult.id === item.id,
          clicked: !infiniteBudget,
        }))
      );
    },
    [infiniteBudget]
  );

  const rateSelected = useMemo(() => {
    return typeRateList.filter((item) => item.selected)[0];
  }, [typeRateList]);

  useEffect(() => {
    handleTypeRateSelected(listRateSelect[1]);
  }, [infiniteBudget, handleTypeRateSelected]);

  const handleBoxInput = useMemo(() => {
    const boxPrice = (
      <Box.Column className="item-center pt-7 flex justify-start h-full">
        <CustomInput
          label="R$"
          value={budgetDayValue}
          className="w-20 mr-1"
          setValue={setBudgetDayValue}
        />
      </Box.Column>
    );

    if (infiniteBudget) {
      return boxPrice;
    }

    if (rateSelected.id === 1) {
      return boxPrice;
    }

    return (
      <Box.Column className="item-center flex justify-start h-full pb-10">
        <CustomInput
          label="%"
          value={budgetPercentage}
          className="w-10 mr-1"
          maxLength={3}
          labelRight
          setValue={setBudgePercentage}
        />
      </Box.Column>
    );
  }, [budgetDayValue, budgetPercentage, infiniteBudget, rateSelected.id]);

  return (
    <Box.Row className="bg-gray-50 relative flex justify-start w-full mb-4 rounded-lg">
      <div className="w-2 min-h-[160px] bg-orange-500 rounded-l-lg " />
      <Box.Column className="relative flex justify-start w-full pt-4 pl-4">
        <button type="button" className="top-2 right-2 absolute" onClick={onClickRemove}>
          <Image src={close} />
        </button>
        <Input.Label className=" w-auto gap-6 text-blue-900">
          {`${data.name} ${data.position}`}
          <Input.Required className="mr-1">*</Input.Required>
        </Input.Label>
        <Box.Row className=" flex w-full h-full">
          <Box.Column className="h-full m-0">
            <Box.Value className="w-auto pb-2 text-blue-900">Data de início</Box.Value>

            <Box.Row className="flex">
              <div className="relative flex justify-start w-32 px-2 bg-white rounded-md">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-20"
                  disabledKeyboardNavigation
                />
                <Image src={calendarSvg} height={32} />
              </div>
              <div className="relative flex justify-start w-24 px-2 bg-white rounded-md">
                <DatePicker
                  selected={startHour}
                  onChange={(date) => setStarHour(date)}
                  className="w-16"
                  disabledKeyboardNavigation
                  showTimeInput
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
                <Image src={clockSvg} />
              </div>
            </Box.Row>
            <div className="-ml-2">
              <ButtonOrange
                title="Copiar da Insertion Order"
                background={false}
                border={false}
                onClick={() => {}}
              />
            </div>
          </Box.Column>
          <hr className="mt-10 bg-blue-900 w-2 h-[3px]" />

          <Box.Column className=" h-full m-0">
            <Box.Value className="pb-2 text-blue-900">Data final</Box.Value>

            <Box.Row className="flex">
              <div className="relative flex justify-start w-32 px-2 bg-white rounded-md">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="w-20"
                  disabledKeyboardNavigation
                />
                <Image src={calendarSvg} height={32} />
              </div>
              <div className="relative flex justify-start w-24 px-2 bg-white rounded-md">
                <DatePicker
                  selected={endHour}
                  onChange={(date) => setEndHour(date)}
                  className="w-16"
                  disabledKeyboardNavigation
                  showTimeInput
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
                <Image src={clockSvg} />
              </div>
              <Box.Value className=" text-blue-900">GTM-3</Box.Value>
            </Box.Row>
            <div className="self-end pr-10">
              <ButtonOrange
                title="Sem Data Final"
                background={false}
                border={false}
                onClick={() => {}}
              />
            </div>
          </Box.Column>

          <Box.Column className="h-full m-0">
            <Box.Value className=" w-auto gap-6 pb-2 text-blue-900">
              Ritmo
              <HelpTooltip className="ml-1 text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </Box.Value>
            <Box.Row className="item-start flex justify-start">
              <SelectBox data={typeRateList} onItemPressed={handleTypeRateSelected} />
              {handleBoxInput}
            </Box.Row>
          </Box.Column>
          <Box.Column className="items-start h-full mr-10">
            <Box.Value className="flex justify-start pb-2 text-blue-900">
              Orçamento
            </Box.Value>
            {infiniteBudget ? (
              <Box.Value className="">Ilimitado</Box.Value>
            ) : (
              <Box.Column>
                <CustomInput
                  label="R$ "
                  value={budgetValue}
                  className="w-24"
                  setValue={setBudgetValue}
                />
              </Box.Column>
            )}
          </Box.Column>
        </Box.Row>
      </Box.Column>
    </Box.Row>
  );
};

export default Flight;
