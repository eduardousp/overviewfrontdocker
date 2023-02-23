/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-const */
import { Segment } from '@model/Segment';
import Image from 'next/image';
import { CaretDown, CaretLeft, CaretRight } from 'phosphor-react';
import { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import CircleButton from '@components/CircleButton';
import { Input } from '@components/Form/Input';
import { SelectItem, SelectRoot } from '@components/Form/Select';

import { createListSegments } from '@utils/mocks';

import ExpandableButton from '../ExpandableButton';

type ItemType = 'and' | 'or';

const segments: Segment[] = [
  { id: '1', name: 'Segmento 1' },
  { id: '2', name: 'Segmento 2' },
  { id: '3', name: 'Segmento 3' },
];

const listSegments = createListSegments(20);
listSegments.sort((a, b) => Number(a.id) - Number(b.id));

const AudienceSegmentsLocation = () => {
  const [segmentSelected, setSegmentSelected] = useState('mine');
  const [itemType, setItemType] = useState<ItemType>('and');

  const handleSelectTypeResult = useCallback(
    (resultType: ItemType) => {
      if (resultType === itemType) return;
      setItemType(resultType);
    },
    [itemType]
  );

  return (
    <Box.Column className="w-full flex">
      <Box.Row className="flex flex-col items-center">
        <Input.Root className="w-fit flex-row self-start">
          <Input.Label className="text-blue-900">
            Segmentos de Audiência e Local
          </Input.Label>
        </Input.Root>

        <div className="flex border border-purple-900 w-[103%] rounded-none relative">
          <section className="w-[51%] min-h-[550px] border-r border-purple-900 p-2">
            <div className="flex">
              <button
                type="button"
                className={
                  segmentSelected === 'mine'
                    ? 'flex justify-items-start text-base text-blue-900 font-normal border-b border-purple-900 w-52 h-8'
                    : 'flex justify-items-start text-base text-blue-900 font-normal border-b border-orange-700 w-52 h-8 opacity-50'
                }
                onClick={() => setSegmentSelected('mine')}
              >
                Meus Segmentos
              </button>

              <button
                type="button"
                className={
                  segmentSelected === 'third_party'
                    ? 'flex justify-items-start text-base text-blue-900 font-normal border-b border-purple-900 w-52 h-8 ml-32'
                    : 'flex justify-items-start text-base text-blue-900 font-normal border-b border-orange-700 w-52 h-8 ml-32 opacity-50'
                }
                onClick={() => setSegmentSelected('third_party')}
              >
                Segmentos Third Party
              </button>
            </div>

            <div className="flex flex-row items-center justify-items-start h-20">
              <Input.Root className="m-0 inline">
                <Input.Box className="w-96 h-10 bg-[#F9F9F9] rounded-xl">
                  <Input.TextInput placeholder="Nome/ID" className="text-base" />
                  <Image src="/svg/search.svg" width={24} height={24} alt="" />
                </Input.Box>
              </Input.Root>

              <SelectRoot
                defaultValue="enable"
                className="pl-2 pr-0 mr-6 w-56 h-8 text-sm"
              >
                <SelectItem value="enable" className="ml-2">
                  Data de criação
                </SelectItem>
                <SelectItem value="disable">Exemplo</SelectItem>
              </SelectRoot>
            </div>

            {segmentSelected === 'mine' ? (
              <div className="mt-3 min-h-[370px] overflow-auto scrollbar-thin scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5]">
                <table className="w-full">
                  <tbody>
                    {segments.map((segment) => {
                      return (
                        <tr
                          key={segment.id}
                          className="border-t border-purple-900 text-purple-900 h-[32px]"
                        >
                          <td className="flex items-center">
                            <CircleButton valid />
                            <CircleButton valid={false} />
                            <div className="inline ml-2 w-full">
                              <span className="text-blue-900 font-medium">
                                {segment.name} ({segment.id})
                              </span>
                              <div className="flex inline relative w-full">
                                <span className="text-blue-900 font-light block text-xs">
                                  {segment.usersNumber}
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-3 min-h-[370px] overflow-auto scrollbar-thin scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5]">
                <table className="w-full">
                  <tbody>
                    {segments.map((segment) => {
                      return (
                        <tr
                          key={segment.id}
                          className="border-t border-purple-900 text-purple-900 h-[32px]"
                        >
                          <td className="flex items-center">
                            <CircleButton valid />
                            <CircleButton valid={false} />
                            <div className="inline ml-2 w-full">
                              <span className="text-blue-900 font-medium">
                                {segment.name} ({segment.id})
                              </span>
                              <div className="flex inline relative w-full">
                                <span className="text-blue-900 font-light block text-xs">
                                  {segment.usersNumber}
                                </span>

                                <span className="text-blue-900 font-light block text-sm absolute right-2 bottom-1">
                                  -R$ {segment.id}
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <footer className="absolute bottom-2 w-[49.5%]">
              <div className="flex h-[38px] items-center justify-between border-t border-purple-900">
                <span className="ml-6 mt-2">
                  Fileiras por página: 10
                  <button type="button">
                    <CaretDown weight="bold" size={12} className="text-orange-600" />
                  </button>
                </span>

                <span className="mr-6 mt-2 flex items-center">
                  Página{' '}
                  <button type="button">
                    <CaretLeft size={20} className="text-gray-300" />
                  </button>
                  1 de 1
                  <button type="button">
                    <CaretRight size={20} className="text-orange-300" />
                  </button>
                </span>
              </div>
            </footer>
          </section>

          <section className="w-[51%] p-2">
            <Input.Root className="w-fit flex-row self-start">
              <Input.Label className="text-blue-900 font-normal ml-6 mt-1">
                Número total de usuários
              </Input.Label>
            </Input.Root>

            <div className="flex items-center relative mt-4 pl-6 w-full">
              <Box.Row className=" flex justify-start">
                <Box.Column className="flex-row items-start">
                  <ButtonOrange
                    title="E"
                    background={itemType === 'and'}
                    onClick={() => handleSelectTypeResult('and')}
                  />
                </Box.Column>
                <Box.Column className="flex-row items-start">
                  <ButtonOrange
                    title="Ou"
                    background={itemType === 'or'}
                    onClick={() => handleSelectTypeResult('or')}
                  />
                </Box.Column>

                <Input.Root className="w-fit flex-row self-start">
                  <Input.Label className="text-blue-900 font-normal">
                    Entre Segmentos
                  </Input.Label>
                </Input.Root>
              </Box.Row>

              <button
                type="button"
                className="absolute inset-y-0 right-6 text-orange-500 font-medium"
              >
                Remover todos
              </button>
            </div>

            <div className="min-h-[409px]">
              {segments.length === 0 ? (
                <div />
              ) : (
                <div>
                  <Input.Root className="w-fit flex-row self-start">
                    <Input.Label className="text-blue-900 font-medium text-base ml-6 mt-4 mb-2 text-blue-900">
                      Grupo de Segmentação 1
                    </Input.Label>
                  </Input.Root>

                  {segments.map((segment, index) => {
                    if (index === 0) {
                      return <ExpandableButton segment={segment} />;
                    }
                    return <ExpandableButton segment={segment} itemType={itemType} />;
                  })}
                </div>
              )}
            </div>

            <footer className="h-78 mt-2">
              <div className="flex h-[38px] relative items-center justify-between border-t border-purple-900">
                <span className="absolute inset-y-0 right-6 text-lg mt-2">
                  Custo de data estimado{' '}
                  <span className="font-medium text-blue-900 text-lg">R$0.50 CPM</span>
                </span>
              </div>
            </footer>
          </section>
        </div>
      </Box.Row>
    </Box.Column>
  );
};

export default AudienceSegmentsLocation;
