/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { XCircle } from 'phosphor-react';
import { useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';

import calendarSvg from '@assets/svg/calendar.svg';

import { Box } from '@components/Box';
import { Button } from '@components/Button';
import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';
import LineChart from '@components/Graphics/LineChart';
import { percentageAlocationChartMock } from '@components/Graphics/mock';
import { HelpTooltip } from '@components/HelpTooltip';
import { ToggleButtonGroup } from '@components/ToggleButtonGroup';

interface Props {
  title: 'Editar' | 'Criar';
}

type DaySelectionType = 'dates' | 'day_of_week';

export function RhythmReplacementDialog({ title }: Props) {
  const [daySelectionType, setDaySelectionType] = useState<DaySelectionType>('dates');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleSelectDayTypeResult = useCallback(
    (resultType: DaySelectionType) => {
      if (resultType === daySelectionType) return;
      setDaySelectionType(resultType);
    },
    [daySelectionType]
  );

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col py-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none w-[1440px] w-full h-[700px] state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <header className="border-b border-purple-900">
          <Dialog.Title className="pl-4 pb-4 text-2xl font-medium text-blue-900">
            {title} Substituição de Ritmo Horário
          </Dialog.Title>
          <Dialog.Close className="top-1 right-1 absolute">
            <XCircle size={32} weight="fill" className="text-gray-300" />
          </Dialog.Close>
        </header>

        <section className="w-full h-full">
          <Box.Row className=" flex justify-start my-4 ml-5">
            <Box.Column className="flex-row items-start mr-1">
              <ButtonOrange
                title="Selecionar Datas"
                background={daySelectionType === 'dates'}
                onClick={() => handleSelectDayTypeResult('dates')}
              />
            </Box.Column>
            <Box.Column className="flex-row items-start">
              <ButtonOrange
                title="Selecionar Dia da Semana"
                background={daySelectionType === 'day_of_week'}
                onClick={() => handleSelectDayTypeResult('day_of_week')}
              />
            </Box.Column>
          </Box.Row>

          {daySelectionType === 'dates' ? (
            <Input.Root>
              <Input.Label
                htmlFor="systems"
                className="text-blue-900 flex items-center gap-1 ml-5"
              >
                Intervalo de datas personalizado
              </Input.Label>

              <div className="flex ml-3 w-200 h-7">
                <div className="relative flex justify-start px-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    disabledKeyboardNavigation
                    className="border border-orange-600 mx-0 w-24 pl-2"
                    dateFormat="dd/MM/yyyy"
                  />
                  <Image src={calendarSvg} height={32} />
                </div>

                <span className="mx-1">-</span>

                <div className="relative flex justify-start px-2">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    disabledKeyboardNavigation
                    className="border border-orange-600 mx-0 w-24 pl-2"
                    dateFormat="dd/MM/yyyy"
                  />
                  <Image src={calendarSvg} height={32} />
                </div>
              </div>
            </Input.Root>
          ) : (
            <Input.Root>
              <Input.Label
                htmlFor="systems"
                className="text-blue-900 flex items-center gap-1 ml-5"
              >
                Dias da Semana
              </Input.Label>

              <ToggleButtonGroup.Root className="ml-5">
                <ToggleButtonGroup.Item>S</ToggleButtonGroup.Item>
                <ToggleButtonGroup.Item>T</ToggleButtonGroup.Item>
                <ToggleButtonGroup.Item>Q</ToggleButtonGroup.Item>
                <ToggleButtonGroup.Item>Q</ToggleButtonGroup.Item>
                <ToggleButtonGroup.Item>S</ToggleButtonGroup.Item>
                <ToggleButtonGroup.Item>S</ToggleButtonGroup.Item>
                <ToggleButtonGroup.Item>D</ToggleButtonGroup.Item>
              </ToggleButtonGroup.Root>
            </Input.Root>
          )}
          <Input.Root>
            <Input.Label
              htmlFor="systems"
              className="text-blue-900 flex items-center gap-1 ml-5 mt-4"
            >
              Alocação de Porcentagens
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
              <span className="text-orange-600 text-base font-normal">Obs*</span>
              <span className="text-purple-900 text-base font-normal">
                Você pode clicar e arrastar para criar um segmento de horário balanceado.
              </span>
            </Input.Label>
          </Input.Root>

          <div>
            <span className="w-full flex justify-end text-base font-medium pr-4">
              Total 100%
            </span>

            <div className="flex w-full justify-items-center mt-2 ml-12">
              {percentageAlocationChartMock[0].data.map((data) => {
                return (
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="appearance-none border border-orange-500 h-[24px] w-[44px] pl-1 items-center mx-1.5"
                    id="frequency-1"
                    value={Number(data.y)}
                  />
                );
              })}
            </div>

            <LineChart
              axisBottom={null}
              axisLeft={{ tickSize: 4, tickPadding: 8 }}
              axisTop={{ tickSize: 4, tickPadding: 8 }}
              className="h-[300px]"
              color={['#000']}
              data={percentageAlocationChartMock}
              enableGridX
              enablePoints
              margin={{ top: 20, right: 60, bottom: 16, left: 60 }}
              pointColor={['#118DFF']}
              pointSize={8}
              useMesh
            />
          </div>
        </section>

        <footer className="md:flex-row md:gap-0 flex gap-2 px-8 border-t border-purple-900 pt-4">
          <Dialog.Close className="hover:opacity-60 ml-auto text-xl font-medium text-orange-600 transition-opacity mr-7">
            Cancelar
          </Dialog.Close>

          <Button type="submit" className="text-xl h-8">
            <span>Salvar</span>
          </Button>
        </footer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
