import React from 'react';
import { IIconExtendedProps } from '.';

const ArrowDownIcon = ({
  size = '22',
  viewBox = '0 0 22 22',
  fillColor = '#000'
}: IIconExtendedProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    className="h-5 w-5"
    width={size}
    height={size}
    viewBox={viewBox}
    fill={fillColor}
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowDownIcon;
