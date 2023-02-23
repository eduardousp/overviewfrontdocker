import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        h-11
        px-4
        flex
        items-center
        justify-center
        bg-orange-600
        rounded-md
        text-2xl
        text-white
        font-medium
        disabled:opacity-50
        disabled:hover:bg-orange-600
        hover:bg-blue-900
        transition-all
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
