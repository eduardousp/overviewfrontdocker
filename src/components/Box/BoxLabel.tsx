import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxLabelProps = HTMLAttributes<HTMLElement>;

export function BoxLabel({ className, ...rest }: BoxLabelProps) {
  return (
    <dt className={twMerge('text-blue-900 font-medium text-base', className)} {...rest} />
  );
}
