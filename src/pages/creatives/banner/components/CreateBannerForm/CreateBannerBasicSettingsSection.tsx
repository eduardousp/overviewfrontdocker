import * as RadioGroup from '@radix-ui/react-radio-group';

import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';

import { CreativeSizeFormRow } from '@pages/creatives/components/Form/CreativeSizeFormRow';

export function CreateBannerBasicSettingsSection() {
  return (
    <Accordion.Item value="basic_settings">
      <Accordion.Header>
        <Accordion.Trigger>Configurações Básicas</Accordion.Trigger>
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
                <Input.TextInput className="text-xl" />
              </Input.Box>
            </Input.Label>

            <span className="text-blue-900 whitespace-nowrap">
              Adicione uma identificação de extensão
            </span>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit py-6 items-start gap-8">
          <Input.Label
            htmlFor="link_input"
            required
            className="text-blue-900 whitespace-nowrap text-xl"
          >
            Leading Page
          </Input.Label>

          <RadioGroup.Root className="flex flex-col gap-5 w-full">
            <div className="flex items-center gap-2 w-full">
              <RadioGroup.Item
                value="input"
                className="h-6 w-6 border-2 p-1 border-orange-600 rounded-full"
              >
                <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
              </RadioGroup.Item>

              <Input.Box className="max-w-[35rem] h-10 rounded-lg">
                <Input.TextInput
                  id="link_input"
                  placeholder="http://exemplo.com"
                  className="text-xl"
                />
              </Input.Box>
            </div>

            <div className="flex items-center gap-2 w-full">
              <RadioGroup.Item
                value="link"
                className="h-6 w-6 border-2 p-1 border-orange-600 rounded-full"
              >
                <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
              </RadioGroup.Item>

              <span className="text-blue-900 text-xl font-medium">
                Definir o mesmo link da Campanha/ Linha
              </span>
            </div>
          </RadioGroup.Root>
        </Accordion.Row>

        <CreativeSizeFormRow />
      </Accordion.Content>
    </Accordion.Item>
  );
}
