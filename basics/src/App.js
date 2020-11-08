import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userinfo: [
      {
        username: "Hartz_I",
        userid: "1234",
      },
      {
        username: "Ahnaf",
        userid: "2434",
      },
      {
        username: "Sadik",
        userid: "5423",
      },
      {
        username: "Inan",
        userid: "6343",
      },
    ],
  };

  inputHandler = (event) => {
    console.log("was typed");
    this.setState({
      userinfo: [
        {
          username: event.target.value,
          userid: "1234",
        },
        {
          username: "ahnaf",
          userid: "2434",
        },
        {
          username: "sadik",
          userid: "5423",
        },
        {
          username: "Inan",
          userid: "6343",
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <UserInput
          inputchange={this.inputHandler}
          init={this.state.userinfo[0].username}
        />
        <UserOutput
          username={this.state.userinfo[0].username}
          userid={this.state.userinfo[0].userid}
        />
        <UserOutput
          username={this.state.userinfo[1].username}
          userid={this.state.userinfo[1].userid}
        />
        <UserOutput
          username={this.state.userinfo[2].username}
          userid={this.state.userinfo[2].userid}
        />
        <UserOutput
          username={this.state.userinfo[3].username}
          userid={this.state.userinfo[3].userid}
        />
        <UserOutput
          username={this.state.userinfo[3].username}
          userid={this.state.userinfo[3].userid}
        />
        <UserOutput
          username={this.state.userinfo[3].username}
          userid={this.state.userinfo[3].userid}
        />
        <UserOutput
          username={this.state.userinfo[3].username}
          userid={this.state.userinfo[3].userid}
        />
        <UserOutput
          username={this.state.userinfo[3].username}
          userid={this.state.userinfo[3].userid}
        />
        <UserOutput
          username={this.state.userinfo[3].username}
          userid={this.state.userinfo[3].userid}
        />
      </div>
    );
  }
}

export default App;
