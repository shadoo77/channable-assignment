import React from 'react';
import { IIconExtendedProps } from '.';

const AddIcon = ({
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
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
      clipRule="evenodd"
    />
  </svg>
);

export default AddIcon;
