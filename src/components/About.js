import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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
