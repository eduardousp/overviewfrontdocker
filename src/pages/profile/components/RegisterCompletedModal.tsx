import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

type RegisterCompletedModalProps = Dialog.DialogProps;

export function RegisterCompletedModal({ ...rest }: RegisterCompletedModalProps) {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed state-open:animate-fade-in state-closed:animate-fade-out" />

        <Dialog.Content className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none w-[720px] p-8 rounded-lg state-open:animate-fade-in state-closed:animate-fade-out">
          <Dialog.Title className="text-orange-600 text-[2.5rem] font-medium text-center">
            Cadastro Finalizado!
          </Dialog.Title>

          <Dialog.Description className="text-purple-900 text-[1.75rem] text-justify mt-4">
            Todas as informações essenciais foram preenchidas com sucesso. Caso elas
            estejam corretas, o processo para a liberação do acesso a plataforma pode
            levar até 24h, pedimos que fique atento ao email informado.
          </Dialog.Description>

          <footer className="text-purple-900 text-xl text-center mt-6">
            Para mais informações acesse nosso{' '}
            <Link href="/" className="text-orange-600 font-semibold hover:underline">
              FAQ
            </Link>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
