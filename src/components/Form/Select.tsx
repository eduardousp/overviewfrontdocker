import * as SelectPrimitive from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Usage Example: https://www.radix-ui.com/docs/primitives/components/select#anatomy
 */
export const Select: typeof SelectPrimitive = {
  ...SelectPrimitive,
  Trigger: React.forwardRef(({ className, ...rest }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={twMerge(
        'bg-orange-600 text-white font-medium px-4 h-7 rounded flex items-center gap-4 w-fit whitespace-nowrap transition-colors',
        className
      )}
      {...rest}
    />
  )),
  Icon: React.forwardRef(({ children, ...rest }, ref) => (
    <SelectPrimitive.Icon ref={ref} {...rest}>
      {children || <CaretDown weight="bold" size={24} />}
    </SelectPrimitive.Icon>
  )),
  Content: React.forwardRef(({ className, ...rest }, ref) => (
    <SelectPrimitive.Content
      className={twMerge('bg-white', className)}
      ref={ref}
      {...rest}
    />
  )),
  Item: React.forwardRef(({ className, ...rest }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={twMerge(
        'h-10 px-6 flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white hover:font-medium transition-colors state-checked:bg-orange-600 state-checked:text-white state-checked:font-medium',
        className
      )}
      {...rest}
    />
  )),
};

type SelectRootProps = SelectPrimitive.SelectProps & {
  placeholder?: string;
  className?: string;
};

/**
 * Usage example:
 * ```jsx
 * <SelectRoot placeholder="">
 *   <SelectItem value="">Some Text</SelectItem>
 * </SelectRoot>
 * ```
 */
export function SelectRoot({
  children,
  placeholder,
  className,
  ...rest
}: SelectRootProps) {
  return (
    <Select.Root {...rest}>
      <Select.Trigger className={className}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export function SelectItem({ children, ...rest }: SelectPrimitive.SelectItemProps) {
  return (
    <Select.Item {...rest}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
}
