import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

type RadioItemProps = {
  label: string;
  value: string;
  className?: string;
};

export function RadioItem({ label, value, className }: RadioItemProps) {
  return (
    <label
      className={twMerge(
        'text-purple-900 text-xl flex items-center gap-3 cursor-pointer',
        className
      )}
    >
      <RadioGroup.Item
        value={value}
        className="h-6 w-6 border-2 p-1 border-orange-600 rounded-full"
      >
        <RadioGroup.Indicator className="bg-orange-600 h-full w-full block rounded-full state-checked:animate-scale-in state-unchecked:animate-scale-out" />
      </RadioGroup.Item>

      {label}
    </label>
  );
}
