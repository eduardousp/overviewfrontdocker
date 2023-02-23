import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { selected: boolean };

export function MenuButton({ children, className, selected, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={
        selected
          ? `flex items-start pl-4 py-1 border-t border-orange-500 border-l-8 pl-2 font-medium ${className}`
          : `flex items-start pl-4 py-1 border-t border-orange-500 ${className}`
      }
      {...rest}
    >
      {children}
    </button>
  );
}
