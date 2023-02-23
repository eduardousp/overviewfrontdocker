import * as Dialog from '@radix-ui/react-dialog';
import * as Progress from '@radix-ui/react-progress';
import * as Tooltip from '@radix-ui/react-tooltip';
import { CaretDown } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

import { HelpTooltip } from '@components/HelpTooltip';
import { Pagination } from '@components/Pagination';
import { Tag } from '@components/Tag';

type InsertionOrdersListProp = {
  data?: Array<any>;
  className?: string;
  setInsertionOrder: Dispatch<SetStateAction<string>>;
};

export function InsertionOrdersList({
  data,
  className,
  setInsertionOrder,
}: InsertionOrdersListProp) {
  return (
    <div>
      <div className={twMerge('flex', className)}>
        <div className="flex flex-col">
          {data?.['insertion-orders']?.map((item) => {
            return (
              <Dialog.Trigger
                key={item}
                className="odd:bg-zinc-50 even:bg-white p-2 h-36 w-[19rem] min-w-[19rem] border-r border-b border-purple-900 flex flex-col gap-3"
                onClick={() => setInsertionOrder(item)}
              >
                <span className="text-gray-300 font-semibold text-base">Nome</span>

                <Tag.Root>
                  <Tag.Label className="bg-purple-900 text-white">IO</Tag.Label>
                  <Tag.Title className="font-semibold">{item.name}</Tag.Title>
                </Tag.Root>

                <Tag.Root>
                  <Tag.Label>ANU</Tag.Label>
                  <Tag.Title>{item.advertiser_id}</Tag.Title>
                </Tag.Root>
              </Dialog.Trigger>
            );
          })}
        </div>

        <Tooltip.Provider delayDuration={0}>
          <div className="scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5] scrollbar-thin">
            {data?.['insertion-orders']?.map((item) => {
              return (
                <div
                  key={item}
                  className="odd:bg-zinc-50 even:bg-white p-2 pr-6 gap-[3.75rem] h-36 border-b border-purple-900 whitespace-nowrap inline-flex min-w-full"
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                      ID
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>
                    <span className="font-semibold text-blue-900">{item.id}</span>
                  </div>

                  <div className="flex flex-col gap-4 w-28">
                    <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                      Erros
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                      Período de Cobrança
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">
                        0 dias até o próximo período
                      </span>
                      <span className="font-normal text-blue-900 whitespace-pre">
                        23 Ago. 2022 - {'\n'}30 Ago. 2022 (Fuso Horário)
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                      Progresso do Período de Cobrança
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">
                        90.00% do orçamento foi gasto
                      </span>
                      <span className="font-normal text-blue-900">
                        99.50% Flight concluído
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
                    <span className="text-gray-300 font-semibold text-base flex items-center gap-2">
                      Entrega do Orçamento no Período de Cobrança
                      <HelpTooltip>
                        Informação sobre o tópico que aparece ao se passar o mouse.
                      </HelpTooltip>
                    </span>

                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-900">
                        R$ 1.900,00 entregue
                      </span>
                      <span className="font-normal text-blue-900">
                        R$ 2.000,00 Orçado
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Tooltip.Provider>
      </div>

      <footer className="pl-20 pr-16 mt-5 flex justify-between">
        <span className="text-blue-900">
          Apresentando {data?.['insertion-orders']?.length}{' '}
          {data?.['insertion-orders']?.length === 1 ? 'Item' : 'Itens'}
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
