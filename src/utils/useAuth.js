import userCred from "../data/userCred";
const useAuth = (user, setUser, navigate) => {
  console.log(user);
  const loggedIn = userCred.find(
    (userdata) =>
      user.password == userdata.password && user.username == userdata.username
  );
  if (loggedIn != undefined) {
    setUser({ ...user, isLoggedIn: true });
    navigate("/Profile");
  }
  console.log(user.isLoggedIn);
};
export default useAuth;
