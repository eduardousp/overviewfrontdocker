import * as Tabs from '@radix-ui/react-tabs';
import * as Tooltip from '@radix-ui/react-tooltip';
import { NextSeo } from 'next-seo';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';

import { withSSRAuth } from '@utils/withSSRAuth';

import { CreativeUploadSidebar } from './components/CreativeUploadSidebar';
import { HostedContent } from './components/HostedContent';
import { ThirdPartyContent } from './components/ThirdPartyContent';

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', title: 'Creatives', path: '/creatives' },
  { id: '2', title: '> Upar Vários', path: '/creatives/html/create', active: true },
];

export default function UploadCreative() {
  return (
    <>
      <Breadcrumbs routes={breadcrumbsConfig} />
      <NextSeo title="Upload múltiplo | Overview" />

      <Tabs.Root defaultValue="third-party" className="flex h-full overflow-hidden">
        <CreativeUploadSidebar />

        <Tooltip.Provider>
          <ThirdPartyContent />
          <HostedContent />
        </Tooltip.Provider>
      </Tabs.Root>
    </>
  );
}

UploadCreative.getSidebar = () => null;

export const getServerSideProps = withSSRAuth();
