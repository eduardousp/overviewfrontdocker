import * as Dialog from '@radix-ui/react-dialog';
import { XCircle } from 'phosphor-react';

import { BoxLabel } from '@components/Box/BoxLabel';
import { BoxRow } from '@components/Box/BoxRow';
import { BoxValue } from '@components/Box/BoxValue';
import { Button } from '@components/Button';

type Props = {
  setOpenModal: (open: boolean) => void;
};

export function DeleteSegmentsDialog({ setOpenModal }: Props) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 state-open:animate-fade-in state-closed:animate-fade-out fixed inset-0" />

      <Dialog.Content className="bg-white flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none w-[720px] h-[315px] state-open:animate-fade-in state-closed:animate-fade-out overflow-hidden">
        <div className="border-b border-purple-900 h-[56px] flex items-center">
          <Dialog.Title className="ml-4 text-2xl font-medium text-black-900">
            Deletar os Segmentos Selecionados?
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

        <div className="flex flex-col items-center h-[195px]">
          <BoxRow className="self-start">
            <BoxLabel className="ml-14 mt-2">
              <span className="mr-2">•</span> Nome segmento selecionado
            </BoxLabel>
          </BoxRow>
          <div className="w-[90%] h-full mx-7 mt-2 mb-4 border border-purple-900 rounded-lg">
            <BoxRow className="flex self-start">
              <BoxValue className="py-4 px-6">
                <span className="text-blue-900 font-medium">Obs:</span> A exclusão é
                permanente e não pode ser revertida.
                <div>
                  Após a exclusão, o segmento continuará sendo exibido por um período de
                  tempo. Essa alteração causará alterações em toda a plataforma em suas
                  configurações de nível de membro
                </div>
              </BoxValue>
            </BoxRow>
          </div>
        </div>

        <footer className="border-t h-[64px] border-purple-900 md:gap-0 flex flex-row justify-end items-center gap-2 px-8">
          <Dialog.Close
            className="hover:opacity-60 text-xl font-medium text-orange-600 transition-opacity mr-[32px]"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </Dialog.Close>

          <Button type="submit" className="text-xl h-8">
            <span>Salvar</span>
          </Button>
        </footer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
