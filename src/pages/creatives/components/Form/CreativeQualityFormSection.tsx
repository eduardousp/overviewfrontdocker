import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Accordion } from '@components/Form/Section';

export function CreativeQualityFormSection() {
  return (
    <Accordion.Item value="creative_quality">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Qualidade Criativa</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="px-2">
          <ToggleGroup.Root type="single" className="flex justify-between w-full gap-2">
            <ToggleGroup.Item
              value="audit_platform"
              className="text-orange-600 border-orange-600 flex-1 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
            >
              Plataforma Auditoria
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value="self_audit"
              className="text-orange-600 border-orange-600 flex-1 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
            >
              Auto Auditoria
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value="no_audit"
              className="text-orange-600 border-orange-600 flex-1 text-xl border rounded-md px-2 h-8 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
            >
              Sem Auditoria
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
