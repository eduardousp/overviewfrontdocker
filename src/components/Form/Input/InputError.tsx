import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function InputError({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) {
  if (!children) return null;

  return (
    <span className={twMerge('flex justify-end text-red-600', className)} {...rest}>
      {children}
    </span>
  );
}
