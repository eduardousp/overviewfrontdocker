import { getInsertionOrders } from '@controllers/insertion-orders';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import { SelectAdvertiserDialog } from '@components/Dialog/SelectAdvertiserDialog';
import { SearchInput } from '@components/Form/SearchInput';
import { SubMenu } from '@components/SubMenu';

import { InsertionOrderInfoDialog } from '@pages/campaigns/insertion-orders/components/InsertionOrderInfoDialog';
import { InsertionOrdersList } from '@pages/campaigns/insertion-orders/components/InsertionOrdersList';

import { withSSRAuth } from '@utils/withSSRAuth';

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/', title: 'Campanhas' },
  {
    id: '2',
    path: '/campaigns/insertion-orders',
    title: '> Insertion Orders',
    active: true,
  },
];

interface Props {
  response?: any;
}

export default function InsertionOrders({ response }: Props) {
  const [insertionOrder, setInsertionOrder] = useState({});

  return (
    <div className="pb-10 overflow-hidden">
      <NextSeo title="Insertion Orders | Overview" />
      <Breadcrumbs routes={breadcrumbsConfig} />

      <Tabs.Root defaultValue="progress">
        <header className="flex items-baseline justify-between gap-3 pl-6 pr-16 mt-6">
          <SubMenu.List>
            <SubMenu.Trigger value="draft">
              <SubMenu.Title>Em Rascunho</SubMenu.Title>
              <SubMenu.Count>00</SubMenu.Count>
            </SubMenu.Trigger>

            <SubMenu.Trigger value="progress">
              <SubMenu.Title>Em andamento</SubMenu.Title>
              <SubMenu.Count>02</SubMenu.Count>
            </SubMenu.Trigger>

            <SubMenu.Trigger value="finished">
              <SubMenu.Title>Finalizadas</SubMenu.Title>
              <SubMenu.Count>03</SubMenu.Count>
            </SubMenu.Trigger>
          </SubMenu.List>

          <div className="flex gap-10">
            <Dialog.Root>
              <Dialog.Trigger className="hover:text-orange-400 whitespace-nowrap text-2xl text-orange-600 transition-colors">
                + Criar Nova IO
              </Dialog.Trigger>

              <SelectAdvertiserDialog />
            </Dialog.Root>

            <SearchInput />
          </div>
        </header>

        <Dialog.Root>
          <Tabs.Content value="draft">
            <InsertionOrdersList
              className="mt-2 ml-4"
              data={response}
              setInsertionOrder={setInsertionOrder}
            />
          </Tabs.Content>

          <Tabs.Content value="progress">
            <InsertionOrdersList
              className="mt-2 ml-4"
              data={response}
              setInsertionOrder={setInsertionOrder}
            />
          </Tabs.Content>

          <Tabs.Content value="finished">
            <InsertionOrdersList
              className="mt-2 ml-4"
              data={response}
              setInsertionOrder={setInsertionOrder}
            />
          </Tabs.Content>

          <InsertionOrderInfoDialog insertionOrder={insertionOrder} />
        </Dialog.Root>
      </Tabs.Root>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  const response = await getInsertionOrders(0, 10);

  return {
    props: { response },
  };
});
