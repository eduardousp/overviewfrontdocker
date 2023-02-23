import { Accordion } from '@components/Form/Section';

import { BasicSettingsSection } from './BasicSettingsSection';
import { CommentsSection } from './CommentsSection';
import { FrequencyRecencySection } from './FrequencyRecencySection';
import { SupplyStrategySection } from './SupplyStrategySection';

export function CreateInsertionOrderForm() {
  return (
    <Accordion.Root type="multiple" className="mx-auto mt-3">
      <BasicSettingsSection />
      <SupplyStrategySection />
      <FrequencyRecencySection />
      <CommentsSection />
    </Accordion.Root>
  );
}
