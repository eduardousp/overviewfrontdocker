import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxColumnProps = HTMLAttributes<HTMLDListElement>;

export function BoxColumn({ className, ...rest }: BoxColumnProps) {
  return <dl className={twMerge('flex flex-col gap-1', className)} {...rest} />;
}
