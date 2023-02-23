import * as Tooltip from '@radix-ui/react-tooltip';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import { Sidebar } from '@components/Sidebar';
import { Tag } from '@components/Tag';

import { RouteProps } from '@config/routesConfig';

import { withSSRAuth } from '@utils/withSSRAuth';

import { CreateInsertionOrderForm } from './components/CreateInsertionOrderForm';

const routesConfig: RouteProps[] = [
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
    title: 'Estratégia',
    path: '/',
    activeIconUrl: '/svg/sidebar/strategy-on.svg',
    inactiveIconUrl: '/svg/sidebar/strategy-off.svg',
    permissions: [],
  },
  {
    id: '3',
    title: 'Frequência',
    path: '/',
    activeIconUrl: '/svg/sidebar/frequency-on.svg',
    inactiveIconUrl: '/svg/sidebar/frequency-off.svg',
    permissions: [],
  },
  {
    id: '4',
    title: 'Comentários',
    path: '/',
    activeIconUrl: '/svg/sidebar/comment-on.svg',
    inactiveIconUrl: '/svg/sidebar/comment-off.svg',
    permissions: [],
  },
];

export default function CreateInsertionOrder() {
  const router = useRouter();
  const { advertiserId } = router.query;

  const breadcrumbsConfig: BreadcrumbRoute[] = [
    { id: '1', path: '/', title: 'Campanhas' },
    {
      id: '2',
      path: '/campaigns/insertion-orders',
      title: '> Insertion Orders',
    },
    {
      id: '3',
      path: `/campaigns/insertion-orders/create/${advertiserId}`,
      title: '> Criar I.O.',
      active: true,
    },
  ];

  return (
    <div className="pb-6">
      <NextSeo title="Criar Nova IO | Overview" />
      <Breadcrumbs routes={breadcrumbsConfig} />

      <div className="pl-4 pt-4 flex flex-col gap-2">
        <Tag.Root>
          <Tag.Label>ANU</Tag.Label>
          <Tag.Title>Nome do Anunciante</Tag.Title>
        </Tag.Root>

        <Tag.Root>
          <Tag.Label className="bg-purple-900 text-white">IO</Tag.Label>
          <Tag.Title className="font-medium text-2xl">
            Criar nova Insertion Order
          </Tag.Title>
        </Tag.Root>
      </div>

      <Tooltip.Provider>
        <CreateInsertionOrderForm />
      </Tooltip.Provider>
    </div>
  );
}

CreateInsertionOrder.getSidebar = () => (
  <Sidebar
    routes={routesConfig}
    logoUrl="/svg/logo.svg"
    background="bg-white"
    itemClassName="text-blue-900 hover:text-white"
  />
);

export const getServerSideProps = withSSRAuth();
