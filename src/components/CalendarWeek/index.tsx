import * as Dialog from '@radix-ui/react-dialog';
import {
  TimeGridScheduler,
  SchedulerContext,
  classes,
} from '@remotelock/react-week-scheduler';
import { ScheduleType } from '@remotelock/react-week-scheduler/src/types';
import pt from 'date-fns/locale/pt';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';

import close from '@assets/svg/close_gray.svg';

import 'resize-observer-polyfill/dist/ResizeObserver.global';

import '@remotelock/react-week-scheduler/index.css';
import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { BoxItem } from '@components/SelectBox';
import { SelectBoxItem } from '@components/SelectBox/types';

import { listOptionsFuso } from '@pages/campaigns/lines/create-line/create/components/CreateLinesForm/QuoteAndScheduling/uteis';

import EventContent from './components/EventContent';
import EventRoot from './components/EventRoot';

export default function CalendarWeek() {
  const [schedule, setSchedule] = useState<ScheduleType>([]);
  const [typeFusoList, setTypeFusoList] = useState<SelectBoxItem[]>(listOptionsFuso);

  const handleTypeFusoSelected = useCallback((item: SelectBoxItem) => {
    setTypeFusoList(
      listOptionsFuso.map((typeResult) => ({
        ...typeResult,
        selected: typeResult.id === item.id,
      }))
    );
  }, []);

  const language = useMemo(() => ({ locale: pt }), []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="first-line:fixed inset-0 flex" />

      <Dialog.Content className="state-open:animate-fade-in state-closed:animate-fade-out bg-black/60 absolute bottom-0 right-0 flex items-center justify-center w-full h-full outline-none">
        <Box.Column
          className="bg-white w-screen mx-40 h-[720px] relative"
          style={{
            '--cell-height': '20px',
            '--cell-width': '50px',
          }}
        >
          <Dialog.Close asChild className="top-2 right-2 absolute">
            <button type="button">
              <Image src={close} />
            </button>
          </Dialog.Close>
          <Box.Title className="justify-start w-auto gap-2 pl-4 mt-4 mb-4 text-blue-900">
            Segmentação por momentos no dia
          </Box.Title>
          <Box.Divider />
          <Box.Column className="relative ml-10">
            <div className="border-purple-900 rounded-md border-[1px] absolute w-36 top-2 right-2 flex flex-row justify-center items-center">
              <div className="w-4 h-4 mr-1 bg-purple-900" />
              <Box.Value>Selecionado</Box.Value>
            </div>
            <Box.Row className=" flex justify-start">
              <Box.Column className="flex-row items-start mr-20">
                <ButtonOrange
                  title="Selecionar Todos"
                  background={false}
                  border={false}
                  onClick={() => {}}
                />
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

            <Box.Value className="flex flex-row ml-3 text-orange-500">
              Obs*
              <Box.Value className="ml-1">
                Click e arraste para criar um segmento de horário.
              </Box.Value>
            </Box.Value>
          </Box.Column>
          <Box.Column className="w-[100%] h-[470px]">
            <SchedulerContext.Provider value={language}>
              <TimeGridScheduler
                classes={classes}
                originDate={new Date()}
                schedule={schedule}
                onChange={setSchedule}
                className="w-full h-full p-3 text-purple-900 border-white"
                visualGridVerticalPrecision={60}
                verticalPrecision={30}
                cellClickPrecision={60}
                eventRootComponent={EventRoot}
                eventContentComponent={EventContent}
              />
            </SchedulerContext.Provider>
          </Box.Column>
          <Box.Row className="item-center flex justify-center mt-4 mb-3">
            <BoxItem
              item={typeFusoList[0]}
              onItemPressed={handleTypeFusoSelected}
              classNameLabel="text-[11px] m-0 pt-1"
              className="justify-center mr-0 text-center"
            />
            {typeFusoList[0].selected && (
              <SelectRoot defaultValue="brasil_brasilia">
                <SelectItem value="brasil_brasilia">Brasil/Brasilia</SelectItem>
              </SelectRoot>
            )}
            <BoxItem
              item={typeFusoList[1]}
              onItemPressed={handleTypeFusoSelected}
              classNameLabel="text-[11px] pt-1"
              className="ml-5"
            />
          </Box.Row>
          <Box.Divider />
          <Box.Row className=" flex justify-end mt-2 mr-10">
            <Box.Column className="flex-row items-start mr-5">
              <Dialog.Close>
                <ButtonOrange
                  title="Cancelar"
                  background={false}
                  border={false}
                  onClick={() => {}}
                />
              </Dialog.Close>
            </Box.Column>
            <Box.Column className="flex-row items-start">
              <Dialog.Close>
                <ButtonOrange title="Salvar" onClick={() => {}} />
              </Dialog.Close>
            </Box.Column>
          </Box.Row>
        </Box.Column>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
