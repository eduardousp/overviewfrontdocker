import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';

const BANNER_SIZE_OPTIONS = [
  '300x250',
  '728x90',
  '160x600',
  '300x600',
  '120x600',
  '468x60',
  '336x280',
  '250x250',
  '180x150',
];

export function CreativeSizeFormRow() {
  return (
    <Accordion.Row>
      <Input.Root className="flex-row items-center gap-6">
        <Input.Label required className="text-blue-900 text-xl">
          Tamanho do Criativo
        </Input.Label>

        <SelectRoot placeholder="Escolher medidas">
          {BANNER_SIZE_OPTIONS.map((size) => (
            <SelectItem className="text-blue-900 font-xl" value={size} key={size}>
              {size}
            </SelectItem>
          ))}
        </SelectRoot>
      </Input.Root>
    </Accordion.Row>
  );
}
