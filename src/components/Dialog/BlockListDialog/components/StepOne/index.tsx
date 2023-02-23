import React, { useCallback, useState } from 'react';

import ButtonOrange from '@components/ButtonOrange';
import { StepProps } from '@components/Dialog/BlockListDialog/components/types';
import { Input } from '@components/Form/Input';

const StepOne = ({ form }: StepProps) => {
  const { register } = form;
  const [description, setDescription] = useState<boolean>(false);

  const handleShowDescription = useCallback(() => {
    setDescription((prev) => !prev);
  }, []);

  return (
    <Input.Root className="w-[70%] flex-row ">
      <Input.Label required className="text-blue-900">
        Nome
      </Input.Label>
      <Input.Root>
        <Input.Box className=" max-w-[35rem] h-10 rounded-lg">
          <Input.TextInput className="text-xl" {...register(`name`)} />
        </Input.Box>

        <Input.Root className=" flex flex-row">
          {description && (
            <Input.Box className=" max-w-[35rem] h-10 rounded-lg">
              <Input.TextInput className="text-xl" {...register(`description`)} />
            </Input.Box>
          )}
          <ButtonOrange
            title={description ? '-' : '+ Add Descrição'}
            background={false}
            border={false}
            onClick={handleShowDescription}
          />
        </Input.Root>
      </Input.Root>
    </Input.Root>
  );
};

export default StepOne;
