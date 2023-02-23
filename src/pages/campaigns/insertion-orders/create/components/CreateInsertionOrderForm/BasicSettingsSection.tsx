import * as RadioGroup from '@radix-ui/react-radio-group';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';

import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

export function BasicSettingsSection() {
  const [billingPeriod, setBillingPeriod] = useState([0]);

  return (
    <Accordion.Item value="basic_settings">
      <Accordion.Header>
        <Accordion.Trigger>Configurações Básicas</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row>
          <Input.Root className="flex-row items-center gap-6">
            <Input.Label required className="text-blue-900">
              Nome
            </Input.Label>

            <Input.Box className="max-w-[35rem] h-10 rounded-lg">
              <Input.TextInput className="text-xl" />
            </Input.Box>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row>
          <Input.Root className="flex-row items-center gap-6">
            <Input.Label required className="text-blue-900">
              Estado
            </Input.Label>

            <RadioGroup.Root className="flex items-center gap-6">
              <RadioItem label="Ativa" value="active" />
              <RadioItem label="Inativa" value="inactive" />
            </RadioGroup.Root>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row>
          <Input.Root className="flex-row items-center gap-6">
            <Input.Label className="text-blue-900">Moeda</Input.Label>

            <SelectRoot placeholder="Escolha uma moeda">
              <SelectItem value="BRL">Real Brasileiro</SelectItem>
            </SelectRoot>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="gap-6">
          <Input.Label className="text-blue-900 flex items-center gap-1">
            Tipo de Orçamento
            <HelpTooltip className="text-gray-300">
              Informação sobre o tópico que aparece ao se passar o mouse.
            </HelpTooltip>
          </Input.Label>

          <ToggleGroup.Root type="single" className="flex gap-6">
            <ToggleGroup.Item
              value="recipe"
              className="text-orange-600 border-orange-600 border rounded-md px-4 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
            >
              Receita
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="impressions"
              className="text-orange-600 border-orange-600 border rounded-md px-4 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
            >
              Impressões
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="flexible"
              className="text-orange-600 border-orange-600 border rounded-md px-4 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
            >
              Flexível
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </Accordion.Row>

        <Accordion.Row className="py-6 h-fit block">
          <Input.Label required className="text-blue-900">
            Período de Cobrança
          </Input.Label>

          <div className="mt-4 flex justify-between">
            <ToggleGroup.Root type="single" className="flex gap-6">
              <ToggleGroup.Item
                value="with_dates"
                className="text-orange-600 border-orange-600 border rounded-md px-4 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Definir Datas
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="without_dates"
                className="text-orange-600 border-orange-600 border rounded-md px-4 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Sem Data final
              </ToggleGroup.Item>
            </ToggleGroup.Root>

            <ToggleGroup.Root type="single" className="flex gap-6">
              <ToggleGroup.Item
                value="with_dates"
                className="text-orange-600 border-orange-600 border rounded-md px-4 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Definir Orçamento
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="without_dates"
                className="text-orange-600 border-orange-600 border rounded-md px-4 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Orçamento Ilimitado
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>

          <span className="mt-3 block text-purple-900">
            Fuso Horário: Brasil/ Brasília
          </span>

          {billingPeriod.map((value) => (
            <div
              key={value}
              className="bg-[#F9F9F9] rounded-lg border-l-8 border-orange-600 px-6 py-4 mt-3 flex justify-between"
            >
              <Input.Root className="w-fit gap-1">
                <Input.Label className="text-blue-900 text-base font-normal">
                  Data de Início:
                </Input.Label>

                <Input.Box className="h-8 px-3 border-transparent">
                  <Input.TextInput className="text-xl" type="datetime-local" />
                </Input.Box>
              </Input.Root>

              <Input.Root className="w-fit gap-1">
                <Input.Label className="text-blue-900 text-base font-normal">
                  Data final:
                </Input.Label>

                <Input.Box className="h-8 px-3 border-transparent">
                  <Input.TextInput className="text-xl" type="datetime-local" />
                </Input.Box>
              </Input.Root>

              <Input.Root className="w-fit gap-1">
                <Input.Label required className="text-blue-900 text-base font-normal">
                  Orçamento
                </Input.Label>

                <Input.Box className="h-8 px-3 gap-1 border-transparent">
                  <span className="text-purple-900">R$</span>
                  <Input.TextInput className="text-xl " type="number" placeholder="" />
                </Input.Box>
              </Input.Root>

              <Input.Root className="w-fit gap-1">
                <Input.Label className="text-blue-900 text-base font-normal flex items-center gap-1">
                  Código Externo
                  <HelpTooltip className="text-gray-300">
                    Informação sobre o tópico que aparece ao se passar o mouse.
                  </HelpTooltip>
                </Input.Label>

                <Input.Box className="h-8 px-3 gap-1 border-transparent">
                  <Input.TextInput className="text-xl" placeholder="" />
                </Input.Box>
              </Input.Root>
            </div>
          ))}

          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={() => setBillingPeriod((prev) => [...prev, prev.length])}
              className="text-orange-600 border-orange-600 border rounded px-4 text-xl h-8"
            >
              + Adicionar Outro Período de Cobrança
            </button>

            <span className="text-purple-900 font-medium text-xl">
              Orçamento Vitalício Total: R$0.00
            </span>
          </div>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
