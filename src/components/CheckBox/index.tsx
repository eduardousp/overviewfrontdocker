/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useCallback, useEffect, useState } from 'react';

interface CheckBoxProps {
  value: boolean;
  handleClick: () => void;
}

const CheckBox = ({ value = false, handleClick }: CheckBoxProps) => {
  const [currentValue, setCurrentValue] = useState<boolean>(false);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const onClick = useCallback(() => {
    setCurrentValue((prev) => !prev);
    handleClick();
  }, [handleClick]);

  return (
    <div
      className="w-4 h-4 border-[1px] rounded-full border-orange-500 p-[2px] cursor-pointer"
      onClick={onClick}
    >
      {currentValue && <div className="w-full h-full bg-orange-600 rounded-full" />}
    </div>
  );
};

export default memo(CheckBox);
