import * as RadioGroup from '@radix-ui/react-radio-group';

import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

export default function KeyForm() {
  return (
    <div>
      <Box.Column className="w-full mt-6">
        <Box.Row className="flex items-center">
          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 w-60 text-xl">Parâmetro</Input.Label>

            <Input.Box className="h-10 rounded-lg w-[50%]">
              <Input.TextInput className="text-lg" />
            </Input.Box>
          </Input.Root>
        </Box.Row>
      </Box.Column>

      <Box.Column className="w-full mt-6">
        <Box.Row className="flex items-center">
          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 w-60 text-xl">
              Valores
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </Input.Label>

            <Input.Box className="h-10 rounded-lg w-[50%]">
              <Input.TextInput className="text-lg" />
            </Input.Box>
          </Input.Root>
        </Box.Row>
      </Box.Column>

      <Box.Column className="w-full mt-6">
        <Box.Row className="flex items-center">
          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 w-60 text-xl">
              Manter Usuário no Segmento
            </Input.Label>

            <Box.Row className="w-[50%]">
              <RadioGroup.Root className="flex flex-col gap-6" defaultValue="max">
                <RadioItem value="max" label="180 dias (Máximo)" className="text-lg" />
                <span className="flex gap-2">
                  <RadioItem value="custom" label="Para" className="text-lg" />
                  <input type="text" className="border border-orange-500 rounded w-20" />
                  <SelectRoot defaultValue="hours">
                    <SelectItem value="minutes">Minutos</SelectItem>
                    <SelectItem value="hours">Horas</SelectItem>
                    <SelectItem value="days">Dias</SelectItem>
                  </SelectRoot>
                </span>
                <RadioItem
                  value="remove"
                  label="Não manter o usuário no segmento"
                  className="text-lg"
                />
              </RadioGroup.Root>
            </Box.Row>
          </Input.Root>
        </Box.Row>
      </Box.Column>

      <Box.Column className="w-full mt-6">
        <Box.Row className="flex items-center">
          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 w-60 text-xl">
              Aplicar a Inventário
            </Input.Label>

            <Box.Row className="w-[50%]">
              <RadioGroup.Root className="flex flex-col gap-6" defaultValue="all">
                <span className="flex items-center gap-1">
                  <RadioItem
                    value="all"
                    label="Todos os Publishers"
                    className="text-lg"
                  />
                  <HelpTooltip className="text-gray-300">
                    Informação sobre o tópico que aparece ao se passar o mouse.
                  </HelpTooltip>
                </span>
              </RadioGroup.Root>
            </Box.Row>
          </Input.Root>
        </Box.Row>
      </Box.Column>
    </div>
  );
}
