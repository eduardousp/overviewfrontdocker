import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ToggleButtonGroupRootProps = HTMLAttributes<HTMLDivElement>;

export function ToggleButtonGroupRoot({
  className,
  ...rest
}: ToggleButtonGroupRootProps) {
  return <div className={twMerge('flex flex-row', className)} {...rest} />;
}
