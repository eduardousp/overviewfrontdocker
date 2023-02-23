import * as PrimitiveAccordion from '@radix-ui/react-accordion';
import { CaretUp } from 'phosphor-react';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

function SectionRoot({
  className,
  ...rest
}: PrimitiveAccordion.AccordionSingleProps | PrimitiveAccordion.AccordionMultipleProps) {
  return (
    <PrimitiveAccordion.Root
      className={twMerge('border border-purple-900 max-w-[77rem] w-full', className)}
      {...rest}
    />
  );
}

function SectionTrigger({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <PrimitiveAccordion.Trigger
      className={twMerge(
        'flex gap-2 group text-blue-900 font-medium text-3xl',
        className
      )}
      {...rest}
    >
      <CaretUp
        size={36}
        className="text-orange-600 group-state-open:rotate-180 transition-all"
      />
      {children}
    </PrimitiveAccordion.Trigger>
  );
}

function SectionHeader({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <PrimitiveAccordion.Header
      className={twMerge('bg-[#F9F9F9] p-6 border-purple-900', className)}
      {...rest}
    />
  );
}

function SectionRow({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'border-t border-purple-900 px-8 h-16 flex items-center',
        className
      )}
      {...rest}
    />
  );
}

export const Accordion = {
  ...PrimitiveAccordion,
  Root: SectionRoot,
  Row: SectionRow,
  Header: SectionHeader,
  Trigger: SectionTrigger,
};
