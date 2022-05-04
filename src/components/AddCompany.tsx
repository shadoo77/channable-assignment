import React, { ChangeEvent } from 'react';
import { useCompanies } from 'src/contexts/companiesContext';
import Icon, { IconName } from 'src/Icon';

function AddCompany() {
  const {
    companies,
    text,
    stateUpdater
  } = useCompanies();

  const handleChange = (e: ChangeEvent<{ value: string; name: string }>) => {
    stateUpdater({ [e.target.name]: e.target.value });
  };

  const handleAddNew = () => {
    // Prevent adding empty text
    if (!text) {
      return;
    }

    const ids: number[] = companies.map((company) => company.id);
    const lastId = Math.max(...ids);
    const newCompany = {
      id: lastId + 1,
      name: text
    };
    stateUpdater({ companies: [...companies, newCompany], text: '' });
  };

  return (
    <div className="input-area-add">
      <div className="text-input">
        <input
          type="text"
          name="text"
          placeholder="Add new .."
          onChange={handleChange}
          value={text}
        />
      </div>
      <div className="btn btn--primary margin-left" onClick={handleAddNew}>
        <Icon name={IconName.AddIcon} size="30" />
      </div>
    </div>
  );
}

export default AddCompany;
