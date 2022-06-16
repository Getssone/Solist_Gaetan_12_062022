import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <Link to="/">
          <img src={logo} alt="logo de SportSee" />
        </Link>
      </div>
      <HeaderNav />
    </div>
  );
}

export default Header;
