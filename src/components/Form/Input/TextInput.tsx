import React, { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, name, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        id={name}
        name={name}
        placeholder="Digite aqui..."
        className={twMerge(
          'placeholder:text-purple-900 text-purple-900 outline-none w-full h-full font-light text-2xl bg-transparent disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      />
    );
  }
);
