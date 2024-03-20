import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>OOPS! LOOKS LIKE SOME ERROR OCCURED</h2>
      <h3>Error status code: {error.status} </h3>
      <h3>Error message: {error.statusText}</h3>
    </div>
  );
};
export default Error;
