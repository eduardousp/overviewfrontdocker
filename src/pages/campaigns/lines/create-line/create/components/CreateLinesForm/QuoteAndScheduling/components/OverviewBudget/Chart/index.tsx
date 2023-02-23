import { ResponsiveBar } from '@nivo/bar';

interface OverviewBudgetBarProps {
  data: any;
}

const OverviewBudgetBar = ({ data }: OverviewBudgetBarProps) => (
  <ResponsiveBar
    data={data}
    keys={['delivered', 'expected']}
    indexBy="day"
    margin={{ top: 10, right: 30, bottom: 20, left: 80 }}
    padding={0.5}
    groupMode="grouped"
    colors={['#61449B', '#C6C6C5']}
    enableLabel={false}
    enableGridY={false}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: (value) =>
        `R$ ${Number(value).toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}`,
    }}
    valueFormat={(value) =>
      `R$ ${Number(value).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      })}`
    }
    role="application"
  />
);

export default OverviewBudgetBar;
