/* eslint-disable react/no-children-prop */
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxDividerProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function BoxDivider({ className, ...rest }: BoxDividerProps) {
  return (
    <div
      className={twMerge('border-b border-purple-900', className)}
      {...rest}
      children={undefined}
    />
  );
}
