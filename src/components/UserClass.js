import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        id: "000000",
        login: "xyz@gmail.com",
        avatar_url: "xyz",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nirdoshsharma");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, id, login, avatar_url } = this.state.userInfo;
    // const { name, location } = this.props;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name : {name}</h1>
        <h2>Id : {id}</h2>
        <h3>Contact : {login}</h3>
      </div>
    );
  }
}

export default UserClass;
