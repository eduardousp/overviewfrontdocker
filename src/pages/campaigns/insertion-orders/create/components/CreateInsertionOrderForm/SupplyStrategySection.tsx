import Image from 'next/future/image';

import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

export function SupplyStrategySection() {
  return (
    <Accordion.Item value="supply_strategy">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Estratégia de Suprimento</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row>
          <Input.Root className="flex-row items-center gap-6">
            <Input.Label className="text-blue-900 flex items-center">
              Tipo de inventário
              <Input.Required className="mr-1">*</Input.Required>
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </Input.Label>

            <SelectRoot defaultValue="app_web">
              <SelectItem value="app_web">App & Web</SelectItem>
              <SelectItem value="app">Apenas App</SelectItem>
              <SelectItem value="web">Apenas Web</SelectItem>
            </SelectRoot>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="py-6 block h-fit">
          <div className="flex gap-8 items-center">
            <Input.Root className="flex-row items-center w-fit gap-8">
              <Input.Label htmlFor="blocklist" className="text-blue-900">
                Blocklist
              </Input.Label>

              <Input.Box className="max-w-xs h-8 rounded-lg">
                <Input.TextInput
                  id="blocklist"
                  placeholder="Buscar nome ou ID"
                  className="text-base"
                />

                <Image src="/svg/search.svg" width={24} height={24} alt="" />
              </Input.Box>
            </Input.Root>

            <button
              type="button"
              className="text-orange-600 border-orange-600 border rounded h-7 px-4"
            >
              + Criar Blocklist
            </button>
          </div>

          {/* Todo: Show list */}
        </Accordion.Row>

        <Accordion.Row>
          <div className="flex gap-8 items-center">
            <Input.Root className="flex-row items-center w-fit gap-8">
              <Input.Label htmlFor="allowList" className="text-blue-900">
                Allowlist
              </Input.Label>

              <Input.Box className="max-w-xs h-8 rounded-lg">
                <Input.TextInput
                  id="allowList"
                  placeholder="Buscar nome ou ID"
                  className="text-base"
                />

                <Image src="/svg/search.svg" width={24} height={24} alt="" />
              </Input.Box>
            </Input.Root>

            <button
              type="button"
              className="text-orange-600 border-orange-600 border rounded h-7 px-4"
            >
              + Criar Allowlist
            </button>
          </div>

          {/* Todo: Show list */}
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
