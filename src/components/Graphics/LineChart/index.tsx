import { ResponsiveLine } from '@nivo/line';

import { Box } from '@components/Box';
import { LineChartProps } from '@components/Graphics/LineChart/types';

const LineChart = ({
  title,
  subTitle,
  data,
  color = ['#61449B'],
  useMesh,
  className,
  ...rest
}: LineChartProps) => {
  return (
    <Box.Root>
      <div className="flex gap-2">
        {title && <strong className="text-xl font-medium text-blue-900">{title}</strong>}
        {subTitle && (
          <span className="text-xl font-normal text-blue-900">{subTitle}</span>
        )}
      </div>

      <div className={className}>
        <ResponsiveLine
          data={data}
          yScale={rest.yScale || { type: 'linear' }}
          axisTop={null}
          axisRight={null}
          axisBottom={{ tickSize: 4, tickPadding: 8 }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          enablePoints={false}
          useMesh={useMesh}
          yFormat={(value) => `${value} R$`}
          colors={color}
          {...rest}
        />
      </div>
    </Box.Root>
  );
};

export default LineChart;
