import { useContext } from "react";
import UserContext from "../utils/UserContext";
import useAuth from "../utils/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div class="p-4 m-4 flex flex-wrap justify-evenly w-2/3">
      <label class="m-3">
        USERNAME:
        <input
          class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          defaultValue={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </label>
      <label class="m-3">
        PASSWORD:
        <input
          class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-1.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          defaultValue={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <button
        class="relative top-11 w-32 h-12 rounded-xl bg-teal-500 px-6 font-sans text-medium font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => useAuth(user, setUser, navigate)}
      >
        LOGIN
      </button>
    </div>
  );
};
export default Login;
