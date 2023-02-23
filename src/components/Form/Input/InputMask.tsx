import React from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import { twMerge } from 'tailwind-merge';

export function InputMask({ className, ...rest }: PatternFormatProps) {
  return (
    <PatternFormat
      mask="_"
      valueIsNumericString
      placeholder="Digite aqui..."
      className={twMerge(
        'placeholder:text-purple-900 text-purple-900 outline-none w-full font-light text-2xl bg-transparent disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    />
  );
}
