import { LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { Input } from '@components/Form/Input';

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export function InputLabel({
  className,
  required = false,
  children,
  ...rest
}: InputLabelProps) {
  return (
    <label
      className={twMerge('text-purple-900 font-medium text-2xl block', className)}
      {...rest}
    >
      {children}
      {required && <Input.Required>*</Input.Required>}
    </label>
  );
}
