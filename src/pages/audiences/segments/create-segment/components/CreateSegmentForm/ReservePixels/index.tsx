import * as RadioGroup from '@radix-ui/react-radio-group';

import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';
import { Accordion } from '@components/Form/Section';

export default function ReservePixels() {
  return (
    <Accordion.Item value="reserve_pixel">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Pixels de Reserva</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column className="w-full">
            <Box.Row className="flex items-center">
              <Input.Root className="w-full flex-row">
                <Input.Label required className="text-blue-900 w-20">
                  Tipo
                </Input.Label>

                <RadioGroup.Root className="flex flex-row gap-6" defaultValue="image">
                  <RadioItem value="image" label="Imagem" className="text-lg" />
                  <RadioItem value="javascript" label="JavaScript" className="text-lg" />
                </RadioGroup.Root>
              </Input.Root>
            </Box.Row>
          </Box.Column>
        </Accordion.Row>

        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column className="w-full">
            <Box.Row className="flex items-center">
              <Input.Root className="w-full flex-row">
                <Input.Label className="text-blue-900 w-20">URL</Input.Label>

                <div className="flex flex-col w-full items-start">
                  <Input.Box className="h-10 rounded-lg w-[50%]">
                    <Input.TextInput
                      className="text-lg"
                      placeholder="http://exemplo.com"
                    />
                  </Input.Box>

                  <button type="button" className="text-orange-500 mt-4 font-medium">
                    +Add
                  </button>
                </div>
              </Input.Root>
            </Box.Row>
          </Box.Column>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
