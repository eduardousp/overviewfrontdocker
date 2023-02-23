import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import { SearchInput } from '@components/Form/SearchInput';
import * as Select from '@components/Form/Select';
import { SubMenu } from '@components/SubMenu';

import { MySegmentsList } from '@pages/audiences/segments/components/MySegmentsList';

import { numberToString } from '@utils/numberToString';

import { AudienceSegmentInfoDialog } from './components/AudiencesSegmentInfoDialog';
import { DeleteSegmentsDialog } from './components/DeleteSegmentsDialog';
import { ExportSegmentsDialog } from './components/ExportSegmentsDialog';
import { ThirdPartySegmentsList } from './components/ThirdPartySegmentsList';

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/', title: 'Públicos' },
  {
    id: '2',
    path: '/audiences/segments',
    title: '> Segmentos',
    active: true,
  },
];

export default function Segments() {
  const router = useRouter();

  const [mySegments] = useState([1, 2]);
  const [thirdParty] = useState([1, 2, 3]);
  const [tabSelected, setTabSelected] = useState('my');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openExportModal, setOpenExportModal] = useState(false);

  const handleActionChange = (value: string) => {
    if (value === 'export') {
      setOpenExportModal(true);
    }
    if (value === 'delete') {
      setOpenDeleteModal(true);
    }
  };

  return (
    <div className="pb-10 overflow-hidden">
      <NextSeo title="Públicos | Overview" />
      <Breadcrumbs routes={breadcrumbsConfig} />

      <Tabs.Root defaultValue="my">
        <header className="flex items-baseline justify-between gap-3 pl-6 pr-16 mt-6">
          <SubMenu.List>
            <SubMenu.Trigger value="my" onClick={() => setTabSelected('my')}>
              <SubMenu.Title>Meus Segmentos</SubMenu.Title>
              <SubMenu.Count>{numberToString(mySegments.length)}</SubMenu.Count>
            </SubMenu.Trigger>

            <SubMenu.Trigger
              value="third_party"
              onClick={() => setTabSelected('third_party')}
            >
              <SubMenu.Title>Third Party</SubMenu.Title>
              <SubMenu.Count>{numberToString(thirdParty.length)}</SubMenu.Count>
            </SubMenu.Trigger>
          </SubMenu.List>

          {tabSelected === 'my' ? (
            <div className="flex gap-10 items-center">
              <button
                type="button"
                className="hover:text-orange-400 whitespace-nowrap text-2xl text-orange-600 transition-colors"
                onClick={() => router.push('/audiences/segments/create-segment')}
              >
                + Criar Novo Segmento
              </button>

              <Select.SelectRoot
                className="bg-color-white border border-orange-500 text-orange-500 p-2"
                defaultValue="actions"
                onValueChange={(value) => handleActionChange(value)}
              >
                <Select.SelectItem value="actions">Ações</Select.SelectItem>
                <Select.SelectItem value="export">Exportar</Select.SelectItem>
                <Select.SelectItem value="delete">Deletar</Select.SelectItem>
              </Select.SelectRoot>
              <SearchInput />
            </div>
          ) : (
            <div>
              <SearchInput />
            </div>
          )}
        </header>

        <Dialog.Root>
          <Tabs.Content value="my">
            <MySegmentsList className="mt-2 ml-4" data={mySegments} />
          </Tabs.Content>

          <Tabs.Content value="third_party">
            <ThirdPartySegmentsList className="mt-2 ml-4" data={thirdParty} />
          </Tabs.Content>

          <AudienceSegmentInfoDialog />
        </Dialog.Root>

        <Dialog.Root open={openExportModal}>
          <ExportSegmentsDialog setOpenModal={setOpenExportModal} />
        </Dialog.Root>

        <Dialog.Root open={openDeleteModal}>
          <DeleteSegmentsDialog setOpenModal={setOpenDeleteModal} />
        </Dialog.Root>
      </Tabs.Root>
    </div>
  );
}
