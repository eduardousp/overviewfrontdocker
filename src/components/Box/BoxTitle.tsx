import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxTitleProps = HTMLAttributes<HTMLElement>;

export function BoxTitle({ className, ...rest }: BoxTitleProps) {
  return (
    <strong
      className={twMerge('text-blue-900 font-medium text-xl', className)}
      {...rest}
    />
  );
}
