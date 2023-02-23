import { NextSeo } from 'next-seo';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import ButtonOrange from '@components/ButtonOrange';
import { Sidebar } from '@components/Sidebar';

import { RouteProps } from '@config/routesConfig';

import { withSSRAuth } from '@utils/withSSRAuth';

import { CreatePixelForm } from './components/CreatePixelForm';

const routesConfig: RouteProps[] = [
  {
    id: '1',
    title: 'Detalhes',
    path: '/audiences/conversion-pixel/create',
    activeIconUrl: '/svg/sidebar/search-on.svg',
    inactiveIconUrl: '/svg/sidebar/search-off.svg',
    permissions: [],
  },
  {
    id: '2',
    title: 'Pixels de Reserva',
    path: '/audiences/conversion-pixel/create',
    activeIconUrl: '/svg/sidebar/mouse-on.svg',
    inactiveIconUrl: '/svg/sidebar/mouse-off.svg',
    permissions: [],
  },
];

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/', title: 'Públicos' },
  {
    id: '2',
    path: '/audiences/conversion-pixel',
    title: '> Pixel de Conversão',
  },
  {
    id: '3',
    path: '/audiences/conversion-pixel/create',
    title: '> Criar Pixel',
    active: true,
  },
];

export default function CreateConversationPixel() {
  return (
    <>
      <NextSeo title="Criar Novo Pixel | Overview" />
      <Breadcrumbs routes={breadcrumbsConfig} />

      <div className="flex flex-col w-full h-full overflow-hidden">
        <div className="px-4 pb-4 overflow-auto">
          <CreatePixelForm />
        </div>

        <footer className="bg-white h-16 py-4 px-8 flex gap-8 mt-auto justify-end shadow-inner">
          <ButtonOrange background={false} border={false} title="Cancelar" />
          <ButtonOrange title="Salvar" />
        </footer>
      </div>
    </>
  );
}

CreateConversationPixel.getSidebar = () => (
  <Sidebar
    routes={routesConfig}
    logoUrl="/svg/logo.svg"
    background="bg-white"
    border="border-purple-900"
    itemClassName="text-blue-900 hover:text-white"
  />
);

export const getServerSideProps = withSSRAuth();
