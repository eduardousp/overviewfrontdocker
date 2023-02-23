import { BarDatum } from '@nivo/bar';
import { Serie } from '@nivo/line';

export const lineChartMock: Serie[] = [
  {
    id: 'active',
    data: [
      { x: '3:40PM', y: 100 },
      { x: '3:45PM', y: 70 },
      { x: '3:50PM', y: 10 },
      { x: '3:55PM', y: 40 },
      { x: '4:00PM', y: 5 },
      { x: '4:05PM', y: 15 },
      { x: '4:10PM', y: 80 },
      { x: '4:15PM', y: 5 },
      { x: '4:20PM', y: 65 },
      { x: '4:25PM', y: 50 },
      { x: '4:30PM', y: 90 },
      { x: '4:35PM', y: 0 },
      { x: '4:40PM', y: 0 },
    ],
  },
];

export const lineChartMock2: Serie[] = [
  {
    id: '01',
    data: [
      { x: '01/09/2022', y: 0.59 },
      { x: '03/09/2022', y: 0.65 },
      { x: '06/09/2022', y: 0.35 },
      { x: '12/09/2022', y: 0.5 },
      { x: '14/09/2022', y: 0.8 },
    ],
  },
  {
    id: '02',
    data: [
      { x: '01/09/2022', y: 0.75 },
      { x: '03/09/2022', y: 0.8 },
      { x: '06/09/2022', y: 1 },
      { x: '12/09/2022', y: 0.5 },
      { x: '14/09/2022', y: 0.6 },
    ],
  },
];

export const lineChartMock3: Serie[] = [
  {
    id: '01',
    data: [
      { x: '01/09/2022', y: 0.7 },
      { x: '03/09/2022', y: 0.71 },
      { x: '06/09/2022', y: 0.68 },
      { x: '12/09/2022', y: 0.71 },
      { x: '14/09/2022', y: 0.8 },
    ],
  },
];

export const percentageAlocationChartMock: Serie[] = [
  {
    id: '01',
    data: [
      { x: '12 AM', y: 0 },
      { x: '1 AM', y: 0 },
      { x: '2 AM', y: 0 },
      { x: '3 AM', y: 0 },
      { x: '4 AM', y: 0 },
      { x: '5 AM', y: 0 },
      { x: '6 AM', y: 0 },
      { x: '7 AM', y: 0 },
      { x: '8 AM', y: 0 },
      { x: '9 AM', y: 0 },
      { x: '10 AM', y: 0 },
      { x: '11 AM', y: 40 },
      { x: '12 PM', y: 60 },
      { x: '1 PM', y: 0 },
      { x: '2 PM', y: 0 },
      { x: '3 PM', y: 0 },
      { x: '4 PM', y: 0 },
      { x: '5 PM', y: 0 },
      { x: '6 PM', y: 0 },
      { x: '7 PM', y: 0 },
      { x: '8 PM', y: 0 },
      { x: '9 PM', y: 0 },
      { x: '10 PM', y: 0 },
      { x: '11 PM', y: 0 },
    ],
  },
];

export const barChartMock: BarDatum[] = [
  { value: 70, id: '01' },
  { value: 80, id: '02' },
  { value: 76, id: '03' },
  { value: 78, id: '04' },
  { value: 75, id: '05' },
  { value: 80, id: '06' },
  { value: 35, id: '07' },
  { value: 80, id: '08' },
  { value: 100, id: '09' },
  { value: 50, label: '10' },
];

export const activeUsersChartMockSerie: Serie[] = [
  {
    id: '01',
    color: '#61449B',
    data: [
      { x: '01/08', y: '250k' },
      { x: '03/08', y: '200k' },
      { x: '05/08', y: '240k' },
      { x: '07/08', y: '225k' },
      { x: '09/08', y: '200k' },
      { x: '11/08', y: '250k' },
      { x: '13/08', y: '220k' },
      { x: '15/08', y: '250k' },
      { x: '17/08', y: '200k' },
      { x: '19/08', y: '250k' },
    ],
  },
];
