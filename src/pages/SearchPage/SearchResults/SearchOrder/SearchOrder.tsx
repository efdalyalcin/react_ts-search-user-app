import { useCallback, useState } from "react";
import "./SearchOrder.scss";

type Props = {
  results: string[][];
  setResults: React.Dispatch<React.SetStateAction<string[][]>>;
};

export default function SearchOrder({ results, setResults }: Props) {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const orderByName = useCallback(() => {
    const orderedResults = [...results];
    orderedResults.sort((nameA, nameB) => nameA[0].localeCompare(nameB[0]));
    setResults([...orderedResults]);
  }, [results, setResults]);

  const orderByNameDesc = useCallback(() => {
    const orderedResults = [...results];
    orderedResults.sort((nameA, nameB) => nameB[0].localeCompare(nameA[0]));
    setResults([...orderedResults]);
  }, [results, setResults]);

  const orderByYear = useCallback(() => {
    const orderedResults = [...results];
    orderedResults.sort((yearA, yearB) => {
      const dateA = yearA[3].split("/")[2];
      const dateB = yearB[3].split("/")[2];

      return Number(dateA) - Number(dateB);
    });
    setResults([...orderedResults]);
  }, [results, setResults]);

  const orderByYearDesc = useCallback(() => {
    const orderedResults = [...results];
    orderedResults.sort((yearA, yearB) => {
      const dateA = yearA[3].split("/")[2];
      const dateB = yearB[3].split("/")[2];

      return Number(dateB) - Number(dateA);
    });
    setResults([...orderedResults]);
  }, [results, setResults]);

  return (
    <div className="SearchOrder">
      <button
        className="SearchOrder__button"
        onClick={() => setIsOrderOpen(!isOrderOpen)}
      >
        <div className="SearchOrder__icon" />
        Order By
      </button>

      {isOrderOpen && (
        <div className="SearchOrder__orders">
          <button 
            className="SearchOrder__order-buttons" 
            onClick={orderByName}
          >
            Name ascending
          </button>
          <button
            className="SearchOrder__order-buttons"
            onClick={orderByNameDesc}
          >
            Name descending
          </button>
          <button 
            className="SearchOrder__order-buttons"
            onClick={orderByYear}
          >
            Year ascending
          </button>
          <button
            className="SearchOrder__order-buttons"
            onClick={orderByYearDesc}
          >
            Year descending
          </button>
        </div>
      )}
    </div>
  );
}
