import { XCircle } from 'phosphor-react';

import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';
import { Switch } from '@components/Switch';

export function FrequencyRecencySection() {
  return (
    <Accordion.Item value="frequency_recency">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Frequência e recência</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="py-6 h-fit flex-col items-start">
          <Input.Root className="flex-row w-fit gap-8 items-center">
            <Input.Label className="text-blue-900">Limitar</Input.Label>

            <div className="flex gap-3">
              <Switch.Root className="w-12 h-6 px-1">
                <Switch.Thumb className="w-[1.125rem]" />
              </Switch.Root>

              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </div>
          </Input.Root>

          <div className="ml-24 mt-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="frequency-1" className="text-purple-900 font-medium">
                Frequência (Quantas)
              </label>

              <div className="bg-gray-50 px-6 py-2 flex items-center gap-4 relative w-fit">
                <input
                  type="number"
                  className="border border-orange-600 rounded h-8 w-16 px-1"
                  id="frequency-1"
                />
                <span className="text-purple-900 font-medium">Imps por</span>

                <SelectRoot defaultValue="day">
                  <SelectItem value="hour">Hora</SelectItem>
                  <SelectItem value="day">Dia</SelectItem>
                  <SelectItem value="week">Semana</SelectItem>
                  <SelectItem value="month">Mês</SelectItem>
                  <SelectItem value="life">Vida</SelectItem>
                </SelectRoot>

                <button type="button" className="absolute -right-2 -top-2">
                  <XCircle size={20} weight="fill" className="text-gray-300" />
                </button>
              </div>

              <span className="text-orange-600 text-xs font-medium">
                Apenas números inteiros entre 1 - 255
              </span>

              <button
                type="button"
                className="border border-orange-600 w-fit rounded px-4 h-7 text-orange-600"
              >
                + Adicionar Outro Limite
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="frequency-2" className="text-purple-900 font-medium">
                Recência (Com qual frequência)
              </label>

              <div className="bg-gray-50 px-6 py-2 flex items-center gap-4 relative w-fit">
                <span className="text-purple-900 font-medium">1 Imps por</span>

                <input
                  type="number"
                  className="border border-orange-600 rounded h-8 w-16 px-1"
                  id="frequency-2"
                />

                <SelectRoot defaultValue="hours">
                  <SelectItem value="minutes">Minutos</SelectItem>
                  <SelectItem value="hours">Horas</SelectItem>
                  <SelectItem value="days">Dias</SelectItem>
                  <SelectItem value="weeks">Semanas</SelectItem>
                </SelectRoot>

                <button type="button" className="absolute -right-2 -top-2">
                  <XCircle size={20} weight="fill" className="text-gray-300" />
                </button>
              </div>

              <span className="text-orange-600 text-xs font-medium">
                Apenas números inteiros
              </span>

              <Box.Divider />

              <Input.Root className="flex-row items-center w-fit">
                <Switch.Root className="w-8 h-4 px-1">
                  <Switch.Thumb className="w-3" />
                </Switch.Root>

                <Input.Label className="text-base flex gap-1">
                  Incluir usuários sem cookies
                  <HelpTooltip className="text-gray-300">
                    Informação sobre o tópico que aparece ao se passar o mouse.
                  </HelpTooltip>
                </Input.Label>
              </Input.Root>
            </div>
          </div>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
