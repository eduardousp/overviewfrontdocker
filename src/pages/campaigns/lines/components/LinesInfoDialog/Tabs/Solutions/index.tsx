/* eslint-disable react/no-unstable-nested-components */
import * as Tabs from '@radix-ui/react-tabs';
import { CheckCircle, CaretDown } from 'phosphor-react';
import React, { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import PierChart from '@components/Graphics/PierChart';

import {
  listFilterDate,
  listFilterSegment,
  listGraphic,
} from '@pages/campaigns/lines/components/LinesInfoDialog/Tabs/Solutions/mocks';

interface FilterDate {
  id: number;
  title: string;
  subTitle?: string;
  selected: boolean;
}

const Solutions = () => {
  const [filterListDate, setFilterListDate] = useState<FilterDate[]>(listFilterDate);
  const [filterListSegment, setFilterListSegment] =
    useState<FilterDate[]>(listFilterSegment);

  const handleSelectDateFilter = useCallback((item: FilterDate) => {
    if (item.selected) {
      return;
    }

    setFilterListDate(
      listFilterDate.map((filterDate) => ({
        ...filterDate,
        selected: filterDate.id === item.id,
      }))
    );
  }, []);

  const handleSelectSegmentFilter = useCallback((item: FilterDate) => {
    if (item.selected) {
      return;
    }

    setFilterListSegment(
      listFilterSegment.map((filterDate) => ({
        ...filterDate,
        selected: filterDate.id === item.id,
      }))
    );
  }, []);

  return (
    <Tabs.Content
      value="lines_solutions"
      className="pt-28 pb-14 h-screen overflow-scroll"
    >
      <div className=" flex flex-col gap-2 px-20 py-4">
        <Box.Root className="mb-4">
          <Box.Title>Principais Problemas</Box.Title>

          <Box.Column className="flex flex-row items-center">
            <CheckCircle size={20} weight="fill" className="text-success" />
            <Box.Value>Não há problemas de configuração com seu item de linha</Box.Value>
          </Box.Column>
        </Box.Root>

        <Box.Root>
          <Box.Row>
            <Box.Row>
              <Box.Title className="text-lg">Estratégia Suprimentos</Box.Title>
              <ButtonOrange
                title="Open Exchange"
                icon={<CaretDown weight="bold" size={25} className="text-white" />}
              />
            </Box.Row>

            <Box.Row>
              {filterListDate.map((item) => (
                <ButtonOrange
                  key={item.id}
                  subTitle={item.subTitle}
                  title={item.title}
                  background={item.selected}
                  onClick={() => handleSelectDateFilter(item)}
                />
              ))}
            </Box.Row>
          </Box.Row>

          <Box.Column className="mb-7 mt-2">
            <div className="flex flex-col px-4 py-2 text-sm whitespace-pre border border-purple-900 rounded w-[280px]">
              <Box.Label className="mb-2">Desempenho dos lances</Box.Label>
              <Box.Row>
                <Box.Column>
                  <span>Lances Elegíveis</span>
                  <span>Lances Vencidos</span>
                </Box.Column>
                <Box.Column>
                  <span>360k lances</span>
                  <span>62k lances</span>
                </Box.Column>
              </Box.Row>
            </div>
          </Box.Column>

          <Box.Row className="px-10 mb-4">
            {filterListSegment.map((item) => (
              <ButtonOrange
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                background={item.selected}
                onClick={() => handleSelectSegmentFilter(item)}
              />
            ))}
          </Box.Row>

          <Box.Row className="px-9 flex pb-4">
            <Box.Column className="w-[60%]">
              <PierChart
                legendTitle="Principais motivos para bloqueio de lances"
                data={listGraphic}
              />
            </Box.Column>
            <hr className="w-[1px] h-auto bg-purple-900" />
            <Box.Column className="w-[39%]">
              <Box.Title>Cidades</Box.Title>
              <Box.Label>O que está acontecendo?</Box.Label>
              <Box.Value className="text-xs">
                A configuração de segmentação de seu item de linha está reduzindo a
                contagem de impressões porque exclui determinadas cidades. É normal que a
                segmentação por cidade reduza a contagem total de impressões de um item de
                linha devido à sua natureza restritiva.
              </Box.Value>
              <Box.Label>Próximos passos</Box.Label>
              <Box.Value className="text-xs">
                Revise e ajuste a configuração de segmentação do item de linha incluindo
                as cidades necessárias.
              </Box.Value>
            </Box.Column>
          </Box.Row>
        </Box.Root>
      </div>
    </Tabs.Content>
  );
};

export default Solutions;
