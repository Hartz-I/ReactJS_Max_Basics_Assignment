import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return (
    <input
      class="UserInput"
      type="text"
      value={props.init}
      onChange={props.inputchange}
    ></input>
  );
};

export default UserInput;
