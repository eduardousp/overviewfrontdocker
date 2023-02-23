import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function InputRequired({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={twMerge('text-red-600 select-none', className)} {...rest} />;
}
