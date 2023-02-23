import { RouteProps } from '@config/routesConfig';

export const routesConfig: RouteProps[] = [
  {
    id: '1',
    title: 'Detalhes do Segmento',
    path: '/audiences/segments/create-segment',
    activeIconUrl: '/svg/sidebar/search-on.svg',
    inactiveIconUrl: '/svg/sidebar/search-off.svg',
    permissions: [],
  },
  {
    id: '2',
    title: 'Pixels de Reserva',
    path: '/',
    activeIconUrl: '/svg/sidebar/mouse-on.svg',
    inactiveIconUrl: '/svg/sidebar/mouse-off.svg',
    permissions: [],
  },
];

export const getBreadcrumbsConfig = () => {
  return [
    { id: '1', path: '/', title: 'Públicos' },
    {
      id: '2',
      path: '/audiences/segments',
      title: '> Segmentos',
    },
    {
      id: '3',
      path: `/audiences/segments/create-segment/`,
      title: '> Criar Segmento',
      active: true,
    },
  ];
};
