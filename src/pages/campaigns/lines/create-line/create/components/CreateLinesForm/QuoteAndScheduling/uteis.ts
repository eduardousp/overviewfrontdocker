import { SelectBoxItem } from '@components/SelectBox/types';

export const listTypeResultSelect: SelectBoxItem[] = [
  {
    id: 0,
    selected: true,
    title: 'Views garantidas',
    tooltip: 'Informação sobre o tópico que aparece ao se passar o mouse.',
  },
  {
    id: 1,
    selected: false,
    title: 'Views completas',
    tooltip: 'Informação sobre o tópico que aparece ao se passar o mouse.',
  },
];

export const listRateSelect: SelectBoxItem[] = [
  {
    id: 0,
    selected: true,
    title: 'Ritmo percentual',
  },
  {
    id: 1,
    selected: false,
    title: 'Orçamento Diário',
  },
];

export const listOptionsFuso: SelectBoxItem[] = [
  {
    id: 0,
    selected: false,
    title: 'Especificar Fuso horário',
  },
  {
    id: 1,
    selected: true,
    title: 'Fuso horário do usuário (determinado pelo navegador)',
  },
];

interface Budget {
  id: number;
  start_date: string;
  end_date: string;
  value: number;
}

export const listBudget: Budget[] = [
  {
    id: 0,
    start_date: '01/09/2022',
    end_date: '01/09/2022',
    value: 1000,
  },
  {
    id: 1,
    start_date: '02/09/2022',
    end_date: '02/09/2022',
    value: 2000,
  },
  {
    id: 3,
    start_date: '03/09/2022',
    end_date: '03/09/2022',
    value: 2100,
  },
  {
    id: 434,
    start_date: '04/09/2022',
    end_date: '04/09/2022',
    value: 3210,
  },
  {
    id: 220,
    start_date: '01/09/2022',
    end_date: '01/09/2022',
    value: 1000,
  },
  {
    id: 11,
    start_date: '02/09/2022',
    end_date: '02/09/2022',
    value: 2000,
  },
  {
    id: 33,
    start_date: '03/09/2022',
    end_date: '03/09/2022',
    value: 2100,
  },
  {
    id: 24,
    start_date: '04/09/2022',
    end_date: '04/09/2022',
    value: 3210,
  },
];
