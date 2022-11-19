import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import "./AddLinkHeader.scss";

export default function AddLinkHeader() {
  return (
    <header className="AddLinkHeader">
      <Link to="/react_ts-search-user-app/">
        <img src={logo} alt="logo" className="AddLinkHeader__logo" />
      </Link>

      <Link to="/react_ts-search-user-app/search" >
        <div className="AddLinkHeader__back-to">
          <div className="AddLinkHeader__icon"/>
          <p className="AddLinkHeader__text">Return to List Page</p>
        </div>
      </Link>
    </header>
  );
}
