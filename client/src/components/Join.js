import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading"></h1>
        <div>
          <input
            placeholder="Name"
            className="join-input"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Room"
            className="join-input mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link to={`/chat?name=${name}&room=${room}`} onClick={event => (!name || !room) ? event.preventDefault() : null}>
            <button className="button mt-20" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
