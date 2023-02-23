import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';

import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

import KeyForm from './KeyForm';
import PixelForm from './PixelForm';
import StringForm from './StringForm';

export default function SegmentDetails() {
  const [radioValue, setRadioValue] = useState('pixel');

  const handleRadioValueChange = (value: string) => {
    setRadioValue(value);
  };

  return (
    <Accordion.Item value="segment_details">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Detalhes do Segmento</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column className="w-full">
            <Box.Row className="flex items-center">
              <Input.Root className="w-full flex-row">
                <Input.Label required className="text-blue-900 w-20">
                  Nome
                </Input.Label>

                <Input.Box className="h-10 rounded-lg w-[50%]">
                  <Input.TextInput className="text-lg" />
                </Input.Box>
              </Input.Root>
            </Box.Row>
          </Box.Column>
        </Accordion.Row>

        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column className="w-full">
            <Box.Row className="flex items-center">
              <Input.Root className="w-full flex-row">
                <Input.Label className="text-blue-900 w-20">Código</Input.Label>

                <Input.Box className="h-10 rounded-lg w-[50%]">
                  <Input.TextInput className="text-lg" />
                </Input.Box>
              </Input.Root>
            </Box.Row>
          </Box.Column>
        </Accordion.Row>

        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column className="w-full">
            <Box.Row className="flex items-center">
              <Input.Root className="w-full flex-row">
                <Input.Label className="text-blue-900 w-52">Anunciante</Input.Label>

                <div className="w-full">
                  <SelectRoot defaultValue="none">
                    <SelectItem value="none">Nenhum selecionado</SelectItem>
                    <SelectItem value="an1">Anunciante 1</SelectItem>
                    <SelectItem value="an2">Anunciante 2</SelectItem>
                  </SelectRoot>

                  <form>
                    <RadioGroup.Root
                      className="flex flex-col gap-6 mt-10"
                      defaultValue="pixel"
                      onValueChange={(value) => handleRadioValueChange(value)}
                    >
                      <RadioItem value="pixel" label="Pixel" className="text-lg" />
                      <span className="flex items-center gap-1">
                        <RadioItem
                          value="string"
                          label="String de Consulta"
                          className="text-lg"
                        />
                        <HelpTooltip className="text-gray-300">
                          Informação sobre o tópico que aparece ao se passar o mouse.
                        </HelpTooltip>
                      </span>
                      <span className="flex items-center gap-1">
                        <RadioItem
                          value="key"
                          label="Valor Chave da String de Consulta"
                          className="text-lg"
                        />
                        <HelpTooltip className="text-gray-300">
                          Informação sobre o tópico que aparece ao se passar o mouse.
                        </HelpTooltip>
                      </span>
                    </RadioGroup.Root>
                  </form>

                  {radioValue === 'pixel' ? <PixelForm /> : <div />}

                  {radioValue === 'string' ? <StringForm /> : <div />}

                  {radioValue === 'key' ? <KeyForm /> : <div />}
                </div>
              </Input.Root>
            </Box.Row>
          </Box.Column>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
