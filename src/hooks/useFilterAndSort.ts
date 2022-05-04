import { useState, useEffect, useCallback } from 'react';
import { useCompanies, SortDirection, ICompany } from 'src/contexts/companiesContext';

export function useFilterAndSort() {
  const { companies, searchTerm, sortDirection } = useCompanies();
  const [filteredComapnies, setFilteredComapnies] = useState<ICompany[]>(companies);
  const [sortedAndFilteredComapnies, setSortedAndFilteredComapnies] = useState<ICompany[]>(
    []
  );

  // Filter by searchTerm
  useEffect(() => {
    if (searchTerm) {
      const res = companies.filter((company: ICompany) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredComapnies(res);
    } else {
      setFilteredComapnies(companies);
    }
  }, [searchTerm, companies]);

  const sortCompanies = useCallback(() => {
    let result: ICompany[] = [...filteredComapnies];

    if (sortDirection === SortDirection.ASC) {
      result = result.sort((a: ICompany, b: ICompany) => a.name.localeCompare(b.name));
    }

    if (sortDirection === SortDirection.DESC) {
      result = result.sort((a: ICompany, b: ICompany) => b.name.localeCompare(a.name));
    }

    setSortedAndFilteredComapnies(result);
  }, [filteredComapnies, sortDirection]);

  // Sort
  useEffect(() => {
    sortCompanies();
  }, [sortCompanies]);

  return { sortedAndFilteredComapnies };
}

export default {};
