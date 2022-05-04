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

export interface IIconExtendedProps {
  size?: string | number;
  viewBox?: string;
  fillColor?: string;
}

interface IIconProps extends IIconExtendedProps {
  name: IconName;
}

interface ILocales {
  [key: string]: (props: IIconExtendedProps) => ReactElement;
}

const icons: ILocales = {
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  AddIcon,
  SearchIcon
};

const Icon = (props: IIconProps): ReactElement =>
  icons[props.name](props) || null ;

export default Icon;
