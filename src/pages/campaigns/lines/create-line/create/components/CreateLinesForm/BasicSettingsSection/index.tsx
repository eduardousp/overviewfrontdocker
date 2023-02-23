/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { InsertionOrder } from '@model/InsertionOrder';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Image from 'next/future/image';
import { useCallback, useMemo, useState } from 'react';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { SelectInsertionOrderDialog } from '@components/Dialog/SelectInsertionOrderDialog';
import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';
import { Accordion } from '@components/Form/Section';
import { HelpTooltip } from '@components/HelpTooltip';

import { useSessionStorage } from '@hooks/useSessionStorage';

import {
  listTypeAd,
  AdType,
} from '@pages/campaigns/lines/create-line/create/components/CreateLinesForm/BasicSettingsSection/helper';
import {
  DataCreateLine,
  KEY_CREATE_LINE_DATA,
} from '@pages/campaigns/lines/create-line/index.page';

export function BasicSettingsSection() {
  const [listAdSelect, setListAdSelect] = useState(listTypeAd);
  const [showInputExtCode, setShowInputExtCode] = useState<boolean>(false);
  const [createLineData] = useSessionStorage(KEY_CREATE_LINE_DATA, {});
  const data: DataCreateLine = createLineData;

  const [openDialogInsOrder, setOpenDialogInsOrder] = useState(false);
  const [selectedInsOrder, setSelectedInsOrder] = useState<InsertionOrder[]>(
    data.insertionOrder ? [data.insertionOrder] : []
  );

  const handleInsertionOrderSelected = useCallback((value: InsertionOrder[]) => {
    setSelectedInsOrder(value);
    setOpenDialogInsOrder(false);
  }, []);

  const handleClickItemAdSelect = useCallback(
    (item: AdType) => {
      setListAdSelect(
        listAdSelect.map((itemAd) => ({ ...itemAd, selected: itemAd.id === item.id }))
      );
    },
    [listAdSelect]
  );

  const listIOSelected = useMemo(() => {
    return selectedInsOrder.map((item) => ` ${item?.name} (Nº ${item?.id})`);
  }, [selectedInsOrder]);

  return (
    <Accordion.Item value="basic_settings">
      <Accordion.Header>
        <Accordion.Trigger>Configurações Básicas</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit block py-6">
          <Input.Root className="flex-row gap-6">
            <Input.Label required className="text-blue-900">
              Nome
            </Input.Label>
            <Input.Root>
              <Input.Box className=" max-w-[35rem] h-10 rounded-lg">
                <Input.TextInput className="text-xl" />
              </Input.Box>
              {!showInputExtCode ? (
                <div className="w-40">
                  <ButtonOrange
                    title="+ Código Externo"
                    background={false}
                    onClick={() => setShowInputExtCode((prev) => !prev)}
                  />
                </div>
              ) : (
                <div className="flex flex-row">
                  <Input.Box className="max-w-[35rem] h-10 rounded-lg mr-2">
                    <Input.TextInput
                      className="text-xl"
                      placeholder="Insira o código Externo"
                    />
                  </Input.Box>
                  <a
                    className="ml-1 text-2xl font-bold text-orange-500 cursor-pointer"
                    onClick={() => setShowInputExtCode((prev) => !prev)}
                  >
                    x
                  </a>
                </div>
              )}
            </Input.Root>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row>
          <Input.Root className="flex-row items-center gap-6">
            <Input.Label required className="text-blue-900">
              Estado
            </Input.Label>

            <RadioGroup.Root className="flex items-center gap-6" defaultValue="active">
              <RadioItem label="Ativa" value="active" />
              <RadioItem label="Inativa" value="inactive" />
            </RadioGroup.Root>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <Input.Root className="flex-col gap-6">
            <Input.Label required className="text-blue-900">
              Insertion Order
            </Input.Label>
            <Box.Root className="w-fit gap-1 bg-[#F9F9F9]">
              <div className="flex flex-row">
                <Box.Label className="text-purple-900">
                  1 Insertion Order selecionada
                </Box.Label>

                <Dialog.Root
                  open={openDialogInsOrder}
                  onOpenChange={setOpenDialogInsOrder}
                >
                  <Dialog.Trigger>
                    <Image
                      src="/svg/pencil.svg"
                      width={20}
                      height={24}
                      alt=""
                      className="ml-3"
                    />
                  </Dialog.Trigger>

                  <SelectInsertionOrderDialog
                    handleInsertionOrderSelected={handleInsertionOrderSelected}
                    currentListIOSelected={selectedInsOrder}
                  />
                </Dialog.Root>
              </div>

              <Input.Box className="max-w-[35rem] h-10 rounded-lg">
                <Input.TextInput className="text-xl w-[35rem]" value={listIOSelected} />
              </Input.Box>
            </Box.Root>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <Input.Label required className="flex items-center gap-1 text-blue-900">
            Tipo de Anúncio
          </Input.Label>

          <div className="flex flex-row mt-4">
            {listAdSelect.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClickItemAdSelect(item)}
                className={`flex flex-col w-32 h-32 mr-10 border-2 ${
                  item.selected ? 'border-orange-500' : 'border-purple-900'
                } rounded cursor-pointer`}
              >
                <div className="flex border-[1px] w-4 h-4 ml-1 mt-1 items-center justify-center border-orange-500 rounded-sm">
                  {item.selected && <a className="mb-1 font-bold text-orange-500">x</a>}
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <Image src={item.image} width={30} height={30} alt="" />
                  <Box.Label className="mt-2 text-purple-900">{item.name}</Box.Label>
                </div>
              </div>
            ))}
          </div>
        </Accordion.Row>

        <Accordion.Row className="flex flex-row py-6">
          <Input.Label className="text-blue-900">
            Tipo de Orçamento
            <HelpTooltip className="text-gray-300">
              Informação sobre o tópico que aparece ao se passar o mouse.
            </HelpTooltip>
          </Input.Label>

          <Input.Label className="ml-4 text-gray-300">Impressões</Input.Label>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
