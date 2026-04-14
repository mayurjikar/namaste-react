import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + " Child constructor");
  }
  
  componentDidMount(){
    console.log(this.props.name + " Children component did mount");
  }

  render() {
    console.log(this.props.name + " Child render");
    const { name } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h1>Count:- {count}</h1>
        {/* Updating State */}
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count increase
        </button>
        <h2>Name:- {name}</h2>
        <h3>Location:- Nagpur</h3>
        <h4>Email:- mayurjikar@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
