import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <>
        <h1>About Section</h1>
        <h2>This is about page</h2>
        <div>
          Logged In User: 
          <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Mr. Mayur Jikar"}/> */}
        {/* <UserClass name={"React First component"}/> */}
        <UserClass name={"React Second component"} />
      </>
    );
  }
}

// const About = () => {
//     return(
//         <>
//         <h2>This is about page</h2>
//         <User name={"Mr. Mayur Jikar"}/>
//         <UserClass name={"React Class component"}/>
//         </>
//     )
// }

export default About;
