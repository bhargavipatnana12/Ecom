import React from "react";
import Display from "./Display";
import CondsnlRender from "./CondsnlRender";
import RenderingLists from "./RenderingLists";
import ShoppingList from "./ShoppingList";
import UpdateState from "./UpdateState";
const App = () => {
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <h1>HELLO WORLD</h1>
      <MyBut />
      <Display />
      <CondsnlRender isLoggedIn={false} />
      <RenderingLists />
      <ShoppingList />
      <UpdateState />
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
