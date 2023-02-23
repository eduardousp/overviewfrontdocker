import React from 'react';

interface Props {
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
  onClick?: () => void;
}

function Arrow({
  width = 20,
  height = 20,
  stroke = '#C6C6C5',
  className,
  onClick,
}: Props) {
  return (
    <button className={className} onClick={onClick} type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 36 36"
      >
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth="3"
          d="M19 2L3 18l16 16"
        />
      </svg>
    </button>
  );
}

export default Arrow;
