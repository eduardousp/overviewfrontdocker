import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function InputRoot({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge('flex flex-col gap-3 w-full', className)} {...rest} />;
}
