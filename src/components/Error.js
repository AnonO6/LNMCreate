import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2 style={{ color: "black" }}>OOPS! LOOKS LIKE SOME ERROR OCCURED</h2>
      <h3 style={{ color: "black" }}>Error status code: {error.status} </h3>
      <h3 style={{ color: "black" }}>Error message: {error.statusText}</h3>
    </div>
  );
};
export default Error;
