import * as Tabs from '@radix-ui/react-tabs';
import { CaretDown } from 'phosphor-react';

import { Box } from '@components/Box';
import BarChart from '@components/Graphics/BarChart';
import LineChart from '@components/Graphics/LineChart';
import {
  barChartMock,
  lineChartMock,
  lineChartMock2,
  lineChartMock3,
} from '@components/Graphics/mock';

import { formatCurrency } from '@utils/formatCurrency';

const Analytics = () => {
  return (
    <Tabs.Content
      value="lines_analytics"
      className="pt-28 pb-14 h-screen overflow-scroll"
    >
      <div className="flex flex-col px-20 py-4">
        <LineChart
          className="h-24"
          title="Entrega Ativa:"
          subTitle="R$5,50 nos últimos 60 minutos"
          color={['#bab22b']}
          margin={{ top: 16, right: 60, bottom: 24, left: 60 }}
          data={lineChartMock}
        />

        <Box.Root className="gap-6 px-0">
          <div>
            <div className="flex gap-10 px-4 pt-2">
              <strong className="text-xl font-medium text-blue-900">
                Métricas Chave
              </strong>
              <span className="flex items-center gap-4 px-4 font-medium text-white bg-orange-600 rounded">
                Período de Faturamento Atual: 01/01/2022 - 30/01/2022
                <CaretDown weight="bold" size={24} />
              </span>
            </div>

            <div className="mx-14 grid grid-cols-4 gap-10 px-10 pb-6 mt-6 border-b border-purple-900">
              <Box.Column>
                <Box.Label>CPM de receita reservada</Box.Label>
                <Box.Value>R$0,90</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPC de receita reservada</Box.Label>
                <Box.Value>R$0,80</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPA de receita reservada</Box.Label>
                <Box.Value>R$0,00</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPM Visível de receita reservada</Box.Label>
                <Box.Value>R$1,50</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>Taxa de cliques</Box.Label>
                <Box.Value>0.200%</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>Taxa de visualização</Box.Label>
                <Box.Value>69.550%</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>Taxa de conversão</Box.Label>
                <Box.Value>R$0,00</Box.Value>
              </Box.Column>
            </div>
          </div>

          <BarChart
            data={barChartMock}
            title="Período de faturamento atual - Entrega por dia"
            color="#2f2f"
            className="h-80 border-b border-purple-900 pb-4 px-[2.625rem] mx-[3.75rem] mt-4"
          />

          <LineChart
            className="h-[20rem] border-b border-purple-900 pb-4 px-[2.625rem] mx-[3.75rem] mt-4"
            title="Período de faturamento atual - Desempenho monetário por dia"
            color={['#bab22b', '#ddabba']}
            margin={{ top: 16, right: 60, bottom: 24, left: 60 }}
            data={lineChartMock2}
            axisBottom={{ tickSize: 4, tickPadding: 8 }}
            axisLeft={{ format: (value) => formatCurrency(value) }}
            theme={{
              textColor: '#1F2047',
              fontSize: 12,
            }}
            axisTop={null}
            axisRight={null}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            isInteractive={false}
            useMesh
          />

          <LineChart
            className="h-[20rem] border-b border-purple-900 pb-4 px-[2.625rem] mx-[3.75rem] mt-4"
            title="Período de faturamento atual - Desempenho de engajamento por dia"
            color={['#bab22b', '#ddabba']}
            margin={{ top: 16, right: 60, bottom: 24, left: 60 }}
            data={lineChartMock3}
            axisBottom={{ tickSize: 4, tickPadding: 8 }}
            axisLeft={{ format: (value) => `${value}%` }}
            theme={{
              textColor: '#1F2047',
              fontSize: 12,
            }}
            axisTop={null}
            axisRight={null}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            isInteractive={false}
            useMesh
          />

          <div>
            <strong className="ml-4 text-xl font-medium text-blue-900">Custo</strong>

            <div className="mx-14 grid grid-cols-4 gap-10 px-10 pb-6 mt-6">
              <Box.Column>
                <Box.Label>Receita de reserva</Box.Label>
                <Box.Value>R$0,90</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>Custo de mídia</Box.Label>
                <Box.Value>R$0,80</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPM Receita de reserva</Box.Label>
                <Box.Value>R$0,00</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPM Custo de mídia</Box.Label>
                <Box.Value>R$1,50</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPC Receita de reserva</Box.Label>
                <Box.Value>R$0,90</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPC custo de mídia</Box.Label>
                <Box.Value>69.550%</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPA Receita de reserva</Box.Label>
                <Box.Value>R$0,00</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPA Custo de mídia</Box.Label>
                <Box.Value>R$0,00</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>Custo de dados</Box.Label>
                <Box.Value>0.200%</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPM Visível Custo de mídia</Box.Label>
                <Box.Value>R$0,00</Box.Value>
              </Box.Column>

              <Box.Column>
                <Box.Label>CPM Visível Receita de reserva</Box.Label>
                <Box.Value>69.550%</Box.Value>
              </Box.Column>
            </div>
          </div>
        </Box.Root>
      </div>
    </Tabs.Content>
  );
};

export default Analytics;
