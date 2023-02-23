import { useMemo, useState } from 'react';

import { Box } from '@components/Box';
import CustomInput from '@components/CustomInput';
import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { Tag } from '@components/Tag';

import { useSessionStorage } from '@hooks/useSessionStorage';

import { KEY_CREATE_LINE_DATA } from '@pages/campaigns/lines/create-line/index.page';

import { formatCurrency } from '@utils/formatCurrency';

import {
  ExpenseRecovery,
  MomentTheDay,
  OverviewBudget,
  PaymentMethod,
  RateDayAllocation,
  SetBudget,
} from './components';
import { listBudget } from './uteis';

export function QuoteAndScheduling() {
  const [createLineData] = useSessionStorage(KEY_CREATE_LINE_DATA, {});
  const [budgetValue, setBudgetValue] = useState<string>('');

  const totalBudget = useMemo(() => {
    const result = listBudget.reduce(
      (previousItem, currentItem) => previousItem + currentItem.value,
      0
    );
    return result;
  }, []);

  return (
    <Accordion.Item value="supply_strategy">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Orçamento e Agendamento</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit block gap-2 p-0">
          <Input.Root className="flex flex-row p-0 m-0">
            <Input.Root className="flex  w-[60%] border-r-[1px] border-purple-900">
              <PaymentMethod />
              <Box.Divider className="w-full p-0 m-0" />
              <Input.Root className="flex flex-row gap-8 px-8 pt-0 pb-4">
                <Input.Label className="w-[300px] gap-6 text-blue-900">
                  Tipo de Receita<Input.Required className="mr-1">*</Input.Required>
                </Input.Label>

                <Box.Column className="flex w-full">
                  <SelectRoot defaultValue="cpm_visible">
                    <SelectItem value="fix_income">RECEITA FIXA</SelectItem>
                    <SelectItem value="cpm_visible">CPM visível</SelectItem>
                    <SelectItem value="flex_income">RECEITA FLEXÍVEL</SelectItem>
                  </SelectRoot>

                  <Box.Row className="items-center justify-start mt-4">
                    <CustomInput
                      label="Valor da Receita: R$ "
                      value={budgetValue}
                      className="w-32"
                      setValue={setBudgetValue}
                    />
                  </Box.Row>
                </Box.Column>
              </Input.Root>
            </Input.Root>

            <Input.Root className="flex w-[40%] m-0 px-4 py-6 h-full max-h-60 overflow-y-auto">
              <Tag.Root>
                <Tag.Label className="text-white bg-purple-900">IO</Tag.Label>
                <Tag.Title>{`${createLineData.insertionOrder?.name} (Nº ${createLineData.insertionOrder?.id})`}</Tag.Title>
              </Tag.Root>

              <Box.Column className="flex px-8 pt-3">
                {listBudget.map((item) => (
                  <Box.Row key={item.id} className="flex justify-between w-full px-1">
                    <Box.Row>
                      <Box.Label className="w-[90px]">{item.start_date}</Box.Label>
                      <Box.Label>-</Box.Label>
                      <Box.Label className="w-[90px]">{item.end_date}</Box.Label>
                    </Box.Row>
                    <Box.Label className="text-end w-full">
                      {formatCurrency(item.value)}
                    </Box.Label>
                  </Box.Row>
                ))}
                <Box.Divider />
                <Box.Row className="flex justify-between w-full px-1 mt-2">
                  <Box.Label className="w-full">Orçamento Total</Box.Label>
                  <Box.Label className="text-end w-full">
                    {formatCurrency(totalBudget)}
                  </Box.Label>
                </Box.Row>
              </Box.Column>
            </Input.Root>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <SetBudget />
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <ExpenseRecovery />
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <MomentTheDay />
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <RateDayAllocation />
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <OverviewBudget />
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
