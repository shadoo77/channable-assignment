import React, { ChangeEvent } from 'react';
import { useCompanies } from 'src/contexts/companiesContext';
import Icon, { IconName } from 'src/Icon';

function SearchBox() {
  const {
    searchTerm,
    stateUpdater
  } = useCompanies();

  const handleChange = (e: ChangeEvent<{ value: string; name: string }>) => {
    stateUpdater({ [e.target.name]: e.target.value });
  };

  return (
    <div className='search'>
      <div className="search-icon btn btn--primary">
        <Icon name={IconName.SearchIcon} />
      </div>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search ..."
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
}

export default SearchBox;
