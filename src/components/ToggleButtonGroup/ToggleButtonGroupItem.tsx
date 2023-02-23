import { HTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ToggleButtonGroupItemProps = HTMLAttributes<HTMLButtonElement>;

export function ToggleButtonGroupItem({
  className,
  children,
  ...rest
}: ToggleButtonGroupItemProps) {
  const [toggled, setToggled] = useState(false);

  return (
    <button
      type="button"
      className={twMerge(
        toggled
          ? 'flex items-center justify-center w-7 h-7 border border-white text-xl text-white bg-orange-600 font-medium'
          : 'flex items-center justify-center w-7 h-7 border border-orange-500 text-xl text-blue-900 font-medium',
        className
      )}
      onClick={() => {
        setToggled(!toggled);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
