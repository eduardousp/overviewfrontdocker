import { Accordion } from '@components/Form/Section';

import AudienceLocationTargeting from '@pages/campaigns/lines/create-line/create/components/CreateLinesForm/AudienceLocationTargeting';

import { BasicSettingsSection } from './BasicSettingsSection';
import { Creatives } from './Creatives';
import { InventoryAndBrandSection } from './InventoryAndBrand';
import { OptimizationSection } from './Optimization';
import { QuoteAndScheduling } from './QuoteAndScheduling';
import { ReportingComments } from './ReportingComments';
import { ViewabilityEnvironmentSection } from './ViewabilityEnvironment';

export function CreateLinesForm() {
  return (
    <Accordion.Root type="multiple" className="mx-auto mt-3">
      <BasicSettingsSection />
      <QuoteAndScheduling />
      <OptimizationSection />
      <InventoryAndBrandSection />
      <AudienceLocationTargeting />
      <ViewabilityEnvironmentSection />
      <Creatives />
      <ReportingComments />
    </Accordion.Root>
  );
}
