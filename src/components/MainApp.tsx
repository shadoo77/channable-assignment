import React from 'react';
import { useFilterAndSort } from 'src/hooks/useFilterAndSort';
import { ICompany } from 'src/contexts/companiesContext';
import SearchBox from './SearchBox';
import AddCompany from './AddCompany';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

export default function MainApp() {
  const { sortedAndFilteredComapnies } = useFilterAndSort();

  return (
    <div className="application">
      <div className="input-area">
        <SearchBox />
        <AddCompany />
      </div>

      <div className="list">
        <ListHeader />

        {sortedAndFilteredComapnies?.length ? (
          sortedAndFilteredComapnies.map((company: ICompany) => (
            <ListItem company={company} key={company.id} />
          ))
        ) : (
          <div className="no-results">No results found!</div>
        )}
      </div>
    </div>
  );
}
