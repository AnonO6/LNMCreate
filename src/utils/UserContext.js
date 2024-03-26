import { createContext } from "react";
const UserContext = createContext({
  user: {
    isLoggedIn: false,
    username: null,
    password: null,
  },
});
export default UserContext;
