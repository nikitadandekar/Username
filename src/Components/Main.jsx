import React from "react";
import Footer from "./Footer";
import Username from "./Username";
import { useState } from "react";
function Main() {
  const [user, setUser] = useState("Nikita");
  return (
    <div className="Dash">
      <div>
        <h2>UserProfile</h2>
        <Username user={user} setUser={setUser} />
      </div>
      <Footer user={user} />
    </div>
  );
}

export default Main;
