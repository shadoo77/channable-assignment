import { ReactElement } from 'react';
import TrashIcon from './TrashIcon';
import ArrowUpIcon from './ArrowUpIcon';
import ArrowDownIcon from './ArrowDownIcon';
import AddIcon from './AddIcon';
import SearchIcon from './SearchIcon';

export enum IconName {
  'TrashIcon' = 'TrashIcon',
  'ArrowUpIcon' = 'ArrowUpIcon',
  'ArrowDownIcon' = 'ArrowDownIcon',
  'AddIcon' = 'AddIcon',
  'SearchIcon' = 'SearchIcon'
}

// These aren't required
export interface IIconExtendedProps {
  size?: string | number;
  viewBox?: string;
  fillColor?: string;
}

// This is required
interface IIconProps extends IIconExtendedProps {
  name: IconName;
}

interface IIcons {
  [key: string]: (props: IIconExtendedProps) => ReactElement;
}

const icons: IIcons = {
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  AddIcon,
  SearchIcon
};

const Icon = (props: IIconProps): ReactElement =>
  icons[props.name](props) || null ;

export default Icon;
