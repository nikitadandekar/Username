import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Left from "./Components/Left";
import Main from "./Components/Main";

function App() {
  const [user, setUser] = useState("Nikita");

  return (
    <div className="Container">
      {/* Left container */}
      <Left user={user} />
      {/* Main container */}
      <Main user={user} />
      {/* Footer */}
    </div>
  );
}

export default App;
