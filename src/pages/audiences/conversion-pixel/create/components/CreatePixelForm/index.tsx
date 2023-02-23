import { Accordion } from '@components/Form/Section';

import { PixelDetailsFormSection } from './PixelDetailsFormSection';
import { PixelReserveFormSection } from './PixelReserveFormSection';

export function CreatePixelForm() {
  return (
    <Accordion.Root type="multiple" className="mx-auto mt-16">
      <PixelDetailsFormSection />
      <PixelReserveFormSection />
    </Accordion.Root>
  );
}
