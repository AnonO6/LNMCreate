import logo from "../assets/LNMIIT-logo.jpeg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logoc" src={logo} alt="LNMCreate logo" />
      </div>
      <NavComponent />
    </div>
  );
};
const NavComponent = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact us</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
