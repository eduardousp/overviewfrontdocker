import * as Tooltip from '@radix-ui/react-tooltip';
import { Question } from 'phosphor-react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type HelpTooltipProps = PropsWithChildren<{
  className?: string;
}>;

export function HelpTooltip({ children, className }: HelpTooltipProps) {
  return (
    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger className={twMerge('cursor-default', className)}>
        <Question size={18} />
      </Tooltip.Trigger>

      <Tooltip.Portal>
        <Tooltip.Content className="bg-blue-900 w-[12.5rem] py-2 px-5 rounded-xl flex">
          <span className="text-white text-xs font-medium">{children}</span>

          <Tooltip.Arrow className="fill-blue-900 h-3 w-3 mb-1" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
