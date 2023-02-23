import { Accordion } from '@components/Form/Section';

import { CreativeQualityFormSection } from '@pages/creatives/components/Form/CreativeQualityFormSection';
import { LineAssociationFormSection } from '@pages/creatives/components/Form/LineAssociationFormSection';
import { CreateNativeFormCompositionSection } from '@pages/creatives/native/components/CreateNativeForm/CreateNativeFormCompositionSection';

import { CreateNativeBasicSettingsSection } from './CreateNativeBasicSettingsSection';
import { CreateNativeTrackingSection } from './CreateNativeTrackingSection';

export function CreateNativeForm() {
  return (
    <Accordion.Root type="multiple" className="mx-auto mt-16">
      <CreateNativeBasicSettingsSection />
      <CreateNativeFormCompositionSection />
      <CreateNativeTrackingSection />
      <LineAssociationFormSection />
      <CreativeQualityFormSection />
    </Accordion.Root>
  );
}
