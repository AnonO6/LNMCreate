import { useContext } from "react";
import UserContext from "../utils/UserContext";
import useAuth from "../utils/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="login">
      <label>
        USERNAME:
        <input
          defaultValue={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </label>
      <label>
        PASSWORD:
        <input
          defaultValue={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <button onClick={() => useAuth(user, setUser, navigate)}>LOGIN</button>
    </div>
  );
};
export default Login;
