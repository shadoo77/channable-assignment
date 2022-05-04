import React from 'react';
import MainApp from 'src/components/MainApp';
import { CompaniesProvider } from 'src/contexts/companiesContext';
import './App.scss';

export default function App() {
  return (
    <CompaniesProvider><MainApp /></CompaniesProvider>
  );
}
