import { Accordion } from '@components/Form/Section';

import SegmentationValueKey from '@pages/campaigns/lines/create-line/create/components/CreateLinesForm/InventoryAndBrand/components/SegmentationValueKey';
import SegmentsBrandSafety from '@pages/campaigns/lines/create-line/create/components/CreateLinesForm/InventoryAndBrand/components/SegmentsBrandSafety';

import AllowListView from './components/AllowList';
import BlockList from './components/BlockList';
import InventoryType from './components/InventoryType';
import SourceOfSupply from './components/SourceOfSupply';

export function InventoryAndBrandSection() {
  return (
    <Accordion.Item value="inventory">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Inventário e Brand Safety</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit block py-6">
          <SourceOfSupply />
        </Accordion.Row>
        <Accordion.Row className="h-fit block py-6">
          <InventoryType />
        </Accordion.Row>

        <Accordion.Row className="h-fit block py-6">
          <BlockList />
        </Accordion.Row>
        <Accordion.Row className="h-fit block py-6">
          <AllowListView />
        </Accordion.Row>
        <Accordion.Row className="h-fit block py-6">
          <SegmentsBrandSafety />
        </Accordion.Row>
        <Accordion.Row className="h-fit block py-6">
          <SegmentationValueKey />
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
