import { Accordion } from '@components/Form/Section';

import { CreativeQualityFormSection } from '@pages/creatives/components/Form/CreativeQualityFormSection';
import { LineAssociationFormSection } from '@pages/creatives/components/Form/LineAssociationFormSection';
import { TrackingFormSection } from '@pages/creatives/components/Form/TrackingFormSection';

import { CreateHtmlBasicSettingsSection } from './CreateHtmlBasicSettingsSection';

export function CreateHtmlForm() {
  return (
    <Accordion.Root type="multiple" className="mx-auto mt-16">
      <CreateHtmlBasicSettingsSection />
      <TrackingFormSection />
      <LineAssociationFormSection />
      <CreativeQualityFormSection />
    </Accordion.Root>
  );
}
