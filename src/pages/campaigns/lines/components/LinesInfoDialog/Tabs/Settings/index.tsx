import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import { Box } from '@components/Box';
import ExpandableList from '@components/ExpandableList';

const Settings = () => {
  return (
    <Tabs.Content value="lines_settings" className="pt-28 pb-14 h-screen overflow-scroll">
      <div className=" flex gap-8 px-6 py-4">
        <div className="w-[264px] flex flex-col gap-8">
          <Box.Root>
            <Box.Title className="text-lg">Orçamento e Agendamento</Box.Title>

            <Box.Column>
              <Box.Label>Modelo de Pagamento</Box.Label>
              <Box.Value className="ml-2">Pagar por impressão</Box.Value>
            </Box.Column>

            <Box.Column>
              <Box.Label>Receita</Box.Label>
              <Box.Value className="ml-2">
                Custo Plus (0,00% de margem) manter CPM entre R$ 1,00 e R$ 2,00
              </Box.Value>
            </Box.Column>

            <Box.Column>
              <Box.Label>Orçamento Total</Box.Label>
              <Box.Value className="ml-2">R$ 10.000,00</Box.Value>
            </Box.Column>

            <Box.Divider />

            <Box.Column>
              <Box.Label>fuso horário de Brasil / Brasília</Box.Label>
            </Box.Column>

            <Box.Column>
              <Box.Label>Flight Atual</Box.Label>
              <Box.Value className="border border-purple-900 bg-[#F9F9F9] px-4 py-2 text-sm whitespace-pre flex items-center justify-between">
                <span>01/01/2022 12:00AM{'\n'}30/01/2022 11:59PM</span>
                <span>R$5.000,00</span>
              </Box.Value>
            </Box.Column>

            <Box.Column className="gap-0">
              <Box.Label className="mb-1">Flight Passados</Box.Label>
              <Box.Value className="border border-purple-900 bg-[#F9F9F9] px-4 py-2 text-sm whitespace-pre flex items-center justify-between">
                <span>01/12/2021 12:00AM{'\n'}30/12/2012 11:59PM</span>
                <span>R$3.000,00</span>
              </Box.Value>
              <Box.Value className="border border-t-0 border-purple-900 bg-[#F9F9F9] px-4 py-2 text-sm whitespace-pre flex items-center justify-between">
                <span>05/11/2021 12:00AM{'\n'}15/11/2012 11:59PM</span>
                <span>R$1.000,00</span>
              </Box.Value>
            </Box.Column>

            <Box.Divider />

            <Box.Column>
              <Box.Label>Recuperação Insuficiente</Box.Label>
              <Box.Value className="ml-2">Igualmente</Box.Value>
            </Box.Column>
            <Box.Column>
              <Box.Label>Parte do dia</Box.Label>
              <Box.Value className="ml-2">Qualquer momento</Box.Value>
            </Box.Column>
            <Box.Column>
              <Box.Label>Alocação de ritmo diário</Box.Label>
              <Box.Value className="ml-2">Igualmente</Box.Value>
            </Box.Column>
          </Box.Root>
        </div>

        <div className="w-[264px] flex flex-col gap-8">
          <Box.Root>
            <Box.Title>Otimização</Box.Title>

            <Box.Column>
              <Box.Title>Método de Otimização</Box.Title>
              <Box.Value className="ml-2">otimização desligada</Box.Value>
            </Box.Column>
            <Box.Column>
              <Box.Title>Objetivo Prioritário</Box.Title>
              <Box.Value className="ml-2">Performance</Box.Value>
            </Box.Column>
            <Box.Column>
              <Box.Title>Pixel de Conversão</Box.Title>
              <Box.Value className="ml-2">Nenhum pixel associado</Box.Value>
            </Box.Column>
          </Box.Root>

          <Box.Root>
            <Box.Title>Criativos</Box.Title>

            <Box.Column>
              <Box.Label>Tipo de anúncio</Box.Label>
              <Box.Value className="ml-2">Banner</Box.Value>
            </Box.Column>
            <Box.Column>
              <Box.Label>Rotação de Criativos</Box.Label>
              <Box.Value className="ml-2">CTR Otimizado</Box.Value>
            </Box.Column>
            <Box.Divider />
            <Box.Column>
              <Box.Label>Criativos Associados</Box.Label>
              <Box.Value className="ml-2">Nº de criativos 2 </Box.Value>
            </Box.Column>
          </Box.Root>
        </div>

        <div className="w-[264px] flex flex-col gap-8">
          <Box.Root>
            <Box.Title>Inventário e Brand Safety</Box.Title>

            <Box.Column>
              <Box.Label>Fonte do inventário</Box.Label>
              <Box.Value className="ml-2">Open Exchange</Box.Value>
            </Box.Column>
            <Box.Divider />
            <Box.Column>
              <Box.Label>Segmentação do vendedor</Box.Label>
              <Box.Value className="ml-2">Sem vendedores</Box.Value>
            </Box.Column>
            <Box.Divider />
            <Box.Column>
              <Box.Label>Segmentação do inventário</Box.Label>
              <Box.Label className="ml-2">Tipo de Inventário</Box.Label>
              <Box.Value className="ml-2">Qualquer tipo de inventário</Box.Value>
            </Box.Column>

            <Box.Column>
              <Box.Label className="ml-2">Inventário Direto - Blocklists</Box.Label>
              <ExpandableList
                type="negative"
                data={[
                  { value: 'BlockList1 (Nº 23423432)' },
                  { value: 'BlockList2 (Nº 4234234)' },
                  { value: 'BlockList3 (Nº 231231)' },
                ]}
              />
            </Box.Column>

            <Box.Divider />

            <Box.Column>
              <Box.Label>Valor Chave</Box.Label>
              <Box.Value className="ml-2">Qualquer valor chave</Box.Value>
            </Box.Column>

            <Box.Divider />

            <Box.Column>
              <Box.Label>Segmentos de Brand Safety</Box.Label>
              <Box.Value className="ml-2">Qualquer segmento</Box.Value>
            </Box.Column>
          </Box.Root>

          <Box.Root>
            <Box.Title>Etiquetas de Relatórios</Box.Title>

            <Box.Column>
              <Box.Value className="ml-2">Sem Etiquetas de Relatórios</Box.Value>
            </Box.Column>
          </Box.Root>

          <Box.Root>
            <Box.Title>Comentários</Box.Title>

            <Box.Column>
              <Box.Value className="ml-2">Sem Comentários</Box.Value>
            </Box.Column>
          </Box.Root>
        </div>

        <div className="w-[264px] flex flex-col gap-8">
          <Box.Root>
            <Box.Title>Público e GeoSegmentação</Box.Title>

            <Box.Column>
              <Box.Label>Geográfica</Box.Label>
              <Box.Value className="ml-2">Cidades</Box.Value>
              <ExpandableList
                type="positive"
                showOr
                data={[...Array.from({ length: 15 }, () => ({ value: 'Cidade' }))]}
              />
            </Box.Column>

            <Box.Divider />

            <Box.Column>
              <Box.Label>Público e GeoSegmentação</Box.Label>
              <Box.Value className="ml-2">Qualquer Segmentação</Box.Value>
            </Box.Column>
          </Box.Root>

          <Box.Root>
            <Box.Title>Visibilidade e Dispositivos</Box.Title>

            <Box.Column>
              <Box.Label>Limite</Box.Label>
              <Box.Value className="ml-2">40% de visibilidade prevista</Box.Value>
            </Box.Column>
            <Box.Column>
              <Box.Value>Tipo de dispositivo</Box.Value>
              <ExpandableList
                type="positive"
                showOr
                data={[
                  { value: 'Computador' },
                  { value: 'Celulares' },
                  { value: 'Tablet' },
                ]}
              />
            </Box.Column>
            <Box.Divider />
            <Box.Column>
              <Box.Label>Segmentação de Sistemas</Box.Label>
              <Box.Value className="ml-2">Qualquer Sistema</Box.Value>
            </Box.Column>
            <Box.Divider />
            <Box.Column>
              <Box.Label>Segmentação da Página</Box.Label>
              <Box.Value className="ml-2">
                Qualquer string de consulta, Qualquer posição de tag
              </Box.Value>
            </Box.Column>
          </Box.Root>
        </div>
      </div>
    </Tabs.Content>
  );
};

export default Settings;
