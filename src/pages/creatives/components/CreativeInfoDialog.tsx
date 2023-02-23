import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';
import { XCircle } from 'phosphor-react';

import { Box } from '@components/Box';
import { SubMenu } from '@components/SubMenu';

type CreativeInfoDialogProps = {
  id: string;
};

export function CreativeInfoDialog({ id }: CreativeInfoDialogProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed state-open:animate-fade-in state-closed:animate-fade-out" />

      <Dialog.Content
        className="bg-[#F9F9F9] fixed top-3 bottom-0 right-0 outline-none w-[1240px] state-open:animate-slide-left state-closed:animate-slide-left-out flex flex-col"
        asChild
      >
        <Tabs.Root defaultValue="settings">
          <div className="bg-white pt-6 pl-6 pr-10 flex flex-col animate-fade">
            <header className="flex items-center gap-2">
              <Dialog.Title className="text-blue-900 font-medium text-xl">
                Nome_do_Criativo ({id})
              </Dialog.Title>

              <Dialog.Close className="absolute top-2 right-2">
                <XCircle size={32} weight="fill" className="text-gray-300" />
              </Dialog.Close>
            </header>

            <div className="flex justify-between items-end mt-1">
              <SubMenu.List>
                <SubMenu.Trigger value="settings">
                  <SubMenu.Title>Configurações</SubMenu.Title>
                </SubMenu.Trigger>
              </SubMenu.List>

              <button
                type="button"
                className="flex gap-2 text-xl font-medium text-orange-600 mb-1 hover:opacity-70 transition-opacity"
              >
                <Image src="/svg/pencil.svg" width={20} height={24} alt="" />
                Editar
              </button>
            </div>
          </div>

          <Tabs.Content
            value="settings"
            className="px-6 py-4 flex gap-8 justify-center overflow-auto h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          >
            <div className="w-[360px]">
              <Box.Root>
                <Box.Title>Detalhes Básicos</Box.Title>

                <Box.Row>
                  <Box.Label>Criado em</Box.Label>
                  <Box.Value>01/09/2022</Box.Value>
                </Box.Row>

                <Box.Column>
                  <Box.Row>
                    <Box.Label>Preview</Box.Label>
                    <Box.Value className="text-orange-600 font-medium">
                      Abrir preview em outra aba
                    </Box.Value>
                  </Box.Row>

                  <div className="bg-[#d9d9d9] w-full h-[250px]" />
                </Box.Column>

                <Box.Column>
                  <Box.Label>Landing Page</Box.Label>
                  <Box.Value>https://exemplo.com.br</Box.Value>
                </Box.Column>

                <Box.Row>
                  <Box.Label>Tipo</Box.Label>
                  <Box.Value>Banner</Box.Value>
                </Box.Row>

                <Box.Row>
                  <Box.Label>Template</Box.Label>
                  <Box.Value>Imagem</Box.Value>
                </Box.Row>

                <Box.Row>
                  <Box.Label>Tamanho do arquivo</Box.Label>
                  <Box.Value>500Kb</Box.Value>
                </Box.Row>

                <Box.Row>
                  <Box.Label>Tamanho do criativo</Box.Label>
                  <Box.Value>300x250</Box.Value>
                </Box.Row>
              </Box.Root>
            </div>

            <div className="w-[264px] flex flex-col gap-8">
              <Box.Root>
                <Box.Title>Exclusões Competitivas</Box.Title>

                <Box.Column>
                  <Box.Label>Marca</Box.Label>
                  <Box.Value>Nenhuma</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>Categoria de Oferta</Box.Label>
                  <Box.Value>Nenhuma</Box.Value>
                </Box.Column>
              </Box.Root>

              <Box.Root>
                <Box.Title>Rastreamento</Box.Title>

                <Box.Column>
                  <Box.Label>ID Externa</Box.Label>
                  <Box.Value>Nenhum</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>Teste de clique</Box.Label>
                  <Box.Value>Nenhum</Box.Value>
                </Box.Column>

                <Box.Divider />

                <Box.Column>
                  <Box.Label>Frequência e Recência</Box.Label>
                  <Box.Value>Nenhum</Box.Value>
                </Box.Column>

                <Box.Divider />

                <Box.Column>
                  <Box.Label>Pixels Third Party</Box.Label>
                  <Box.Value>Nenhum</Box.Value>
                </Box.Column>

                <Box.Divider />

                <Box.Column>
                  <Box.Label>Pixel Criativo Individual</Box.Label>
                  <Box.Value>Nenhum</Box.Value>
                </Box.Column>

                <Box.Divider />

                <Box.Column>
                  <Box.Label>Pixel de Segmento</Box.Label>
                  <Box.Value>Nenhum</Box.Value>
                </Box.Column>
              </Box.Root>
            </div>

            <div className="w-[264px] flex flex-col gap-8">
              <Box.Root>
                <Box.Title>Linhas Associadas</Box.Title>

                <Box.Column>
                  <Box.Row>
                    <Box.Label>Nome</Box.Label>
                    <Box.Label>ID</Box.Label>
                  </Box.Row>

                  <Box.Divider />

                  <Box.Row>
                    <Box.Value>Nome_Linha</Box.Value>
                    <Box.Value>NºID</Box.Value>
                  </Box.Row>
                </Box.Column>
              </Box.Root>

              <Box.Root>
                <Box.Title>Auditoria</Box.Title>

                <Box.Column>
                  <Box.Label>Tipo</Box.Label>
                  <Box.Value>Auditoria de plataforma</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>Prioridade</Box.Label>
                  <Box.Value>Um dia</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>Status</Box.Label>
                  <Box.Value>Aprovado</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>ADx Status</Box.Label>
                  <Box.Value>Aprovado</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>ADx Motivo de Rejeição</Box.Label>
                  <Box.Value>Esse criativo foi aprovado</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>Marca</Box.Label>
                  <Box.Value>Nome_Marca</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>Linguagem</Box.Label>
                  <Box.Value>Português</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Label>Categorias de Oferta</Box.Label>
                  <Box.Value>Português</Box.Value>
                </Box.Column>

                <Box.Column>
                  <Box.Row>
                    <Box.Label>Nome</Box.Label>
                    <Box.Label>ID</Box.Label>
                  </Box.Row>

                  <Box.Divider />

                  <Box.Row>
                    <Box.Value>Nome_Categoria</Box.Value>
                    <Box.Value>NºID</Box.Value>
                  </Box.Row>
                </Box.Column>
              </Box.Root>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
