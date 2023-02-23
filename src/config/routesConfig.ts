type RouteBaseProps = {
  id: string;
  title: string;
  activeIconUrl: string;
  inactiveIconUrl: string;
  permissions: string[];
};

export type SubRoute = {
  id: string;
  title: string;
  path: string;
  activeIconUrl: string;
  inactiveIconUrl: string;
  permissions: string[];
};

type WithPath = {
  path: string;
  subRoutes?: undefined;
};

type WithRoutes = {
  path?: undefined;
  subRoutes: SubRoute[];
};

export type RouteProps = RouteBaseProps & (WithPath | WithRoutes);

export const routesConfig: RouteProps[] = [
  {
    id: '1',
    title: 'Campanhas',
    permissions: ['list:campaign'],
    activeIconUrl: '/svg/sidebar/campaign-on.svg',
    inactiveIconUrl: '/svg/sidebar/campaign-off.svg',
    subRoutes: [
      {
        id: '1.1',
        title: 'Anunciantes',
        path: '/campaigns/advertisers',
        activeIconUrl: '/svg/sidebar/advertiser-on.svg',
        inactiveIconUrl: '/svg/sidebar/advertiser-off.svg',
        permissions: ['list:advertiser'],
      },
      {
        id: '1.2',
        title: 'Insertion Orders',
        path: '/campaigns/insertion-orders',
        activeIconUrl: '/svg/sidebar/insertion-order-on.svg',
        inactiveIconUrl: '/svg/sidebar/insertion-order-off.svg',
        permissions: ['list:insertion-order'],
      },
      {
        id: '1.3',
        title: 'Linhas',
        path: '/campaigns/lines',
        activeIconUrl: '/svg/sidebar/line-on.svg',
        inactiveIconUrl: '/svg/sidebar/line-off.svg',
        permissions: ['list:line'],
      },
    ],
  },
  {
    id: '2',
    title: 'Públicos',
    permissions: ['list:audience'],
    activeIconUrl: '/svg/sidebar/audience-on.svg',
    inactiveIconUrl: '/svg/sidebar/audience-off.svg',
    subRoutes: [
      {
        id: '2.1',
        title: 'Segmentos',
        path: '/audiences/segments',
        activeIconUrl: '/svg/sidebar/segment-on.svg',
        inactiveIconUrl: '/svg/sidebar/segment-off.svg',
        permissions: ['list:segment'],
      },
      {
        id: '2.2',
        title: 'Pixel de Conversão',
        path: '/audiences/conversion-pixel',
        activeIconUrl: '/svg/sidebar/conversion-pixel-on.svg',
        inactiveIconUrl: '/svg/sidebar/conversion-pixel-off.svg',
        permissions: ['list:conversion-pixel'],
      },
    ],
  },
  {
    id: '3',
    title: 'Criativos',
    path: '/creatives',
    activeIconUrl: '/svg/sidebar/creative-on.svg',
    inactiveIconUrl: '/svg/sidebar/creative-off.svg',
    permissions: ['list:creative'],
  },
  {
    id: '4',
    title: 'Relatórios',
    path: '/reports',
    activeIconUrl: '/svg/sidebar/report-on.svg',
    inactiveIconUrl: '/svg/sidebar/report-off.svg',
    permissions: ['list:report'],
  },
  {
    id: '5',
    title: 'Pagamentos',
    path: '/payments',
    activeIconUrl: '/svg/sidebar/payment-on.svg',
    inactiveIconUrl: '/svg/sidebar/payment-off.svg',
    permissions: ['list:payment'],
  },
  {
    id: '6',
    title: 'FAQ',
    path: '/faq',
    activeIconUrl: '/svg/sidebar/faq-on.svg',
    inactiveIconUrl: '/svg/sidebar/faq-off.svg',
    permissions: ['list:faq'],
  },
];
