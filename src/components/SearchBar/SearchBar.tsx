import { useCallback, useEffect, useState } from "react";
import "./SearchBar.scss";
import { useSearchHandler } from "../../context/SearchContext";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [isSearchable, setIsSearchable] = useState(false);

  // this is a custom hook from the context
  const { searchInput, setSearchInput } = useSearchHandler();

  useEffect(() => {
    if (searchInput.length > 2) {
      setIsSearchable(true);
    } else {
      setIsSearchable(false);
    }
  }, [searchInput]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^\s+/, "");
    setSearchInput(value);
  };

  const handleSearchButton = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!isSearchable) {
        e.preventDefault();
      }
    },
    [isSearchable]
  );

  return (
    <div className="SearchBar">
      <div className="SearchBar__bar">
        <div className="SearchBar__magnifier" />
        <input
          type="text"
          className="SearchBar__input"
          placeholder="Search"
          value={searchInput}
          onChange={handleInput}
        />
      </div>
      <Link
        to="/react_ts-search-user-app/search"
        className={
          "SearchBar__button" +
          (isSearchable ? "" : " SearchBar__button--disabled")
        }
        onClick={handleSearchButton}
      >
        Search
      </Link>
    </div>
  );
}
