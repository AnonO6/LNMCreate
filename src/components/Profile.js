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
      <div className="profile">
        <div>
          <h1>PROFILE</h1>
          <UserContext.Consumer>
            {(value) => <h2>Welcome, {value.user.username}!</h2>}
          </UserContext.Consumer>
        </div>

        <img src={this.state.profileImage} alt="Profile Picture" />
      </div>
    );
  }
}
export default Profile;
