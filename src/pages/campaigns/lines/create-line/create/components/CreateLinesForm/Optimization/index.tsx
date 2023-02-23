import { Pixel } from '@model/Pixel';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import CustomInput from '@components/CustomInput';
import { PixelConverterDialog } from '@components/Dialog/PixelConverterDialog';
import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { HelpTooltip } from '@components/HelpTooltip';
import SelectBox from '@components/SelectBox';
import { SelectBoxItem } from '@components/SelectBox/types';
import { Switch } from '@components/Switch';

const itemsSelect: SelectBoxItem[] = [
  {
    id: 0,
    title: 'Entrega',
    selected: false,
  },
  {
    id: 1,
    title: 'Performance',
    selected: true,
  },
  {
    id: 2,
    title: 'Margem',
    selected: false,
  },
];

export function OptimizationSection() {
  const [listTypeLineSelect, setListTypeLineSelect] = useState(itemsSelect);
  const [listPixels, setListPixels] = useState<Pixel[]>([]);
  const [openDialogPixel, setOpenDialogPixel] = useState(false);

  const handleTypeLineSelected = useCallback((item: SelectBoxItem) => {
    setListTypeLineSelect(
      itemsSelect.map((itemPrev) => {
        return {
          ...itemPrev,
          selected: item.id === itemPrev.id,
        };
      })
    );
  }, []);

  const handleListPixelsSelected = useCallback((value: any[]) => {
    setListPixels(value);
    setOpenDialogPixel(false);
  }, []);

  return (
    <Accordion.Item value="optimization">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Otimização</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column>
            <Box.Row className="flex items-center">
              <Input.Root className="w-fit flex-row items-center">
                <Input.Label className="text-blue-900">Método de Otimização</Input.Label>
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

            <Box.Row className="mt-4">
              <CustomInput
                className="w-32"
                label="Otimizar para R$ "
                value=""
                setValue={() => {}}
              />
            </Box.Row>
          </Box.Column>
        </Accordion.Row>

        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column>
            <Input.Root className="w-fit flex-row items-center">
              <Input.Label className="flex flex-row text-blue-900">
                Objetivo Principal{' '}
                <Input.Label className="text-orange-500">*</Input.Label>
              </Input.Label>
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </Input.Root>
            <div className="mt-2 mb-2 ml-5">
              <SelectBox
                data={listTypeLineSelect}
                onItemPressed={handleTypeLineSelected}
              />
            </div>
          </Box.Column>
        </Accordion.Row>

        <Accordion.Row className="h-fit flex-col items-start py-6">
          <Box.Column>
            <Input.Root className="w-fit flex-row items-center">
              <Input.Label className="flex flex-row text-blue-900">
                Pixel de conversão
              </Input.Label>
            </Input.Root>
            <Box.Row className="mt-4 ml-5">
              {listPixels.length === 0 ? (
                <Box.Value>Sem pixel de conversão associado</Box.Value>
              ) : (
                <Box.Column>
                  {listPixels.map((pixel) => (
                    <Box.Value key={pixel.id}>
                      {pixel.id} - {pixel.name}
                    </Box.Value>
                  ))}
                </Box.Column>
              )}
              <Dialog.Root open={openDialogPixel} onOpenChange={setOpenDialogPixel}>
                <Dialog.Trigger>
                  <Image
                    src="/svg/pencil.svg"
                    width={20}
                    height={24}
                    alt=""
                    className="ml-1"
                  />
                </Dialog.Trigger>

                <PixelConverterDialog
                  handlePixelSelected={handleListPixelsSelected}
                  currentListPixelsSelected={listPixels}
                />
              </Dialog.Root>
            </Box.Row>
          </Box.Column>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
