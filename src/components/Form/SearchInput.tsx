import Image from 'next/future/image';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ error, ...rest }, ref) => {
    return (
      <div className="relative flex w-full">
        <input
          className={`
            w-full
            border
            rounded-xl
            font-light
            text-base
            h-10
            px-6
            pr-[4rem]
            placeholder:text-purple-900
            text-purple-900
            border-purple-900
            outline-purple-900
            bg-gray-50
          `}
          placeholder="Pesquisar..."
          ref={ref}
          {...rest}
        />

        <Image
          className="right-6 top-2 absolute pointer-events-none"
          src="/svg/search.svg"
          height={24}
          width={24}
          alt=""
        />
      </div>
    );
  }
);
