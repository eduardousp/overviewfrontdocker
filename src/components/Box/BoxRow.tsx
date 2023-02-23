import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxRowProps = HTMLAttributes<HTMLDListElement>;

export function BoxRow({ className, ...rest }: BoxRowProps) {
  return <dl className={twMerge('flex justify-between gap-4', className)} {...rest} />;
}
