import * as RadioGroup from '@radix-ui/react-radio-group';

import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';
import { Accordion } from '@components/Form/Section';

export function PixelReserveFormSection() {
  return (
    <Accordion.Item value="pixel_reserve">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Pixels de Reserva</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row>
          <span className="text-blue-900 text-xl font-medium mr-12">Tipo</span>

          <RadioGroup.Root className="flex gap-6">
            <RadioItem
              label="Image"
              value="image"
              className="text-blue-900 text-base gap-2"
            />

            <RadioItem
              label="Javascript"
              value="javascript"
              className="text-blue-900 text-base gap-2"
            />
          </RadioGroup.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit pt-4 pb-6 items-start">
          <span className="text-blue-900 text-xl font-medium mr-12">URL</span>

          <div className="flex flex-col w-full">
            <Input.Box className="h-8 rounded-lg px-6 mb-4 max-w-[560px] w-full">
              <Input.TextInput className="text-xl" placeholder="http://exemplo.com" />
            </Input.Box>

            <ButtonOrange title="+ Add" background={false} border={false} />
          </div>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
