export interface TagPosition {
  id: number;
  name: string;
  type: 'above' | 'under' | 'unknown';
  image: string;
  selected: boolean;
}

export const listTagPosition: TagPosition[] = [
  {
    id: 0,
    name: 'Acima da dobra',
    type: 'above',
    image: '/svg/icon_above.svg',
    selected: true,
  },
  {
    id: 1,
    name: 'Abaixo da dobra',
    type: 'under',
    image: '/svg/icon_under.svg',
    selected: false,
  },
  {
    id: 2,
    name: 'Desconhecido',
    type: 'unknown',
    image: '/svg/icon_unknown.svg',
    selected: false,
  },
];
