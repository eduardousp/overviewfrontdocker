import { Pie } from '@nivo/pie';

import { Box } from '@components/Box';

const commonProperties = {
  margin: { top: 10, right: 10, bottom: 10, left: 10 },
  animate: true,
};

interface PierProps {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface PierChartProps {
  data: PierProps[];
  legendTitle?: string;
}

const getColors = (data: PierProps[]) => {
  const colors: string[] = [];
  data.forEach((element: PierProps) => {
    colors.push(element.color);
  });
  return colors;
};

const PierChart = ({ data, legendTitle }: PierChartProps) => {
  return (
    <div className=" flex flex-row items-center justify-start">
      <Box.Column className="mr-5">
        <Pie
          data={data}
          borderWidth={1}
          width={144}
          height={144}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          {...commonProperties}
          colors={getColors(data)}
        />
      </Box.Column>

      <Box.Column>
        <Box.Title>{legendTitle}</Box.Title>
        <Box.Column className="ml-3">
          {data.map((item: PierProps) => {
            return (
              <Box.Row key={item.id} className="items-center justify-start">
                <div className="w-3 h-3" style={{ backgroundColor: item.color }} />
                <dl className="font-light text-blue-900">{item.label}</dl>
              </Box.Row>
            );
          })}
        </Box.Column>
      </Box.Column>
    </div>
  );
};

export default PierChart;
