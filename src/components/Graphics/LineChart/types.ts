import { LineProps } from '@nivo/line';

export interface LineData {
  x: string;
  y: number;
}

export interface LineChartProps extends LineProps {
  title?: string;
  subTitle?: string;
  color?: string[];
  useMesh?: boolean;
  className?: string;
}
