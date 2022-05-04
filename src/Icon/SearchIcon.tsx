import React from 'react';
import { IIconExtendedProps } from '.';

const SearchIcon = ({
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
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

export default SearchIcon;
