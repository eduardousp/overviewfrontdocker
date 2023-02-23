import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxValueProps = HTMLAttributes<HTMLElement>;

export function BoxValue({ className, ...rest }: BoxValueProps) {
  return (
    <dl className={twMerge('text-blue-900 font-light text-base', className)} {...rest} />
  );
}
