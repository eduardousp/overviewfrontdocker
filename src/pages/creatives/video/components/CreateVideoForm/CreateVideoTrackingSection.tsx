import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { XCircle } from 'phosphor-react';

import { Box } from '@components/Box';
import { Checkbox } from '@components/Checkbox';
import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';
import { Switch } from '@components/Switch';

export function CreateVideoTrackingSection() {
  return (
    <Accordion.Item value="tracking">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>
          Rastreamento <span className="font-normal">(opcional)</span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="gap-6">
          <span className="text-blue-900 text-xl font-medium">
            Testar Rastreamento de Click
          </span>

          <button
            type="button"
            className="bg-orange-600 text-white text-base font-medium px-2 py-1 rounded hover:opacity-70 transition-opacity"
          >
            Testar
          </button>
        </Accordion.Row>

        <Accordion.Row className="h-fit py-6 flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <span className="text-blue-900 font-medium text-base">Frequência</span>

            <Switch.Root className="w-12 h-6 px-1">
              <Switch.Thumb className="w-[1.125rem]" />
            </Switch.Root>

            <HelpTooltip className="text-gray-300">
              Informação sobre o tópico que aparece ao se passar o mouse.
            </HelpTooltip>
          </div>

          <div className="flex flex-col gap-2 ml-32">
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

          <div className="flex flex-col gap-2 ml-32">
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
        </Accordion.Row>

        <Accordion.Row className="h-fit py-6 items-start gap-6">
          <span className="text-blue-900 font-medium text-xl">Verificação</span>

          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 text-blue-900 text-xl">
              <Checkbox />
              Xandr - Visibilidade
            </label>

            <label className="flex items-center gap-2 text-blue-900 text-xl">
              <Checkbox />
              Métricas de atenção MOAT
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </label>
          </div>
        </Accordion.Row>

        <Accordion.Row className="h-fit py-7 flex-col items-start">
          <span className="text-blue-900 font-medium text-xl">Pixel Third-Party</span>

          <div className="flex flex-col gap-4 ml-24 mt-4">
            <span className="text-blue-900 text-xl font-medium">Formato</span>

            <ToggleGroup.Root type="single" value="html_url" className="flex gap-6">
              <ToggleGroup.Item
                value="image_url"
                className="text-orange-600 border-orange-600 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                URL Imagem
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="html_url"
                className="text-orange-600 border-orange-600 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                URL HTML
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="javascript_url"
                className="text-orange-600 border-orange-600 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                URL Javascript
              </ToggleGroup.Item>

              <ToggleGroup.Item
                value="raw_javascript"
                className="text-orange-600 border-orange-600 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Raw Javascript
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>

          <div className="flex w-full flex-col gap-2 ml-24 mt-6 relative before:absolute before:h-[155px] before:-left-10 before:top-[5rem] before:w-10 before:border-b before:border-l before:border-t before:border-purple-900">
            <Input.Label required className="text-blue-900 text-xl">
              Seguro
            </Input.Label>

            <div className="border border-purple-900 rounded-lg rounded-tl-none outline-none max-w-[560px] w-full h-20 flex overflow-hidden">
              <span className="text-blue-900 text-xs min-w-[4rem] w-16 h-6 flex items-center justify-center border-r border-b border-purple-900">
                http://
              </span>

              <textarea
                className="text-blue-900 text-xs px-3 h-full w-full outline-none pt-1 pb-2 resize-none"
                // For some reason, the <script> tag bellow breaks tailwind autocomplete
                defaultValue="Insira uma URL sem <script> tags"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2 mt-10 ml-24 relative before:absolute before:w-5 before:h-5 before:bg-white before:-top-2 before:left-[-3rem] before:bg-[url('/svg/connect.svg')] before:bg-no-repeat before:bg-center">
            <Input.Label className="text-blue-900 text-xl">Não Seguro</Input.Label>

            <div className="border border-purple-900 rounded-lg rounded-tl-none outline-none max-w-[560px] w-full h-20 flex overflow-hidden">
              <span className="text-blue-900 text-xs min-w-[4rem] w-16 h-6 flex items-center justify-center border-r border-b border-purple-900">
                http://
              </span>

              <textarea
                className="text-blue-900 text-xs px-3 h-full w-full outline-none pt-1 pb-2 resize-none"
                // For some reason, the <script> tag bellow breaks tailwind autocomplete
                defaultValue="Insira uma URL sem <script> tags"
              />
            </div>
          </div>

          <button
            type="button"
            disabled
            className="text-white bg-purple-900 disabled:bg-purple-200 ml-24 text-base px-2 py-1 rounded-lg mt-2"
          >
            Anexar Pixel
          </button>

          <Box.Divider className="w-full mt-6" />

          <Input.Root className="mt-6">
            <Input.Label className="flex items-center gap-6">
              <span className="text-blue-900 text-base font-medium leading-tight w-44">
                Pixels de nível de rede e anunciante
              </span>

              <Input.Box className="max-w-[35rem] h-8 rounded-lg bg-gray-50">
                <Input.TextInput className="text-base" placeholder="Buscar por Nome/ID" />
              </Input.Box>
            </Input.Label>
          </Input.Root>

          <Box.Divider className="w-full mt-6" />

          <Input.Root className="mt-6">
            <Input.Label className="flex items-center gap-6">
              <span className="text-blue-900 text-base font-medium leading-tight w-44">
                Pixels de Segmentação
              </span>

              <Input.Box className="max-w-[35rem] h-8 rounded-lg bg-gray-50">
                <Input.TextInput className="text-base" placeholder="Buscar por Nome/ID" />
              </Input.Box>
            </Input.Label>
          </Input.Root>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
