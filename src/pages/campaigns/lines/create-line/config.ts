import { RouteProps } from '@config/routesConfig';

export const routesConfig: RouteProps[] = [
  {
    id: '1',
    title: 'Configurações',
    path: '/campaigns/insertion-orders/create',
    activeIconUrl: '/svg/sidebar/config-on.svg',
    inactiveIconUrl: '/svg/sidebar/config-off.svg',
    permissions: [],
  },
  {
    id: '2',
    title: 'Orçamento',
    path: '/',
    activeIconUrl: '/svg/sidebar/strategy-on.svg',
    inactiveIconUrl: '/svg/sidebar/strategy-off.svg',
    permissions: [],
  },
  {
    id: '3',
    title: 'Otimização',
    path: '/',
    activeIconUrl: '/svg/sidebar/frequency-on.svg',
    inactiveIconUrl: '/svg/sidebar/frequency-off.svg',
    permissions: [],
  },
  {
    id: '4',
    title: 'Inventário',
    path: '/',
    activeIconUrl: '/svg/sidebar/comment-on.svg',
    inactiveIconUrl: '/svg/sidebar/comment-off.svg',
    permissions: [],
  },
  {
    id: '5',
    title: 'Público',
    path: '/',
    activeIconUrl: '/svg/sidebar/comment-on.svg',
    inactiveIconUrl: '/svg/sidebar/comment-off.svg',
    permissions: [],
  },
  {
    id: '6',
    title: 'Visibilidade',
    path: '/',
    activeIconUrl: '/svg/sidebar/comment-on.svg',
    inactiveIconUrl: '/svg/sidebar/comment-off.svg',
    permissions: [],
  },
  {
    id: '7',
    title: 'Criativos',
    path: '/',
    activeIconUrl: '/svg/sidebar/comment-on.svg',
    inactiveIconUrl: '/svg/sidebar/comment-off.svg',
    permissions: [],
  },
  {
    id: '8',
    title: 'Relatórios',
    path: '/',
    activeIconUrl: '/svg/sidebar/comment-on.svg',
    inactiveIconUrl: '/svg/sidebar/comment-off.svg',
    permissions: [],
  },
];

export const getBreadcrumbsConfig = (advertiserId: string | string[] | undefined) => {
  return [
    { id: '1', path: '/', title: 'Campanhas' },
    {
      id: '2',
      path: '/campaigns/lines',
      title: '> Linhas',
    },
    {
      id: '3',
      path: `/campaigns/create-lines/create/${advertiserId}`,
      title: '> Criar Linha',
      active: true,
    },
  ];
};
