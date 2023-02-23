import * as Tooltip from '@radix-ui/react-tooltip';
import { NextSeo } from 'next-seo';

import { Breadcrumbs } from '@components/Breadcrumb';
import { Accordion } from '@components/Form/Section';
import { Sidebar } from '@components/Sidebar';

import {
  routesConfig,
  getBreadcrumbsConfig,
} from '@pages/audiences/segments/create-segment/config';

import { withSSRAuth } from '@utils/withSSRAuth';

import ReservePixels from './components/CreateSegmentForm/ReservePixels';
import SegmentDetails from './components/CreateSegmentForm/SegmentDetails';

export default function CreateSegment() {
  return (
    <div className="pb-10 overflow-hidden">
      <NextSeo title="Criar Novo Segmento | Overview" />
      <Breadcrumbs routes={getBreadcrumbsConfig()} />

      <Tooltip.Provider>
        <Accordion.Root type="multiple" className="mx-auto mt-20">
          <SegmentDetails />
          <ReservePixels />
        </Accordion.Root>
      </Tooltip.Provider>
    </div>
  );
}

CreateSegment.getSidebar = () => (
  <Sidebar
    routes={routesConfig}
    logoUrl="/svg/logo.svg"
    background="bg-white"
    itemClassName="text-blue-900 hover:text-white"
  />
);

export const getServerSideProps = withSSRAuth();
