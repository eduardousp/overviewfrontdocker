import { Accordion } from '@components/Form/Section';

import { CreativeQualityFormSection } from '@pages/creatives/components/Form/CreativeQualityFormSection';
import { LineAssociationFormSection } from '@pages/creatives/components/Form/LineAssociationFormSection';

import { CompanionsSection } from './CompanionsSection';
import { CreateVideoBasicSettingsSection } from './CreateVideoBasicSettingsSection';
import { CreateVideoTrackingSection } from './CreateVideoTrackingSection';
import { VASTResourcesSection } from './VASTResourcesSection';

export function CreateVideoForm() {
  return (
    <Accordion.Root type="multiple" className="mx-auto mt-16">
      <CreateVideoBasicSettingsSection />
      <VASTResourcesSection />
      <CompanionsSection />
      <CreateVideoTrackingSection />
      <LineAssociationFormSection />
      <CreativeQualityFormSection />
    </Accordion.Root>
  );
}
