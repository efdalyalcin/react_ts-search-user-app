import React, { useContext, useState } from 'react';

const SearchContext =
  React.createContext<SearchContextType>({
    searchInput: "",
    setSearchInput: () => {},
    handleSearch: (input: string) => [[]],
  });

type Children = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Children) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (input: string) => {
    const data: Data = JSON.parse(window.localStorage.getItem('data') || '');
    let searchResults: string[][] = [];
  
    const nameResults = data.data.filter(person => (
      person[0].toLowerCase().includes(input.toLowerCase())
    ));
  
    // if it finds in the name just returns this
    searchResults = [...nameResults];
  
    // if there is no item in the name it searches for company
    if (!searchResults.length) {
      const companyResults = data.data.filter(person => (
        person[1].toLowerCase().includes(input.toLowerCase())
      ));
  
      searchResults = [...companyResults];
    }
    
    return searchResults;
  }

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput, handleSearch }} >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchHandler() {
  return useContext(SearchContext);
}
