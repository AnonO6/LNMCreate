import logo from "../utils/LNMIIT-logo.jpeg";
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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Header;
