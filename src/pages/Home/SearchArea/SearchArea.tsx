import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchItem from "./SearchItem/SearchItem";
import { useSearchHandler } from "../../../context/SearchContext";
import "./SearchArea.scss";

export default function SearchArea() {
  const [searchResults, setSearchResults] = useState<string[][]>([]);
  const [isSearchAreaVisible, setIsSearchAreaVisible] = useState(false);
  
  const { searchInput, handleSearch} = useSearchHandler();

  useEffect(
    () => {
      if (searchInput.length >= 3) {
        setSearchResults(() => handleSearch(searchInput));
        setIsSearchAreaVisible(true);
      } else {
        setSearchResults([]);
        setIsSearchAreaVisible(false);
      }
    },
    [searchInput, handleSearch],
  );

  return (
    <div
      className={
        "SearchArea" + (isSearchAreaVisible ? "" : " SearchArea--disabled")
      }
    >
      {searchResults.length === 0 ? (
        <div className="SearchArea__noMatch">There is no match</div>
      ) : (
        searchResults.map((person, i) =>
          i < 3 ? (
            <SearchItem person={person} key={person[0] + Math.random()} />
          ) : null
        )
      )}

      {searchResults.length < 3 ? null : (
        <Link to="/react_ts-search-user-app/search" className="SearchArea__link">
          <p>Show more...</p>
        </Link>
      )}
    </div>
  );
}
