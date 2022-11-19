import SearchArea from "../SearchArea/SearchArea";
import SearchBar from "../../../components/SearchBar/SearchBar";
import './SearchSection.scss';

export default function SearchSection() {
  return (
    <section className="SearchSection">
      <h2 className="SearchSection__title">Find in records</h2>
      <SearchBar />
      <SearchArea />
    </section>
  );
}
