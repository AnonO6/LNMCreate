import logoDark from "../assets/lnmcreateLogoWhite.png";
import logoLight from "../assets/lnmcreateLogoBlack.png";
import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useContext(UserContext);
  const profile = user.isLoggedIn ? "Profile" : "Login";
  const projects = useSelector((store) => store.appliedProject.projects);
  return (
    <div class="flex flex-wrap font-bold font-sans text-2xl justify-between mt-3 mb-3 p-3">
      <div>
        <img
          class="max-w-72 relative bottom-9 right-10 -m-10"
          src={logoLight}
          alt="LNMCreate logo"
        />
      </div>
      <div class="flex justify-between">
        <div class="mr-16">
          <h2>APPLIED PROJECTS: {projects.length}</h2>
        </div>
        <div>
          <Link class="m-4" to="/">
            Home
          </Link>
          <Link class="m-4" to="/Culture">
            Culture
          </Link>
          <Link class="m-4" to={"/" + profile}>
            {profile}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
