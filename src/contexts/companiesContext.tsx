import React, { createContext, useState, useCallback } from 'react';
import Data from '../jsonData.json';

export enum SortDirection {
  ASC = 'Ascending',
  DESC = 'Descending',
  NONE = ''
}

export interface ICompany {
  id: number;
  name: string;
}

export interface IState {
  companies: ICompany[];
  text: string;
  searchTerm: string;
  sortDirection: SortDirection;
}

interface ICompaniesContext extends IState {
  stateUpdater: React.Dispatch<Partial<IState>>;
  resetState: React.DispatchWithoutAction;
}

const initialState: IState = {
  companies: Data.companies || [],
  text: '',
  searchTerm: '',
  sortDirection: SortDirection.NONE
};

const CompaniesContext = createContext<ICompaniesContext | undefined>(
  undefined
);

interface IProviderProps {
  children: React.ReactElement;
}

export function CompaniesProvider({ children }: IProviderProps) {
  const [state, setState] = useState(initialState);

  const stateUpdater = useCallback((obj: Partial<IState>) => {
    setState((prevState: IState) => ({
      ...prevState,
      ...obj
    }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return (
    <CompaniesContext.Provider
      value={{
        ...state,
        stateUpdater,
        resetState
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}

export function useCompanies() {
  const context = React.useContext(CompaniesContext);
  if (context === undefined) {
    throw new Error('useCompanies must be used within a CompaniesProvider');
  }
  return context;
}
