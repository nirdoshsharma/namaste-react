import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <User name={"Nirdosh Sharma"} location={"Bangaluru"} />
        <UserClass name={"Nirdosh"} location={"Sirsa"} />
        <div>
          loged In User
          <UserContext.Consumer>
            {({ logInUser }) => (
              <h1 className="text-xl font-bold">{logInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <User name={"Nirdosh Sharma"} location={"Bangaluru"} />
//       <UserClass name={"Nirdosh"} location={"Sirsa"} />
//     </div>
//   );
// };

export default About;
