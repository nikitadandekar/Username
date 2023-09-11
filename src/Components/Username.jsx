import React from "react";

function Username({ user, setUser }) {
  return (
    <div className="Name">
      <label htmlFor="">Useraname</label>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
}

export default Username;
