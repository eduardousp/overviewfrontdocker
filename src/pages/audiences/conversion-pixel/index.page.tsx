import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState } from 'react';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import { SearchInput } from '@components/Form/SearchInput';
import * as Select from '@components/Form/Select';

import { withSSRAuth } from '@utils/withSSRAuth';

import { ConversionPixelsList } from './components/ConversionPixelsList';

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/', title: 'Públicos' },
  {
    id: '2',
    path: '/audiences/conversion-pixel',
    title: '> Pixel de Conversão',
    active: true,
  },
];

export default function ConversionPixel() {
  const [mySegments] = useState([1, 2]);

  return (
    <div className="pb-10 overflow-hidden">
      <NextSeo title="Públicos | Overview" />
      <Breadcrumbs routes={breadcrumbsConfig} />

      <Tabs.Root defaultValue="my">
        <header className="flex items-baseline justify-end gap-3 pl-6 pr-16 mt-6">
          <div className="flex gap-10 items-center">
            <Link href="/audiences/conversion-pixel/create">
              <a className="hover:text-orange-400 whitespace-nowrap text-2xl text-orange-600 transition-colors">
                + Criar Novo Pixel
              </a>
            </Link>

            <Select.SelectRoot
              className="bg-color-white border border-orange-500 text-orange-500 p-2"
              defaultValue="action1"
            >
              <Select.SelectItem value="action1">Ações</Select.SelectItem>
              <Select.SelectItem value="action2">Ação 2</Select.SelectItem>
              <Select.SelectItem value="action3">Ação 3</Select.SelectItem>
            </Select.SelectRoot>
            <SearchInput />
          </div>
        </header>

        <Dialog.Root>
          <Tabs.Content value="my">
            <ConversionPixelsList className="mt-2 ml-4" data={mySegments} />
          </Tabs.Content>
        </Dialog.Root>
      </Tabs.Root>
    </div>
  );
}

export const getServerSideProps = withSSRAuth();
