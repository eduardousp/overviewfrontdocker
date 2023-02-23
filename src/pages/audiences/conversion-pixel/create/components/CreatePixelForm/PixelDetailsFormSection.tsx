import * as RadioGroup from '@radix-ui/react-radio-group';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';

import { Checkbox } from '@components/Checkbox';
import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';

export function PixelDetailsFormSection() {
  const [dueValue, setDueValue] = useState<string | null>(null);

  return (
    <Accordion.Item value="pixel_details">
      <Accordion.Header>
        <Accordion.Trigger>Detalhes do Pixel</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row>
          <Input.Root className="flex-row items-center gap-6">
            <Input.Label className="flex items-center gap-6 max-w-[40.5rem] w-full">
              <span className="text-blue-900 text-xl">
                Nome
                <Input.Required>*</Input.Required>
              </span>

              <Input.Box className="h-10 rounded-lg">
                <Input.TextInput className="text-xl" placeholder="Teste" />
              </Input.Box>
            </Input.Label>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row>
          <Input.Root className="flex-row items-center gap-6">
            <Input.Label className="flex items-center gap-6 max-w-[40.5rem] w-full">
              <span className="text-blue-900 text-xl">Código</span>

              <Input.Box className="h-10 rounded-lg">
                <Input.TextInput className="text-xl" placeholder="Código" />
              </Input.Box>
            </Input.Label>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit pt-4 pb-6 flex-col items-start gap-4">
          <div className="flex items-center">
            <span className="text-blue-900 text-xl font-medium w-[200px]">
              Tipo de gatilho
            </span>

            <ToggleGroup.Root type="single" defaultValue="hybrid" className="flex gap-2">
              <ToggleGroup.Item
                value="hybrid"
                className="text-orange-600 border-orange-600 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Híbrido (View/ clique)
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="view"
                className="text-orange-600 border-orange-600 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                View
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="click"
                className="text-orange-600 border-orange-600 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Clique
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>

          <label className="flex items-center">
            <span className="text-blue-900 text-xl font-medium w-[200px]">
              Categoria do evento
              <Input.Required>*</Input.Required>
            </span>

            <SelectRoot placeholder="Selecionar">
              <SelectItem value="show_landing_page">Visitar Landing Page</SelectItem>
              <SelectItem value="show_items">Visualizar item</SelectItem>
              <SelectItem value="add_to_cart">Adicionar ao carrinho</SelectItem>
              <SelectItem value="start_checkout">Iniciar Checkout</SelectItem>
              <SelectItem value="buy">Comprar</SelectItem>
              <SelectItem value="generate_lead">Gerar Lead</SelectItem>
            </SelectRoot>
          </label>

          <div className="flex">
            <span className="text-blue-900 text-xl font-medium w-[200px]">
              Vencimento
              <Input.Required>*</Input.Required>
            </span>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-blue-900 max-w-[210px] w-full">
                  <Checkbox className="h-4 w-4" indicatorSize={12} />
                  Intervalo pós visualização
                </label>

                <input
                  type="number"
                  className="border border-orange-600 w-14 rounded px-1 bg-gray-50"
                />

                <SelectRoot defaultValue="hours">
                  <SelectItem value="minutes">Minutos</SelectItem>
                  <SelectItem value="hours">Horas</SelectItem>
                  <SelectItem value="days">Dias</SelectItem>
                </SelectRoot>
              </div>

              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-blue-900 max-w-[210px] w-full">
                  <Checkbox className="h-4 w-4" indicatorSize={12} />
                  Intervalo pós clique
                </label>

                <input
                  type="number"
                  className="border border-orange-600 w-14 rounded px-1 bg-gray-50"
                />

                <SelectRoot defaultValue="hours">
                  <SelectItem value="minutes">Minutos</SelectItem>
                  <SelectItem value="hours">Horas</SelectItem>
                  <SelectItem value="days">Dias</SelectItem>
                </SelectRoot>
              </div>
            </div>
          </div>

          <div className="flex items-baseline">
            <span className="text-blue-900 text-xl font-medium w-[200px]">
              Vencimento
            </span>

            <RadioGroup.Root onValueChange={setDueValue} className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-blue-900">
                <RadioGroup.Item
                  value="count_one_per_user"
                  className="h-4 w-4 border-2 p-[2px] border-orange-600 rounded-full"
                >
                  <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
                </RadioGroup.Item>
                Contar uma conversão por usuário
              </label>

              <label className="flex items-center gap-2 text-blue-900">
                <RadioGroup.Item
                  value="count_all_per_user"
                  className="h-4 w-4 border-2 p-[2px] border-orange-600 rounded-full"
                >
                  <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
                </RadioGroup.Item>
                Contar todas as conversões por usuário
              </label>

              <label className="flex items-center gap-2 text-blue-900">
                <RadioGroup.Item
                  value="count_one_per_user_per_time"
                  className="h-4 w-4 border-2 p-[2px] border-orange-600 rounded-full"
                >
                  <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
                </RadioGroup.Item>
                Contar uma conversão por usuário a cada
                <input
                  type="number"
                  disabled={dueValue !== 'count_one_per_user_per_time'}
                  className="border border-orange-600 w-14 rounded px-1 bg-gray-50 transition-colors disabled:border-gray-300 disabled:cursor-not-allowed"
                />
                <SelectRoot
                  defaultValue="hours"
                  disabled={dueValue !== 'count_one_per_user_per_time'}
                  className={
                    dueValue !== 'count_one_per_user_per_time'
                      ? 'disabled:cursor-not-allowed bg-gray-300'
                      : ''
                  }
                >
                  <SelectItem value="minutes">Minutos</SelectItem>
                  <SelectItem value="hours">Horas</SelectItem>
                  <SelectItem value="days">Dias</SelectItem>
                </SelectRoot>
              </label>
            </RadioGroup.Root>
          </div>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
