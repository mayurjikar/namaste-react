import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + " Child constructor");

    this.state = {
       userInfo: {
         name: "Dummy",
         location: "Default",
         avatar_url: "http://photo.com",
       },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + " Children component did mount");
    const data = await fetch("https://api.github.com/users/mayurjikar");
    const json = await data.json();
    console.log({json});

    this.setState({
      userInfo: json,
    });
  }

  render() {
    //console.log(this.props.name + " Child render");
    //const { name } = this.props.userInfo;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name:- {name}</h2>
        <h3>Location:- {location}</h3>
        <h4>Email:- mayurjikar@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
