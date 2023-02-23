import Image from 'next/image';
import { useCallback, useState } from 'react';

import close from '@assets/svg/close_gray.svg';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import CustomInput from '@components/CustomInput';
import { Input } from '@components/Form/Input';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';
import { Switch } from '@components/Switch';

import { getRandomNumber } from '@utils';

interface Frequency {
  id: number;
  value: string;
}

interface Recency {
  id: number;
  value: string;
}

const frequencies: Frequency[] = [
  {
    id: 0,
    value: '',
  },
];

const recencies: Recency[] = [
  {
    id: 0,
    value: '',
  },
];

const FrequencyAndRecency = () => {
  const [listFrequency, setListFrequency] = useState<Frequency[]>(frequencies);
  const [listRecency, setListRecency] = useState<Recency[]>(recencies);

  const handleAddFrequency = useCallback(() => {
    setListFrequency((prev) => [
      ...prev,
      {
        id: getRandomNumber({}),
        value: '',
      },
    ]);
  }, []);

  const handleRemoveFrequency = useCallback((item: Frequency) => {
    setListFrequency((prev) => prev.filter((itemPrev) => itemPrev.id !== item.id));
  }, []);

  // const handleAddRecency = useCallback(() => {
  //   setListRecency((prev) => [
  //     ...prev,
  //     {
  //       id: getRandomNumber({}),
  //       value: '',
  //     },
  //   ]);
  // }, []);

  const handleRemoveRecency = useCallback((item: Recency) => {
    setListRecency((prev) => prev.filter((itemPrev) => itemPrev.id !== item.id));
  }, []);

  return (
    <Box.Column className="w-full">
      <Box.Row className="flex items-center">
        <Input.Root className="w-fit flex-row items-center">
          <Input.Label className="text-blue-900">Freqüência e Recencia</Input.Label>
        </Input.Root>
      </Box.Row>

      <Box.Row className="flex items-center justify-start mt-4 mb-2">
        <Input.Root className="w-fit flex-row items-center">
          <Input.Label className="text-blue-900">Limitar</Input.Label>
          <HelpTooltip className="text-gray-300">
            Informação sobre o tópico que aparece ao se passar o mouse.
          </HelpTooltip>
        </Input.Root>
        <div className="flex gap-3">
          <Switch.Root className="w-12 h-6 px-1">
            <Switch.Thumb className="w-[1.125rem]" />
          </Switch.Root>
        </div>
      </Box.Row>
      <Box.Column className="w-[400px] ml-36">
        <Box.Label>Frequência (Quantas)</Box.Label>
        {listFrequency.map((item) => (
          <Box.Row className="bg-gray-50 px-7 relative py-2 mb-2" key={item.id}>
            <button
              type="button"
              className="-right-2 -top-3 absolute"
              onClick={() => handleRemoveFrequency(item)}
            >
              <Image src={close} width="20" />
            </button>
            <CustomInput
              label=""
              value=""
              setValue={(text: string) => {
                console.log('text', text);
              }}
            />
            <Box.Label>Imps por</Box.Label>
            <SelectRoot defaultValue="disable">
              <SelectItem value="enable">Ativado</SelectItem>
              <SelectItem value="disable">Desativado</SelectItem>
            </SelectRoot>
          </Box.Row>
        ))}
        <Box.Label className="text-xs text-orange-500">
          Apenas números inteiros entre 1-255
        </Box.Label>
        <Box.Column className="w-[50%] mb-4">
          <ButtonOrange
            title="+ Adicionar Outro Limite"
            background={false}
            onClick={handleAddFrequency}
          />
        </Box.Column>

        <Box.Label>Recência (Com qual frequência)</Box.Label>

        {listRecency.map((item) => (
          <Box.Row className="bg-gray-50 px-7 relative py-2 mb-1" key={item.id}>
            <CustomInput
              label=""
              value=""
              setValue={(text: string) => {
                console.log('text', text);
              }}
            />
            <Box.Label>Imps por</Box.Label>
            <SelectRoot defaultValue="disable">
              <SelectItem value="enable">Ativado</SelectItem>
              <SelectItem value="disable">Desativado</SelectItem>
            </SelectRoot>
            <button
              type="button"
              className="-right-2 -top-3 absolute"
              onClick={() => handleRemoveRecency(item)}
            >
              <Image src={close} width="20" />
            </button>
          </Box.Row>
        ))}
        <Box.Label className="text-xs text-orange-500">
          Apenas números inteiros entre 1-255
        </Box.Label>
        <Box.Divider className="mt-2 mb-2" />
        <Box.Row className="justify-start">
          <div className="flex gap-3">
            <Switch.Root className="w-12 h-6 px-1">
              <Switch.Thumb className="w-[1.125rem]" />
            </Switch.Root>
          </div>
          <Box.Label>Incluir usuários sem cookies</Box.Label>
          <HelpTooltip className="text-gray-300">
            Informação sobre o tópico que aparece ao se passar o mouse.
          </HelpTooltip>
        </Box.Row>
      </Box.Column>
    </Box.Column>
  );
};

export default FrequencyAndRecency;
