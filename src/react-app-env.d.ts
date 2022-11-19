/// <reference types="react-scripts" />

interface Data {
  cols: string[];
  data: string[][];
}

interface SearchContextType {
  searchInput: string;
  setSearchInput: (input: string) => void;
  handleSearch: (input: string) => string[][];
}

interface CardData {
  img: { image: string};
  title: string;
  info: string;
}
