import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TagRootProps = HTMLAttributes<HTMLDivElement>;

function TagRoot({ className, ...rest }: TagRootProps) {
  return <div className={twMerge('flex gap-2 items-center', className)} {...rest} />;
}

type TagLabelProps = HTMLAttributes<HTMLSpanElement>;

function TagLabel({ className, ...rest }: TagLabelProps) {
  return (
    <span
      className={twMerge(
        'bg-gray-300 w-[3rem] h-6 flex items-center justify-center font-semibold text-blue-900 rounded-[2px] rounded-tl-[10px] rounded-br-[20px]',
        className
      )}
      {...rest}
    />
  );
}

type TagTitleProps = HTMLAttributes<HTMLSpanElement>;

function TagTitle({ className, ...rest }: TagTitleProps) {
  return <span className={twMerge('font-normal text-blue-900', className)} {...rest} />;
}

export const Tag = {
  Root: TagRoot,
  Label: TagLabel,
  Title: TagTitle,
};
