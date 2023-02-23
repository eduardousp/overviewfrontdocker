import * as SwitchPrimitive from '@radix-ui/react-switch';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Switch: typeof SwitchPrimitive = {
  ...SwitchPrimitive,
  Root: React.forwardRef(({ className, ...rest }, ref) => (
    <SwitchPrimitive.Root
      {...rest}
      ref={ref}
      className={twMerge('border-orange-600 border w-16 h-8 px-2 rounded-2xl', className)}
    />
  )),
  Thumb: React.forwardRef(({ className, ...rest }, ref) => (
    <SwitchPrimitive.Thumb
      {...rest}
      ref={ref}
      className={twMerge(
        'w-6 aspect-square border border-orange-600 block rounded-full state-checked:bg-orange-600 state-checked:translate-x-full transition-all',
        className
      )}
    />
  )),
};
