import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex p-4">
      <img src="https://preview.redd.it/my-face-when-i-get-those-errors-v0-xhbs4rvie94c1.png?auto=webp&s=74d1db35b3d35ec904c014ae1ef47ba36089d1dc" />

      <div>
        <h3 class="font-bold text-2xl m-4 font-sans">
          Error status code: {error.status}{" "}
        </h3>
        <h3 class="font-bold text-2xl m-4 font-sans">
          Error message: {error.statusText}
        </h3>
      </div>
    </div>
  );
};
export default Error;
