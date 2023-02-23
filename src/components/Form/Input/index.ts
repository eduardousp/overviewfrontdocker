import { InputBox } from '@components/Form/Input/InputBox';
import { InputError } from '@components/Form/Input/InputError';
import { InputLabel } from '@components/Form/Input/InputLabel';
import { InputMask } from '@components/Form/Input/InputMask';
import { InputRequired } from '@components/Form/Input/InputRequired';
import { InputRoot } from '@components/Form/Input/InputRoot';
import { TextInput } from '@components/Form/Input/TextInput';

/**
 * Usage example:
 * ```jsx
 * <Input.Root>
 *   <Input.Label required />
 *   <Input.Box>
 *     <Input.TextInput />
 *   </Input.Box>
 *   <Input.Error />
 * </Input.Root>
 * ```
 */
export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Required: InputRequired,
  Box: InputBox,
  Error: InputError,
  TextInput,
  Mask: InputMask,
};
