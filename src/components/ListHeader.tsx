import React from 'react';
import { useCompanies, SortDirection } from 'src/contexts/companiesContext';
import Icon, { IconName } from 'src/Icon';

function ListHeader() {
  const {
    sortDirection,
    stateUpdater
  } = useCompanies();

  return (
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

      <div className="list-header-detail margin-left">
        {!!sortDirection && `Sorted ${sortDirection}`}
      </div>
    </div>
  );
}

export default ListHeader;
