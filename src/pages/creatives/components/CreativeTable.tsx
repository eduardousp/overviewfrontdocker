import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUp } from 'phosphor-react';
import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Checkbox } from '@components/Checkbox';

import { CreativeInfoDialog } from '@pages/creatives/components/CreativeInfoDialog';

function Th({ className, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={twMerge(
        'text-blue-900 text-xs font-normal px-3 whitespace-nowrap',
        className
      )}
      {...rest}
    />
  );
}

function Tr({ className, ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={twMerge('bg-gray-50 h-8 border-y border-purple-900', className)}
      {...rest}
    />
  );
}

function Td({ className, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={twMerge(
        'text-purple-900 text-xs text-center px-3 whitespace-nowrap',
        className
      )}
      {...rest}
    />
  );
}

export function CreativeTable() {
  const data = Array.from(Array(10).keys());

  const [selectedCreative, setSelectedCreative] = useState<number | null>(null);

  return (
    <Dialog.Root>
      <div className="overflow-auto scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5] scrollbar-thin pb-2">
        <table className="w-full">
          <thead>
            <Tr className="bg-white border-y-0">
              <Th className="pl-2 text-left">
                <div className="flex items-center">
                  <Checkbox className="w-4 h-4" indicatorSize={12} />
                  <span className="ml-2">Nome</span>
                  <ArrowUp size={18} weight="bold" className="text-orange-600 ml-1" />
                </div>
              </Th>

              <Th>ID</Th>
              <Th>Tipo</Th>
              <Th>Medidas</Th>
              <Th>Auditoria</Th>
              <Th>Rastreio Click</Th>
              <Th>SSL</Th>
              <Th>Imps</Th>
              <Th>Clicks</Th>
              <Th>Conversões</Th>
              <Th>Receita</Th>
              <Th>Lucro</Th>
              <Th>Custo de Mídia</Th>
              <Th>Receita eCPM</Th>
              <Th className="pr-8">Custo eCPM</Th>
            </Tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <Tr key={item}>
                <Td className="pl-2 text-left inline-flex gap-2 mr-6 min-w-[200px]">
                  <Checkbox className="w-4 h-4" indicatorSize={12} />
                  <Dialog.Trigger
                    onClick={() => setSelectedCreative(item + 1)}
                    className="hover:underline"
                  >
                    Nome.extensão
                  </Dialog.Trigger>
                </Td>

                <Td>Nº ID</Td>
                <Td>Banner</Td>
                <Td>300x250</Td>
                <Td>Aprovado</Td>
                <Td>Passou</Td>
                <Td>Aprovado</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>R$1,00</Td>
                <Td>R$0,00</Td>
                <Td>R$0,75</Td>
                <Td>R$0,25</Td>
                <Td className="pr-8">R$0,20</Td>
              </Tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreativeInfoDialog id={String(selectedCreative)} />
    </Dialog.Root>
  );
}
