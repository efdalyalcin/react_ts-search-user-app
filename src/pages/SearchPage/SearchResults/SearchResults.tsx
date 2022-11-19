import { useEffect, useMemo, useState } from "react";
import { useSearchHandler } from "../../../context/SearchContext";
import DetailedSearchItem from "./DetailedSearchItem/DetailedSearchItem";
import Pagination from "./Pagination/Pagination";
import SearchOrder from "./SearchOrder/SearchOrder";
import "./SearchResults.scss";

export default function SearchResults() {
  const { searchInput, handleSearch } = useSearchHandler();
  const [results, setResults] = useState<string[][]>([]);
  const [pageResults, setPageResults] = useState<string[][]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages: number = useMemo(() => {
    return Math.ceil(results.length / 5);
  }, [results]);

  // new searches always start from page 1
  useEffect(() => {
    if (searchInput.length >= 3) {
      setResults(handleSearch(searchInput));
      setPageResults(handleSearch(searchInput).slice(0, 5));
      setCurrentPage(1);
    } else {
      setResults([]);
      setCurrentPage(1);
    }
  }, [searchInput, handleSearch]);

  // Change in results according to page number
  useEffect(() => {
    const start = (currentPage - 1) * 5;
    const end = 5 + (currentPage - 1) * 5;

    setPageResults(results.slice(start, end));
  }, [currentPage, results]);

  return (
    <>
      {results.length ? (
        <div className="SearchResults" >
          <div className="SearchResults__details">
            {pageResults.map((person) => (
              <DetailedSearchItem
                person={person}
                key={person[0] + Math.random()}
              />
            ))}
          </div>

          <div className="SearchResults__pagination">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
            />
          </div>

          <div className="SearchResults__order">
            <SearchOrder results={results} setResults={setResults} />
          </div>
        </div>
      ) : searchInput.length >= 3 ? (
        <div className="SearchResults__no-results">There are no results to show</div>
      ) : null}
    </>
  );
}
