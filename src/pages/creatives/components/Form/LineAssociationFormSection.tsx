import Image from 'next/image';
import { useState } from 'react';

import CloseGraySvg from '@assets/svg/close_gray.svg';

import { SearchInput } from '@components/Form/SearchInput';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';

import { createListLine } from '@utils/mocks';

const LINES = createListLine();

export function LineAssociationFormSection() {
  const [selectedLine, setSelectedLine] = useState<string | undefined>();

  return (
    <Accordion.Item value="line_association">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>
          Associação de Linha <span className="font-normal">(opcional)</span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit py-7">
          <label className="flex items-baseline gap-6 w-full max-w-[800px] text-blue-900 font-medium text-xl">
            Linha
            <div className="w-full">
              <SearchInput
                value={selectedLine}
                onChange={(e) => setSelectedLine(e.target.value)}
                list="lines"
              />

              <div className="mt-6 border flex items-center justify-between px-6 border-purple-900 rounded h-10">
                <span className="text-black text-base font-light">
                  {selectedLine || 'Selecione uma Linha acima'}
                </span>

                <div className="flex items-center gap-6">
                  <SelectRoot defaultValue="impression" className="text-base">
                    <SelectItem value="impression">Impressão</SelectItem>
                    <SelectItem value="click">Click</SelectItem>
                  </SelectRoot>

                  <button
                    type="button"
                    className="flex items-center"
                    onClick={() => setSelectedLine('')}
                  >
                    <Image height={16} width={16} src={CloseGraySvg} />
                  </button>
                </div>
              </div>
            </div>
          </label>

          <datalist id="lines">
            {LINES.map((line) => (
              <option key={line.id} value={line.name}>
                {line.name}
              </option>
            ))}
          </datalist>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
