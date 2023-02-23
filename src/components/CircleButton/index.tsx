/* eslint-disable no-unused-expressions */
import Image from 'next/image';
import React, { ButtonHTMLAttributes, useState } from 'react';

import circle_invalid_on from '@assets/svg/circle_invalid_on.svg';
import circle_invalid from '@assets/svg/circle_invalid.svg';
import circle_valid_on from '@assets/svg/circle_valid_on.svg';
import circle_valid from '@assets/svg/circle_valid.svg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  valid: boolean;
  onClick?: () => void;
};

const CircleButton = ({ valid, onClick, ...rest }: ButtonProps) => {
  const [clicked, setClicked] = useState(false);

  return valid ? (
    <button
      type="button"
      className="mx-1 z-0"
      onClick={() => {
        setClicked(!clicked);
        onClick;
      }}
      {...rest}
    >
      <Image src={clicked ? circle_valid_on : circle_valid} height={16} />
    </button>
  ) : (
    <button
      type="button"
      className="mx-1 z-0"
      onClick={() => {
        setClicked(!clicked);
        onClick;
      }}
      {...rest}
    >
      <Image src={clicked ? circle_invalid_on : circle_invalid} height={16} />
    </button>
  );
};

export default CircleButton;
