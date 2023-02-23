import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function InputBox({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'bg-white border-purple-900 focus-within:ring-purple-900 focus-within:ring-1 border rounded-[15px] overflow-hidden w-full min-w-[15rem] h-12 flex items-center px-6 gap-3 transition-all',
        className
      )}
      {...rest}
    />
  );
}
