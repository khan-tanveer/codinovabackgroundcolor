import React from "react";
import "./App.css";
import LeftPanel from "./component/LeftPanel";
import RightPanel from "./component/RightPanel";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }} className="App">
      {/* <h1>hello background changing color App</h1> */}
      <LeftPanel />
      {/* <RightPanel /> */}
    </div>
  );
}

export default App;
