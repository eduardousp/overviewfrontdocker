interface FilterDate {
  id: number;
  title: string;
  subTitle?: string;
  selected: boolean;
}

interface PierProps {
  id: string;
  label: string;
  value: number;
  color: string;
}

export const listFilterDate: FilterDate[] = [
  { id: 0, title: 'Hoje', selected: true },
  { id: 1, title: 'Ontem', selected: false },
  { id: 2, title: 'Anteontem', selected: false },
];

export const listFilterSegment: FilterDate[] = [
  {
    id: 0,
    title: 'Segmentação de Membros',
    subTitle: '96 bilhões de lances >',
    selected: false,
  },
  {
    id: 1,
    title: 'Segmentação de Itens de Linha',
    subTitle: '96 bilhões de lances >',
    selected: true,
  },
  { id: 2, title: 'Criativos', subTitle: '410k de lances >', selected: false },
  { id: 3, title: 'Avaliação', subTitle: '360k de lances >', selected: false },
  { id: 4, title: 'Leilão', subTitle: '64k de lances >', selected: false },
];

export const listGraphic: PierProps[] = [
  {
    id: 'Cidades',
    label: 'Cidades',
    value: 100,
    color: '#61449B',
  },
  {
    id: 'Visibilidade e taxas de conclusões',
    label: 'Visibilidade e taxas de conclusões',
    value: 1,
    color: '#f16024',
  },
  {
    id: 'Inventário de listas de URL',
    label: 'Inventário de listas de URL',
    value: 1,
    color: '#1F2047',
  },
  {
    id: 'Tipos de dispositivos',
    label: 'Tipos de dispositivos',
    value: 1,
    color: '#C6C6C5',
  },
];
