/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as RadioGroup from '@radix-ui/react-radio-group';
import Image from 'next/image';

import { Button } from '@components/Button';
import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

export function Creatives() {
  return (
    <Accordion.Item value="creatives">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Criativos</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="py-6 h-fit block">
          <Input.Root className="items-start">
            <Input.Label
              htmlFor="systems"
              className="text-blue-900 flex items-center gap-1"
            >
              Rotação de Criativos
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </Input.Label>
            <RadioGroup.Root
              className="flex items-start flex-col gap-6 ml-4"
              defaultValue="automaticaly"
            >
              <RadioItem
                label="Otimizar o peso do criativo automaticamente"
                value="automaticaly"
              />
              <RadioItem label="Criativos com peso uniforme" value="uniform" />
              <RadioItem label="Ponderar criativos manualmente" value="manually" />
            </RadioGroup.Root>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="py-6 h-fit block">
          <Input.Root className="items-start">
            <Input.Label
              htmlFor="systems"
              className="text-blue-900 flex items-center gap-1"
            >
              Criativos Associados
            </Input.Label>

            <div className="flex flex-row w-full items-center">
              <SelectRoot defaultValue="all">
                <SelectItem value="all">Todas as pastas</SelectItem>
                <SelectItem value="1">Ex 1</SelectItem>
                <SelectItem value="2">Ex 2</SelectItem>
              </SelectRoot>

              <Input.Box className="max-w-[35rem] h-10 rounded-lg ml-6">
                <Input.TextInput
                  className="text-xl"
                  placeholder="Buscar criativo por nome ou ID"
                />

                <Image src="/svg/search.svg" width={24} height={24} alt="" />
              </Input.Box>

              <Button defaultValue="all" className="ml-6 text-base  h-7">
                Colar Lista de IDs
              </Button>
            </div>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="py-6 h-fit block">
          <Input.Root className="items-start">
            <Input.Label
              htmlFor="systems"
              className="text-blue-900 flex items-center gap-1"
            >
              URL da Landing Page
            </Input.Label>

            <Input.Box className="max-w-[35rem] h-10 rounded-lg">
              <Input.TextInput className="text-xl" placeholder="http://" />
            </Input.Box>
          </Input.Root>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
