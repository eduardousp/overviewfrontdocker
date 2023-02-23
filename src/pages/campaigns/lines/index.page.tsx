import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import { SearchInput } from '@components/Form/SearchInput';
import { SubMenu } from '@components/SubMenu';

import { LinesInfoDialog } from '@pages/campaigns/lines/components/LinesInfoDialog';
import { LinesList } from '@pages/campaigns/lines/components/LinesList';
import { LinesListFinished } from '@pages/campaigns/lines/components/LinesListFinished';

import { numberToString } from '@utils/numberToString';

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/', title: 'Campanhas' },
  {
    id: '2',
    path: '/campaigns/lines',
    title: '> Lines',
    active: true,
  },
];

export default function Lines() {
  const router = useRouter();

  const [inDraftData] = useState([]);
  const [inProgressData] = useState([1, 2]);
  const [finishedData] = useState([1, 2, 3]);
  const [inAnalysis] = useState([12, 22, 1, 2, 3]);

  return (
    <div className="pb-10 overflow-hidden">
      <NextSeo title="Lines | Overview" />
      <Breadcrumbs routes={breadcrumbsConfig} />

      <Tabs.Root defaultValue="progress">
        <header className="flex items-baseline justify-between gap-3 pl-6 pr-16 mt-6">
          <SubMenu.List>
            <SubMenu.Trigger value="draft">
              <SubMenu.Title>Em Rascunho</SubMenu.Title>
              <SubMenu.Count>{numberToString(inDraftData.length)}</SubMenu.Count>
            </SubMenu.Trigger>

            <SubMenu.Trigger value="progress">
              <SubMenu.Title>Em andamento</SubMenu.Title>
              <SubMenu.Count>{numberToString(inProgressData.length)}</SubMenu.Count>
            </SubMenu.Trigger>

            <SubMenu.Trigger value="finished">
              <SubMenu.Title>Finalizadas</SubMenu.Title>
              <SubMenu.Count>{numberToString(finishedData.length)}</SubMenu.Count>
            </SubMenu.Trigger>

            <SubMenu.Trigger value="analysis">
              <SubMenu.Title>Em Análise</SubMenu.Title>
              <SubMenu.Count>{numberToString(inAnalysis.length)}</SubMenu.Count>
            </SubMenu.Trigger>
          </SubMenu.List>

          <div className="flex gap-10">
            <button
              type="button"
              className="hover:text-orange-400 whitespace-nowrap text-2xl text-orange-600 transition-colors"
              onClick={() => router.push('/campaigns/lines/create-line')}
            >
              + Criar Nova Linha
            </button>
            <SearchInput />
          </div>
        </header>

        <Dialog.Root>
          <Tabs.Content value="draft">
            <LinesList className="mt-2 ml-4" data={inDraftData} />
          </Tabs.Content>

          <Tabs.Content value="progress">
            <LinesList className="mt-2 ml-4" data={inProgressData} />
          </Tabs.Content>

          <Tabs.Content value="finished">
            <LinesListFinished className="mt-2 ml-4" data={finishedData} />
          </Tabs.Content>

          <Tabs.Content value="analysis">
            <LinesList className="mt-2 ml-4" data={inAnalysis} />
          </Tabs.Content>
          <LinesInfoDialog />
        </Dialog.Root>
      </Tabs.Root>
    </div>
  );
}
