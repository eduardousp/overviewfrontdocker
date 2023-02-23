import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

import { BarChartProps } from '@components/Graphics/BarChart/types';

const BarChart = ({
  title,
  data,
  color = '#61449B',
  legends,
  className,
  indexBy = 'id',
  keys = ['value'],
  ...rest
}: BarChartProps) => {
  return (
    <div>
      {title && (
        <strong className="ml-4 text-xl font-medium text-blue-900">{title}</strong>
      )}

      <div className={className}>
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy={indexBy}
          padding={0.2}
          maxValue={100}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={color}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridY={false}
          enableLabel={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          legends={legends}
          isInteractive={false}
          role="application"
          {...rest}
        />
      </div>
    </div>
  );
};

export default BarChart;
