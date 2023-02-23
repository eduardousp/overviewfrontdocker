/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image';
import React from 'react';

import imageX from '@assets/svg/x.svg';

import { Box } from '@components/Box';
import { HelpTooltip } from '@components/HelpTooltip';
import { SelectBoxItemProps, SelectBoxProps } from '@components/SelectBox/types';

export const BoxItem = ({
  item,
  onItemPressed,
  className,
  classNameLabel,
}: SelectBoxItemProps) => {
  const { title, subTitle, selected, tooltip, clicked = true } = item;
  return (
    <Box.Row className={className || 'justify-start mb-2'}>
      <Box.Column className="pt-1">
        <div
          className={`items-center w-[26px] h-[26px] border-orange-500 border-[1px] ${
            clicked ? 'cursor-pointer' : 'cursor-default'
          } p-[2px]`}
          onClick={() => clicked && onItemPressed(item)}
        >
          {selected && <Image src={imageX} />}
        </div>
      </Box.Column>
      <Box.Column className="justify-start">
        <Box.Label className={classNameLabel || '-ml-2'}>{title}</Box.Label>
        {subTitle && <Box.Value>{subTitle}</Box.Value>}
      </Box.Column>
      {!!tooltip && <HelpTooltip className="text-gray-300">{tooltip}</HelpTooltip>}
    </Box.Row>
  );
};

const SelectGroupBox = ({
  data,
  onItemPressed,
  className,
  classNameBoxItem,
}: SelectBoxProps) => {
  return (
    <div className={className}>
      {data?.map((item) => (
        <BoxItem item={item} onItemPressed={onItemPressed} className={classNameBoxItem} />
      ))}
    </div>
  );
};

export default SelectGroupBox;
