import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxRootProps = HTMLAttributes<HTMLDivElement>;

export function BoxRoot({ className, ...rest }: BoxRootProps) {
  return (
    <div
      className={twMerge(
        'bg-white px-4 py-2 rounded flex flex-col gap-4 h-fit',
        className
      )}
      {...rest}
    />
  );
}
