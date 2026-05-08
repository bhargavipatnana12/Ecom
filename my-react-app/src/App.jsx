import React from "react";
import Display from "./Display";
import CondsnlRender from "./CondsnlRender";
import RenderingLists from "./RenderingLists";
const App = () => {
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <h1>HELLO WORLD</h1>
      <MyBut />
      <Display />
      <CondsnlRender isLoggedIn={false} />
      <RenderingLists />
    </div>
  );
};

export default App;
function MyBut() {
  return (
    <div
      style={{ backgroundColor: "yellow" }}
      onClick={() => alert("you clicked the button")}
    >
      click
    </div>
  );
}
