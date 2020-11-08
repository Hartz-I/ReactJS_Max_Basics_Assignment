import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div class="output">
      <p>{props.username}</p>
      <p>{props.userid}</p>
    </div>
  );
};

export default UserOutput;
