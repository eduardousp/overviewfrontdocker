import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

const InventoryType = () => {
  return (
    <Box.Row className="justify-start">
      <Input.Root className="flex flex-row  w-[20%]">
        <Input.Label className="flex flex-row text-blue-900">
          Tipo de inventário <Input.Label className="text-orange-500">*</Input.Label>
        </Input.Label>
        <HelpTooltip className="text-gray-300">
          Informação sobre o tópico que aparece ao se passar o mouse.
        </HelpTooltip>
      </Input.Root>

      <Box.Column className="flex ml-5">
        <SelectRoot defaultValue="app_web">
          <SelectItem value="app_web">App & Web</SelectItem>
          <SelectItem value="app">Apenas App</SelectItem>
          <SelectItem value="web">Apenas Web</SelectItem>
        </SelectRoot>
      </Box.Column>
    </Box.Row>
  );
};

export default InventoryType;
