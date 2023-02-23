import * as RadioGroup from '@radix-ui/react-radio-group';
import Image from 'next/future/image';

import CloseGraySvg from '@assets/svg/close_gray.svg';
import FileHeightSvg from '@assets/svg/file-height.svg';
import FileWidthSvg from '@assets/svg/file-width.svg';

import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { Switch } from '@components/Switch';

export function CreateNativeFormCompositionSection() {
  return (
    <Accordion.Item value="composition">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Composição</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row>
          <SelectRoot placeholder="Modelos Native" />
        </Accordion.Row>

        <Accordion.Row className="h-fit py-3">
          <Input.Root className="flex-row gap-0">
            <Input.Label className="text-blue-900 text-base flex flex-col w-[127px] mr-[9px]">
              Título
              <span className="text-gray-300 text-xs">
                Nº de caracteres na caixa de texto
              </span>
            </Input.Label>

            <Input.Box className="h-8 rounded-lg pl-4 max-w-[640px]">
              <Input.TextInput className="text-base" />
            </Input.Box>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit py-3">
          <Input.Root className="flex-row gap-0">
            <Input.Label className="text-blue-900 text-base flex flex-col w-[136px]">
              Corpo de texto
              <span className="text-gray-300 text-xs">0 caracteres</span>
            </Input.Label>

            <textarea
              className="px-3 pt-2 max-w-[640px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Digite aqui..."
            />
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit py-3">
          <Input.Root className="flex-row gap-0">
            <Input.Label className="text-blue-900 text-base flex flex-col w-[127px] mr-[9px]">
              Patrocinado por
              <span className="text-gray-300 text-xs">0 caracteres</span>
            </Input.Label>

            <Input.Box className="h-8 rounded-lg pl-4 max-w-[640px]">
              <Input.TextInput className="text-base" />
            </Input.Box>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit py-3">
          <Input.Root className="flex-row gap-0">
            <Input.Label className="text-blue-900 text-base flex flex-col w-[127px] mr-[9px]">
              Call-to-action
            </Input.Label>

            <Input.Box className="h-8 rounded-lg pl-4 max-w-[640px]">
              <Input.TextInput className="text-base" />
            </Input.Box>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit pt-5 pb-6 items-start">
          <Input.Label className="text-blue-900 text-base flex flex-col w-[127px] mr-[9px]">
            Imagem
          </Input.Label>

          <div>
            <div className="max-w-[640px] w-full">
              <div className="bg-purple-900 rounded h-7 px-3 flex items-center justify-between">
                <span className="text-white text-base">
                  Nome_Asset_Selecionado.extensão
                </span>

                <button type="button">
                  <Image src={CloseGraySvg} width={16} height={16} alt="" />
                </button>
              </div>
            </div>

            <div className="mt-2 flex gap-4">
              <div className="bg-gray-50 border border-purple-900 rounded px-2 h-8 items-center flex">
                <span className="text-black text-base flex gap-1">
                  <Image src={FileWidthSvg} alt="" />
                  Largura do arquivo / Largura mínima aceita
                </span>
              </div>
              <div className="bg-gray-50 border border-purple-900 rounded px-2 h-8 items-center flex">
                <span className="text-black text-base flex gap-1 py-1">
                  <Image src={FileHeightSvg} alt="" />
                  Altura do arquivo / altura mínima aceita
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-start gap-2">
                <Switch.Root className="w-12 h-6 px-1">
                  <Switch.Thumb className="w-[1.125rem]" />
                </Switch.Root>

                <div>
                  <span className="text-black text-base font-medium">
                    Permitir ajustes inteligentes na imagem
                  </span>

                  <RadioGroup.Root className="flex flex-col">
                    <label className="flex items-center gap-2 text-black text-base">
                      <RadioGroup.Item
                        value="bars"
                        className="h-4 w-4 border p-[3px] border-orange-600 rounded-full"
                      >
                        <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
                      </RadioGroup.Item>
                      Incluir barras brancas para preenchimento
                    </label>

                    <label className="flex items-center gap-2 text-black text-base">
                      <RadioGroup.Item
                        value="crop_images"
                        className="h-4 w-4 border p-[3px] border-orange-600 rounded-full"
                      >
                        <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
                      </RadioGroup.Item>
                      Recortar imagens para encaixar no posicionamento
                    </label>
                  </RadioGroup.Root>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Row>

        <Accordion.Row className="h-fit py-3">
          <Input.Root className="flex-row gap-0">
            <Input.Label className="text-blue-900 text-base flex flex-col w-[127px] mr-[9px]">
              Ícone
            </Input.Label>

            <SelectRoot
              className="max-w-[640px] w-full justify-between"
              placeholder="Atribuir um asset"
            >
              <SelectItem
                value="fake_asset"
                className="text-blue-900 text-base font-light"
              >
                Nome_do_Arquivo.extensão
              </SelectItem>
            </SelectRoot>
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row>
          <SelectRoot placeholder="Assets Adicionais" />
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
