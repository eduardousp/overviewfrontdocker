import { Advertiser } from '@model/Advertiser';
import { InsertionOrder } from '@model/InsertionOrder';
import * as Dialog from '@radix-ui/react-dialog';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { Box } from '@components/Box';
import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import ButtonOrange from '@components/ButtonOrange';
import { SelectAdvertiserDialog } from '@components/Dialog/SelectAdvertiserDialog';
import { SelectInsertionOrderDialog } from '@components/Dialog/SelectInsertionOrderDialog';
import { SearchInput } from '@components/Form/SearchInput';
import SelectBox from '@components/SelectBox';
import { SelectBoxItem } from '@components/SelectBox/types';
import { Tag } from '@components/Tag';

import { useSessionStorage } from '@hooks/useSessionStorage';

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/', title: 'Campanhas > Linhas' },
  {
    id: '2',
    path: '/campaigns/create-line',
    title: '> Criar Linhas',
    active: true,
  },
];

const itemsSelect: SelectBoxItem[] = [
  {
    id: 0,
    title: 'Aumentada',
    subTitle:
      'Item de Linha padrão com acesso a todos os recursos de orçamento, segmentação e otimização.',
    selected: true,
  },
  {
    id: 1,
    title: 'Programática garantida',
    subTitle: 'Para comprar deals de programática garantida.',
    selected: false,
  },
];

export const KEY_CREATE_LINE_DATA = 'data_lines_create';
export interface DataCreateLine {
  advertiser?: Advertiser;
  insertionOrder?: InsertionOrder;
  typeLine?: SelectBoxItem;
}

export default function CreateLine() {
  const router = useRouter();
  const [, setCreateLineData] = useSessionStorage(
    KEY_CREATE_LINE_DATA,
    {} as DataCreateLine
  );

  const [selectedAdvertiser, setSelectedAdvertiser] = useState<Advertiser>();
  const [selectedInsOrder, setSelectedInsOrder] = useState<InsertionOrder>();
  const [listTypeLineSelect, setListTypeLineSelect] = useState(itemsSelect);
  const [openDialogAdvertise, setOpenDialogAdvertise] = useState(false);
  const [openDialogInsOrder, setOpenDialogInsOrder] = useState(false);

  const handleTypeLineSelected = useCallback((item: SelectBoxItem) => {
    setListTypeLineSelect(
      itemsSelect.map((itemPrev) => {
        return {
          ...itemPrev,
          selected: item.id === itemPrev.id,
        };
      })
    );
  }, []);

  const handleNextPage = useCallback(() => {
    const data: DataCreateLine = {
      typeLine: listTypeLineSelect.find((item) => item.selected),
      advertiser: selectedAdvertiser,
      insertionOrder: selectedInsOrder,
    };

    setCreateLineData(data);

    router.push(`/campaigns/lines/create-line/create/${selectedAdvertiser?.id}`);
  }, [
    listTypeLineSelect,
    router,
    selectedAdvertiser,
    selectedInsOrder,
    setCreateLineData,
  ]);

  const handleAdvertiserSelected = useCallback((value: Advertiser) => {
    setSelectedAdvertiser(value);
    setOpenDialogAdvertise(false);
  }, []);

  const handleInsertionOrderSelected = useCallback((value: InsertionOrder[]) => {
    setSelectedInsOrder(value[0]);
    setOpenDialogInsOrder(false);
  }, []);

  return (
    <div className="pb-10 overflow-hidden">
      <NextSeo title="Lines | Overview" />
      <Breadcrumbs routes={breadcrumbsConfig} />

      <Box.Root>
        <Box.Column>
          <Tag.Root>
            <Tag.Label>ANU</Tag.Label>
            <Tag.Title>Nome do Advertiser</Tag.Title>
          </Tag.Root>

          <Tag.Root>
            <Tag.Label className="text-white bg-purple-900">IO</Tag.Label>
            <Tag.Title>Nome da Insertion Order</Tag.Title>
          </Tag.Root>

          <Tag.Root>
            <Tag.Label className="text-white bg-orange-600">LI</Tag.Label>
            <Tag.Title className="font-semibold">Criar nova Linha</Tag.Title>
          </Tag.Root>
        </Box.Column>
      </Box.Root>

      <Box.Column className="pl-11 pt-7">
        <Box.Column className="w-[420px]">
          <Box.Title>Tipo de Linha</Box.Title>
          <div className="mb-9 mt-6 ml-5">
            <SelectBox data={listTypeLineSelect} onItemPressed={handleTypeLineSelected} />
          </div>
        </Box.Column>

        <Box.Column className="w-[480px]">
          <span className="text-orange-500">
            <Box.Title>Anunciante</Box.Title>*
          </span>
          <Dialog.Root open={openDialogAdvertise} onOpenChange={setOpenDialogAdvertise}>
            <Dialog.Trigger>
              <SearchInput value={selectedAdvertiser?.name} />
            </Dialog.Trigger>

            <SelectAdvertiserDialog handleAdvertiserSelected={handleAdvertiserSelected} />
          </Dialog.Root>
        </Box.Column>

        <Box.Column className="w-[480px] mt-10">
          <span className="text-orange-500">
            <Box.Title>Insertion Order</Box.Title>*
          </span>

          <Dialog.Root open={openDialogInsOrder} onOpenChange={setOpenDialogInsOrder}>
            <Dialog.Trigger>
              <SearchInput value={selectedInsOrder?.name} />
            </Dialog.Trigger>

            <SelectInsertionOrderDialog
              handleInsertionOrderSelected={handleInsertionOrderSelected}
            />
          </Dialog.Root>
        </Box.Column>

        <Box.Row className="items-end justify-end w-[480px] mt-10">
          <div className="mr-4">
            <ButtonOrange
              title="Cancelar"
              background={false}
              border={false}
              onClick={() => router.back()}
            />
          </div>
          <ButtonOrange
            title="Próximo"
            enable={!!selectedAdvertiser?.id && !!selectedInsOrder?.id}
            onClick={handleNextPage}
          />
        </Box.Row>
      </Box.Column>
    </div>
  );
}
