import React from 'react';
import { useCompanies, SortDirection } from 'src/contexts/companiesContext';
import { useFilterAndSort } from 'src/hooks/useFilterAndSort';
import Icon, { IconName } from 'src/Icon';

export default function MainApp() {
  const {
    companies,
    text,
    searchTerm,
    sortDirection,
    stateUpdater
  } = useCompanies();
  const { sortedAndFilteredComapnies } = useFilterAndSort();

  const handleChange = (e: any) => {
    stateUpdater({ [e.target.name]: e.target.value });
  };

  const handleAddNew = (e: any) => {
    const ids: any[] = companies.map((company) => company.id);
    const lastId = Math.max(...ids);
    const newCompany = {
      id: lastId + 1,
      name: text
    };
    stateUpdater({ companies: [...companies, newCompany], text: '' });
  };

  const handleDeleteItem = (id: number) => {
    const newItems = [...companies];
    const targetIndex = companies.findIndex((el) => el.id === id);
    newItems.splice(targetIndex, 1);
    stateUpdater({ companies: newItems });
  };

  return (
    <div className="container">
      <div className="input-area">
        <div>
          <input
            type="text"
            name="searchTerm"
            placeholder="Search ..."
            onChange={handleChange}
            value={searchTerm}
          />
        </div>

        <div className="input-area-add">
          <div>
            <input
              type="text"
              name="text"
              onChange={handleChange}
              value={text}
            />
          </div>
          <div className="btn btn--primary margin-left" onClick={handleAddNew}>
            <Icon name={IconName.AddIcon} />
          </div>
        </div>
      </div>

      <div className="list">
        <div className="list-header">
          <div>Company's name</div>
          <div className="list-header-sort margin-left">
            <span
              className={`btn btn--${
                sortDirection === SortDirection.ASC ? 'secondary' : 'primary'
              }`}
              onClick={() =>
                stateUpdater({
                  sortDirection:
                    sortDirection === SortDirection.ASC
                      ? SortDirection.NONE
                      : SortDirection.ASC
                })
              }
            >
              <Icon name={IconName.ArrowUpIcon} />
            </span>
            <span
              className={`btn btn--${
                sortDirection === SortDirection.DESC ? 'secondary' : 'primary'
              }`}
              onClick={() =>
                stateUpdater({
                  sortDirection:
                    sortDirection === SortDirection.DESC
                      ? SortDirection.NONE
                      : SortDirection.DESC
                })
              }
            >
              <Icon name={IconName.ArrowDownIcon} />
            </span>
          </div>
        </div>

        {sortedAndFilteredComapnies?.length ? (
          sortedAndFilteredComapnies.map((company: any) => (
            <div className="list-item" key={company.id}>
              <div className="list-item-text">
                <span>{company.name}</span>
              </div>

              <div className="list-item-icon">
                <span
                  className="btn btn--primary"
                  onClick={() => handleDeleteItem(company.id)}
                >
                  <Icon name={IconName.TrashIcon} />
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No results found!</div>
        )}
      </div>
    </div>
  );
}
