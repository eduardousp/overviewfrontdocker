import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';

interface CustomInputProps {
  label: string;
  value: string;
  setValue: (text: string) => void;
  className?: string;
  maxLength?: number;
  labelRight?: boolean;
}

function CustomInput({
  label,
  value,
  setValue,
  className = 'w-full',
  maxLength,
  labelRight,
}: CustomInputProps) {
  return (
    <div className=" flex items-center justify-start flex-1 h-8">
      {!labelRight && <Box.Label className="w-auto mr-3">{label}</Box.Label>}

      <div className={className}>
        <Input.TextInput
          value={value}
          maxLength={maxLength}
          onChange={(e) => setValue(e.target.value)}
          className="border-t-orange-500 border-r-orange-500 border-[1px] h-full rounded-sm border-l-blue-900 border-b-blue-900 py-1 px-2 w-full text-base"
          placeholder=""
        />
      </div>

      {labelRight && <Box.Label className="w-auto">{label}</Box.Label>}
    </div>
  );
}

export default CustomInput;
