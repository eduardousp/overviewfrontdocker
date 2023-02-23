import * as Dialog from '@radix-ui/react-dialog';
import * as Progress from '@radix-ui/react-progress';
import * as Tooltip from '@radix-ui/react-tooltip';
import Image from 'next/image';
import { CaretDown } from 'phosphor-react';
import { twMerge } from 'tailwind-merge';

import ActiveIcon from '@assets/svg/status_active.svg';

import { HelpTooltip } from '@components/HelpTooltip';
import { Pagination } from '@components/Pagination';
import { Tag } from '@components/Tag';

type LinesListProp = {
  data: Array<any>;
  className?: string;
};

export function LinesList({ data, className }: LinesListProp) {
  return (
    <div>
      <div className={twMerge('flex', className)}>
        <div className="flex flex-col">
          {data.map((item) => {
            return (
              <Dialog.Trigger
                key={item}
                className="odd:bg-zinc-50 even:bg-white p-2 h-40 w-[19rem] min-w-[19rem] border-r border-b border-purple-900 flex flex-col gap-3"
              >
                <span className="text-base font-semibold text-gray-300">Nome</span>
                <Tag.Root>
                  <Tag.Label className="text-white bg-orange-600">IO</Tag.Label>
                  <Tag.Title className="font-semibold">Nome da Linha</Tag.Title>
                </Tag.Root>

                <Tag.Root>
                  <Tag.Label className="text-white bg-purple-900">IO</Tag.Label>
                  <Tag.Title>Nome do IO</Tag.Title>
                </Tag.Root>

                <Tag.Root>
                  <Tag.Label>ANU</Tag.Label>
                  <Tag.Title>Nome do Advertiser</Tag.Title>
                </Tag.Root>
              </Dialog.Trigger>
            );
          })}
        </div>

        <Tooltip.Provider delayDuration={0}>
          <div className="scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5] scrollbar-thin">
            {data.map((item) => {
              return (
                <div
                  key={item}
                  className="odd:bg-zinc-50 even:bg-white p-2 pr-6 gap-[3.75rem] h-40 border-b border-purple-900 whitespace-nowrap inline-flex min-w-full"
                >
                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      ID
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>
                    <span className="font-semibold text-blue-900">0000001</span>
                  </div>

                  <div className="w-28 flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Erros
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Progresso do Flight
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">
                        X dias restantes
                      </span>
                      <span className="font-normal text-blue-900 whitespace-pre">
                        23 Ago. 2022 - {'\n'}30 Ago. 2022 (Fuso Horário)
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Orçamento do Flight
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">
                        R$ 1.500,00 utilizados
                      </span>
                      <span className="font-normal text-blue-900">
                        R$ 1.750,00 esperados para hoje
                      </span>
                      <span className="font-normal text-blue-900">
                        R$ 2.000,00 orçados
                      </span>
                    </div>

                    <Progress.Root
                      value={90}
                      className="bg-gray-300 relative rounded-r-full w-60 flex items-center after:absolute after:h-[12px] after:border-r after:border-orange-600 after:right-[2px]"
                    >
                      <Progress.Indicator
                        style={{ '--value': '90%' } as {}}
                        className="bg-purple-900 h-[4px] w-[var(--value)] rounded-r-full"
                      />
                    </Progress.Root>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Orçamento
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">R$ 10,000,000</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Receita
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">R$ 1.500,000</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Entregas Recentes
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">
                        <Image src={ActiveIcon} />
                        Ativo
                      </span>
                      <span className="font-normal text-blue-900">1.250 imps</span>
                      <span className="font-normal text-blue-900">R$ 12,50</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Tooltip.Provider>
      </div>

      <footer className="flex justify-between pl-20 pr-16 mt-5">
        <span className="text-blue-900">
          Apresentando {data.length} {data.length === 1 ? 'Item' : 'Itens'}
        </span>

        <div className="flex gap-24">
          <div className="flex items-center gap-1">
            <span className="text-blue-900">Fileiras por página: 10</span>
            <button type="button">
              <CaretDown weight="bold" size={12} className="text-orange-600" />
            </button>
          </div>

          <Pagination />
        </div>
      </footer>
    </div>
  );
}
