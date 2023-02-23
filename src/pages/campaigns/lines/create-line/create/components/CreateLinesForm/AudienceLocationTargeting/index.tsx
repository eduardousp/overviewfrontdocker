import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { Input } from '@components/Form/Input';
import { SearchInput } from '@components/Form/SearchInput';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

import AudienceSegmentsLocation from '@pages/campaigns/lines/create-line/create/components/CreateLinesForm/AudienceLocationTargeting/components/AudienceSegmentsLocation';
import FrequencyAndRecency from '@pages/campaigns/lines/create-line/create/components/CreateLinesForm/AudienceLocationTargeting/components/FrequencyAndRecency';

export default function AudienceLocationTargeting() {
  return (
    <Accordion.Item value="audience_location_targeting">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Público e Segmentação por Localização</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column className="w-full">
            <Box.Row className="flex items-center">
              <Input.Root className="w-fit flex-row items-center">
                <Input.Label required className="text-blue-900">
                  Geografia
                </Input.Label>
              </Input.Root>
            </Box.Row>

            <Box.Row className=" flex justify-start w-full mt-4">
              <Box.Row className="flex w-[50%]">
                <SearchInput />
              </Box.Row>
              <ButtonOrange
                title="+ Restrições Adicionais"
                background={false}
                border={false}
              />
            </Box.Row>
          </Box.Column>
        </Accordion.Row>

        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column className="w-full">
            <Box.Row className="flex items-center">
              <Input.Root className="w-fit flex-row items-center">
                <Input.Label className="text-blue-900">Dispositivos Cruzados</Input.Label>
                <HelpTooltip className="text-gray-300">
                  Informação sobre o tópico que aparece ao se passar o mouse.
                </HelpTooltip>
              </Input.Root>
            </Box.Row>

            <Box.Column className="flex my-5">
              <SelectRoot defaultValue="disable">
                <SelectItem value="enable">Ativado</SelectItem>
                <SelectItem value="disable">Desativado</SelectItem>
              </SelectRoot>
            </Box.Column>
          </Box.Column>
        </Accordion.Row>

        <Accordion.Row className="h-fit flex-col items-start py-6">
          <AudienceSegmentsLocation />
        </Accordion.Row>
        <Accordion.Row className="h-fit flex-col items-start py-6">
          <FrequencyAndRecency />
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
