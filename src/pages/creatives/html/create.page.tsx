import * as Tooltip from '@radix-ui/react-tooltip';
import { NextSeo } from 'next-seo';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import ButtonOrange from '@components/ButtonOrange';

import { CreativeUploadSidebar } from '@pages/creatives/components/CreativeUploadSidebar';

import { withSSRAuth } from '@utils/withSSRAuth';

import { CreateHtmlForm } from './components/CreateHtmlForm';

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', title: 'Creatives', path: '/creatives' },
  { id: '2', title: '> Criar HTML', path: '/creatives/html/create', active: true },
];

export default function CreateHtml() {
  return (
    <>
      <Breadcrumbs routes={breadcrumbsConfig} />
      <NextSeo title="Criar novo HTML | Overview" />

      <div className="flex h-full overflow-hidden">
        <CreativeUploadSidebar />

        <div className="w-full relative flex flex-col">
          <div className="px-4 pb-6 overflow-auto">
            <Tooltip.Provider>
              <CreateHtmlForm />
            </Tooltip.Provider>
          </div>

          <footer className="bg-white h-16 sticky bottom-0 left-0 right-0 py-4 px-8 flex gap-8 mt-auto justify-end shadow-inner">
            <ButtonOrange background={false} border={false} title="Cancelar" />
            <ButtonOrange title="Salvar" />
            <ButtonOrange title="Salvar e Duplicar" />
            <ButtonOrange title="Salvar e Criar Novo" />
          </footer>
        </div>
      </div>
    </>
  );
}

CreateHtml.getSidebar = () => null;

export const getServerSideProps = withSSRAuth();
