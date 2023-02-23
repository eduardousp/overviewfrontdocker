import * as Tooltip from '@radix-ui/react-tooltip';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { Breadcrumbs } from '@components/Breadcrumb';
import { Sidebar } from '@components/Sidebar';
import { Tag } from '@components/Tag';

import { useSessionStorage } from '@hooks/useSessionStorage';

import {
  routesConfig,
  getBreadcrumbsConfig,
} from '@pages/campaigns/lines/create-line/config';
import { KEY_CREATE_LINE_DATA } from '@pages/campaigns/lines/create-line/index.page';

import { withSSRAuth } from '@utils/withSSRAuth';

import { CreateLinesForm } from './components/CreateLinesForm';

export default function CreateLineItem() {
  const router = useRouter();
  const { advertiserId } = router.query;
  const [createLineData] = useSessionStorage(KEY_CREATE_LINE_DATA, {});

  return (
    <div className="pb-6">
      <NextSeo title="Criar Nova Linha | Overview" />
      <Breadcrumbs routes={getBreadcrumbsConfig(advertiserId)} />

      <div className="flex flex-col gap-2 pt-4 pl-4">
        <Tag.Root>
          <Tag.Label>ANU</Tag.Label>
          <Tag.Title>{createLineData?.advertiser?.name}</Tag.Title>
        </Tag.Root>

        <Tag.Root>
          <Tag.Label className="text-white bg-purple-900">IO</Tag.Label>
          <Tag.Title>{createLineData?.insertionOrder?.name}</Tag.Title>
        </Tag.Root>

        <Tag.Root>
          <Tag.Label className="text-white bg-orange-500">LI</Tag.Label>
          <Tag.Title className="text-2xl font-medium">Criar nova Linha</Tag.Title>
        </Tag.Root>
      </div>

      <Tooltip.Provider>
        <CreateLinesForm />
      </Tooltip.Provider>
    </div>
  );
}

CreateLineItem.getSidebar = () => (
  <Sidebar
    routes={routesConfig}
    logoUrl="/svg/logo.svg"
    background="bg-white"
    itemClassName="text-blue-900 hover:text-white"
  />
);

export const getServerSideProps = withSSRAuth();
