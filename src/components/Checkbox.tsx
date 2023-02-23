import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { X } from 'phosphor-react';
import { twMerge } from 'tailwind-merge';

type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  indicatorSize?: number;
};

export function Checkbox({ className, indicatorSize, ...rest }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={twMerge('h-6 w-6 border border-orange-600', className)}
      {...rest}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-orange-600 state-checked:animate-scale-in state-unchecked:animate-scale-out">
        <X weight="bold" size={indicatorSize || 18} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
