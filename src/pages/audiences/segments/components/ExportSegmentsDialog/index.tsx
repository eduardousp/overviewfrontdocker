import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import Image from 'next/image';
import { CaretLeft, XCircle } from 'phosphor-react';
import { useState } from 'react';

import CopyIcon from '@assets/svg/copy.svg';

import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Checkbox } from '@components/Checkbox';
import { InputBox } from '@components/Form/Input/InputBox';
import { TextInput } from '@components/Form/Input/TextInput';
import { SearchInput } from '@components/Form/SearchInput';
import { SelectItem, SelectRoot } from '@components/Form/Select';
import { HelpTooltip } from '@components/HelpTooltip';

type Props = {
  setOpenModal: (open: boolean) => void;
};

export function ExportSegmentsDialog({ setOpenModal }: Props) {
  const [step, setStep] = useState(1);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col pt-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none w-[720px] max-h-[666px] state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <div className="border-b border-purple-500 min-h-[57px]">
          <Dialog.Title className="ml-7 text-2xl font-medium text-black-900">
            Exportar Segmentos Selecionados
          </Dialog.Title>

          <Dialog.Close className="top-1 right-1 absolute">
            <XCircle
              size={32}
              weight="fill"
              className="text-gray-300"
              onClick={() => setOpenModal(false)}
            />
          </Dialog.Close>
        </div>

        {step === 1 ? (
          <div>
            <div className="flex flex-col min-h-[522px]">
              <Tooltip.Provider>
                <Box.Root className="border-b border-purple-500 w-full">
                  <Box.Row className="flex justify-start">
                    <Box.Title>Opções Básicas</Box.Title>
                    <div className="flex flex-col">
                      <span className="flex items-center gap-2 h-8">
                        <Checkbox className="h-4 w-4 ml-10" indicatorSize={12} />
                        Usar Tag de JavaScript{' '}
                        <HelpTooltip className="text-gray-300">
                          Informação sobre o tópico que aparece ao se passar o mouse.
                        </HelpTooltip>
                      </span>

                      <span className="flex items-center gap-2 h-[28px]">
                        <Checkbox className="h-4 w-4 ml-10" indicatorSize={12} />
                        Gerar pixel não seguro{' '}
                        <HelpTooltip className="text-gray-300">
                          Informação sobre o tópico que aparece ao se passar o mouse.
                        </HelpTooltip>
                      </span>
                    </div>
                  </Box.Row>
                </Box.Root>

                <Box.Root className="w-full">
                  <Box.Row className="flex justify-start">
                    <Box.Title className="w-56">Opções Avançadas</Box.Title>
                    <div className="flex flex-col w-full">
                      <span className="flex items-center gap-2 h-8">
                        <Checkbox className="h-4 w-4 ml-3" indicatorSize={12} />
                        Usar Códigos
                      </span>

                      <span className="flex items-center gap-2 h-[28px]">
                        <Checkbox className="h-4 w-4 ml-3" indicatorSize={12} />
                        Incluir URL de redirecionamento
                      </span>

                      <span className="flex items-center gap-2 h-[28px] ml-9 mt-1">
                        Redirecionar
                        <InputBox className="h-7 rounded-md border-orange-500 w-40">
                          <TextInput
                            className="text-base text-blue-900"
                            placeholder="[URL de redirecionamento]"
                          />
                        </InputBox>
                      </span>

                      <span className="flex items-center gap-2 h-[28px]">
                        <Checkbox className="h-4 w-4 ml-3" indicatorSize={12} />
                        Incluir rótulo dinâmico
                      </span>

                      <span className="flex items-center gap-2 ml-3 mt-1">
                        <SelectRoot defaultValue="all">
                          <SelectItem value="all">Em todos os segmentos</SelectItem>
                          <SelectItem value="each">Para cada segmento</SelectItem>
                        </SelectRoot>

                        <InputBox className="h-7 rounded-md border-orange-500 w-20">
                          <TextInput
                            className="text-base text-blue-900"
                            placeholder="[Valor]"
                          />
                        </InputBox>
                      </span>
                    </div>
                  </Box.Row>

                  <div className="flex flex-col items-end mr-16 gap-3">
                    <Box.Column className="w-[70%]">
                      <Box.Label>Adicionar usuário a segmentos em chamada</Box.Label>
                      <SearchInput />
                    </Box.Column>

                    <Box.Column className="w-[70%]">
                      <Box.Label>Segmentos Selecionados</Box.Label>
                      <InputBox className="flex justify-between h-10">
                        <Box.Label>Nome</Box.Label>
                        <XCircle size={22} weight="fill" className="text-gray-300" />
                      </InputBox>
                    </Box.Column>

                    <Box.Column className="w-[70%]">
                      <Box.Label>Segmentos Selecionados</Box.Label>
                      <SearchInput />
                    </Box.Column>
                  </div>
                </Box.Root>
              </Tooltip.Provider>
            </div>

            <footer className="border-t border-purple-500 flex min-h-[64px] flex-row justify-end items-center">
              <Dialog.Close
                className="hover:opacity-60 text-xl font-medium text-orange-600 transition-opacity mr-[32px]"
                onClick={() => setOpenModal(false)}
              >
                Cancelar
              </Dialog.Close>

              <Button
                type="submit"
                className="text-xl h-8 mr-8"
                onClick={() => setStep(2)}
              >
                <span>Próximo</span>
              </Button>
            </footer>
          </div>
        ) : (
          <div>
            <div className="flex flex-col min-h-[200px]">
              <Box.Root className="w-full">
                <Box.Row className="flex flex-col justify-start">
                  <Box.Title>Copiar e Colar</Box.Title>
                  <Box.Value className="text-base text-blue-900 ml-4">
                    Coloque essas tags no {'<'}body{'>'} da sua página
                  </Box.Value>

                  <InputBox className="relative min-h-[90px] max-w-[650px] p-4 mx-4 rounded-lg">
                    <div className="flex flex-col">
                      <span>
                        {'<!-- Segment Pixel - Retargeting Nome - DO NOT MODIFY -->'}
                      </span>
                      <span>{'<img src="https://exemplo.com.br/exemplo" />'}</span>
                      <span>{'<!-- End of Segment Pixel -->'}</span>
                    </div>
                    <button
                      type="button"
                      className="absolute right-2 top-2 font-medium text-blue-900 flex items-center gap-1"
                    >
                      Clique para copiar
                      <Image src={CopyIcon} height={24} />
                    </button>
                  </InputBox>
                </Box.Row>
              </Box.Root>
            </div>

            <footer className="border-t border-purple-700 flex min-h-[64px] flex-row justify-end items-center">
              <button
                type="button"
                className="flex items-center hover:opacity-60 text-xl font-medium text-orange-600 transition-opacity mr-[32px]"
                onClick={() => setStep(1)}
              >
                <CaretLeft className="mr-1" />
                Voltar
              </button>

              <Dialog.Close
                className="hover:opacity-60 text-xl font-medium text-orange-600 transition-opacity mr-[32px]"
                onClick={() => setOpenModal(false)}
              >
                Cancelar
              </Dialog.Close>

              <Button type="submit" className="text-xl h-8 mr-8" onClick={() => {}}>
                <span>Salvar</span>
              </Button>
            </footer>
          </div>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
