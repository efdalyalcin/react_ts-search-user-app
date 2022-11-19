import AddNewRecord from "../../../components/AddNewRecord/AddNewRecord";

import "./Header.scss";
import logo from "../../../assets/img/logo.png";


export default function Header() {
  return (
    <header className="Header">
      <div className="Header__button">
        <AddNewRecord />
      </div>
      <div className="Header__logo">
        <img src={logo} alt="logo" className="Header__img"/>
        {/* <h2 className="Header__title">Search app</h2> */}
      </div>
    </header>
  );
}
