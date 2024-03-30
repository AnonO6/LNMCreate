// const About = () => {
//   return (
//     <div>
//       <h2 style={{ color: "black" }}>
//         LETS COLLAB TOGETHER AND BUILD COOL PROJECTS!!
//       </h2>
//     </div>
//   );
// };
// export default About;
import React from "react";
import UserContext from "../utils/UserContext";
import { Navigate } from "react-router-dom";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage:
        "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png",
    };
  }
  async componentDidMount() {
    const fetchData = await fetch("https://dog.ceo/api/breeds/image/random");
    const url = await fetchData.json();
    this.setState({ profileImage: url.message });
  }
  render() {
    return (
      <UserContext.Consumer>
        {(value) => {
          if (!value.user.isLoggedIn) {
            return <Navigate to="/Login" />;
          } else {
            return (
              <div class="flex flex-wrap rounded-xl justify-between m-5 bg-teal-300 ">
                <div class="p-3">
                  <h1 class="text-4xl text-bold font-sans">PROFILE</h1>
                  <h2>Welcome, {value.user.username}!</h2>
                </div>

                <img
                  class="w-96 h-96 border-solid border-4 border-red-950 rounded-xl"
                  src={this.state.profileImage}
                  alt="Profile Picture"
                />
              </div>
            );
          }
        }}
      </UserContext.Consumer>
    );
  }
}
export default Profile;
