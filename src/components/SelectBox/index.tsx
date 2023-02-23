/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

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
      <Box.Column className=" pt-1">
        <div
          className={`items-center w-[15px] h-[15px] border-orange-500 rounded-full border-[1px] ${
            clicked ? 'cursor-pointer' : 'cursor-default'
          } p-[2px]`}
          onClick={() => clicked && onItemPressed(item)}
        >
          {selected && <div className="w-full h-full bg-orange-500 rounded-full" />}
        </div>
      </Box.Column>
      <Box.Column className="justify-start">
        <Box.Label className={classNameLabel}>{title}</Box.Label>
        {subTitle && <Box.Value>{subTitle}</Box.Value>}
      </Box.Column>
      {!!tooltip && <HelpTooltip className="text-gray-300">{tooltip}</HelpTooltip>}
    </Box.Row>
  );
};

const SelectBox = ({
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

export default SelectBox;
