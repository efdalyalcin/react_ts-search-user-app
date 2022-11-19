import SearchHeader from "./SearchHeader/SearchHeader";
import "./SearchPage.scss";
import SearchResults from "./SearchResults/SearchResults";

export default function SearchPage() {
  return (
    <main className="SearchPage">
      <SearchHeader />
      <SearchResults />
    </main>
  );
}
