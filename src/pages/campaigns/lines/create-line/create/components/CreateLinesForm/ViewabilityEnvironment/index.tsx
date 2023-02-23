/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState, useCallback } from 'react';

import ActiveIcon from '@assets/svg/active.svg';

import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';

import { DeviceType, listDeviceType } from './helper';
import { PagePropertiesDialog } from './PagePropertiesDialog';
import { SystemTargetingDialog } from './SystemTargetingDialog';

export function ViewabilityEnvironmentSection() {
  const [listDeviceTypeSelect, setDeviceTypeSelect] = useState(listDeviceType);
  const [openDialogSegmentationSystem, setOpenSegmentationSystem] = useState(false);
  const [openDialogPageProperties, setOpenDialogPageProperties] = useState(false);

  const handleClickDeviceTypeSelect = useCallback(
    (item: DeviceType) => {
      setDeviceTypeSelect(
        listDeviceTypeSelect.map((itemDeviceType) => ({
          ...itemDeviceType,
          selected:
            itemDeviceType.id === item.id
              ? !itemDeviceType.selected
              : itemDeviceType.selected,
        }))
      );
    },
    [listDeviceTypeSelect]
  );

  return (
    <Accordion.Item value="viewability_environment">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Segmentação de visibilidade e ambiente</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="py-6 h-fit block">
          <Input.Root className="items-start">
            <Input.Label
              htmlFor="systems"
              className="text-blue-900 flex items-center gap-1"
            >
              Limite de visibilidade
            </Input.Label>

            <div className="flex flex-row">
              <Checkbox.Root className="bg-white w-[25px] h-[25px] flex items-center justify-center border border-orange-500 pb-1">
                <Checkbox.Indicator>
                  <a className="text-center text-lg font-bold text-orange-500">x</a>
                </Checkbox.Indicator>
              </Checkbox.Root>

              <label className="mx-2">Só compre impressões com</label>

              <input
                type="number"
                min="0"
                max="100"
                className="border border-orange-500 h-[24px] w-12 pl-1"
                id="frequency-1"
              />
              <span>% de visibilidade prevista</span>
            </div>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <Input.Label className="flex items-center gap-1 text-blue-900">
            Tipo de Dispositivo
          </Input.Label>

          <div className="flex flex-row mt-4">
            {listDeviceTypeSelect.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClickDeviceTypeSelect(item)}
                className={`flex flex-col w-32 h-32 mr-10 border-2 ${
                  item.selected ? 'border-orange-500' : 'border-purple-900'
                } rounded cursor-pointer`}
              >
                <div className="flex border-[1px] w-4 h-4 ml-1 mt-1 items-center justify-center border-orange-500 rounded-sm">
                  {item.selected && <a className="mb-1 font-bold text-orange-500">x</a>}
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full">
                  <Image src={item.image} width={62} height={40} alt="" />
                  <Box.Label className="mt-2 text-purple-900">{item.name}</Box.Label>
                </div>
              </div>
            ))}
          </div>
        </Accordion.Row>

        <Accordion.Row className="py-6 h-fit block">
          <Input.Root>
            <Input.Label
              htmlFor="systems"
              className="text-blue-900 flex items-center gap-1"
            >
              Sistemas
            </Input.Label>

            <div className="flex flex-row gap-2">
              <Image src={ActiveIcon} height={12} />
              <label className="font-normal">Segmentação definida</label>

              <Dialog.Root
                open={openDialogSegmentationSystem}
                onOpenChange={setOpenSegmentationSystem}
              >
                <Dialog.Trigger>
                  <a className="cursor-pointer" onClick={() => {}}>
                    <Image src="/svg/pencil.svg" width={20} height={24} alt="" />
                  </a>
                </Dialog.Trigger>

                <SystemTargetingDialog />
              </Dialog.Root>
            </div>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="py-6 h-fit block">
          <Input.Root>
            <Input.Label
              htmlFor="systems"
              className="text-blue-900 flex items-center gap-1"
            >
              Propriedades da página
            </Input.Label>
            <div className="flex flex-row gap-1">
              <label>Qualquer string de consulta; qualquer posição da tag</label>
              <Dialog.Root
                open={openDialogPageProperties}
                onOpenChange={setOpenDialogPageProperties}
              >
                <Dialog.Trigger>
                  <a className="cursor-pointer" onClick={() => {}}>
                    <Image src="/svg/pencil.svg" width={20} height={24} alt="" />
                  </a>
                </Dialog.Trigger>

                <PagePropertiesDialog />
              </Dialog.Root>
            </div>
          </Input.Root>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
