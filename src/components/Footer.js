import { useContext } from "react";
import DevContext from "../utils/DevContext";
const Footer = () => {
  const devData = useContext(DevContext);
  return (
    <div class="flex justify-between p-4 font-bold">
      <h3>Made with ❤️ by {devData.devName}</h3>
      <h3>
        <a href={devData.devId}>{devData.devId}</a>
      </h3>
    </div>
  );
};
export default Footer;
