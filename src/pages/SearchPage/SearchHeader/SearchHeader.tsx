import AddNewRecord from '../../../components/AddNewRecord/AddNewRecord';
import SearchBar from '../../../components/SearchBar/SearchBar';
import logo from "../../../assets/img/logo.png";
import './SearchHeader.scss';
import { Link } from 'react-router-dom';

export default function SearchHeader() {
  return (
    <header className="SearchHeader">
      <Link to="/react_ts-search-user-app/">
        <img src={logo} alt="logo" className="SearchHeader__logo" />
      </Link>
      <div className="SearchHeader__bar-container">
        <SearchBar />
      </div>
      <div className="SearchHeader__button-container">
        <AddNewRecord />
      </div>
    </header>
  )
}
