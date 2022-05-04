import React from 'react';
import { ICompany, useCompanies } from 'src/contexts/companiesContext';
import Icon, { IconName } from 'src/Icon';

interface IProps {
  company: ICompany;
}

function ListItem({ company }: IProps) {
  const {
    companies,
    stateUpdater
  } = useCompanies();

  const handleDeleteItem = (id: number) => {
    const newItems = [...companies];
    const targetIndex = companies.findIndex((el) => el.id.toString() === id.toString());
    newItems.splice(targetIndex, 1);
    stateUpdater({ companies: newItems });
  };

  return (
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
  );
}

export default ListItem;
