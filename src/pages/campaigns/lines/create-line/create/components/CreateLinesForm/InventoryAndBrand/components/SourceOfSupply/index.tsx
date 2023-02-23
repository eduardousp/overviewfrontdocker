import { useCallback, useState } from 'react';

import { Input } from '@components/Form/Input';
import { HelpTooltip } from '@components/HelpTooltip';
import { SelectBoxItem } from '@components/SelectBox/types';
import SelectGroupBox from '@components/SelectGroupBox';

const itemsSelect: SelectBoxItem[] = [
  {
    id: 0,
    title: 'Open Exchange',
    selected: false,
  },
  {
    id: 1,
    title: 'Deals',
    selected: false,
  },
  {
    id: 2,
    title: 'Inventário Gerenciado',
    selected: false,
  },
];

const SourceOfSupply = () => {
  const [listBoxSelect, setListBoxSelect] = useState(itemsSelect);

  const handleItemBoxSelected = useCallback(
    (item: SelectBoxItem) => {
      const updateList = listBoxSelect.map((box) => {
        if (item.id === box.id) {
          return {
            ...box,
            selected: !box.selected,
          };
        }
        return box;
      });

      setListBoxSelect(updateList);
    },
    [listBoxSelect]
  );

  return (
    <Input.Root>
      <Input.Label htmlFor="comment" className="flex items-center gap-1 text-blue-900">
        Fonte de Suprimentos
        <HelpTooltip className="text-gray-300">
          Informação sobre o tópico que aparece ao se passar o mouse.
        </HelpTooltip>
      </Input.Label>

      <SelectGroupBox
        data={listBoxSelect}
        onItemPressed={handleItemBoxSelected}
        className="flex flex-row items-center mt-2"
        classNameBoxItem="flex mr-10 items-center"
      />
    </Input.Root>
  );
};

export default SourceOfSupply;
