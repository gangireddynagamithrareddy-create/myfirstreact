import React from "react";
import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const flag = false;

  return (
    <div style={{ padding: "20px" }}>
      <h1>ReactJS HOL 9</h1>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;