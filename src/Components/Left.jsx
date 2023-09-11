import React from "react";
import Detail from "./Detail";
import Add from "./Add";

function Left(props) {
  return (
    <div>
      <div className="New">
        <h1>{props.user}</h1>
        <nav>
          <ul>
            <li>Home</li>
            <Detail />
            <li>About</li>
            <Add />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Left;
