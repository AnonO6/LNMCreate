import logo from "../assets/LNMIIT-logo.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
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
  const { user } = useContext(UserContext);
  const profile = user.isLoggedIn ? "Profile" : "Login";
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Culture">Culture</Link>
        </li>
        <li>
          <Link to={"/" + profile}>{profile}</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
