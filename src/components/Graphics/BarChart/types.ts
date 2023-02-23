import { BarDatum, BarLegendProps } from '@nivo/bar';
import { PropertyAccessor } from '@nivo/core';

export interface BarChartProps {
  title?: string;
  data: BarDatum[];
  color?: string;
  legends?: BarLegendProps[];
  className?: string;
  keys?: string[];
  indexBy?: PropertyAccessor<BarDatum, string> | undefined;
}
