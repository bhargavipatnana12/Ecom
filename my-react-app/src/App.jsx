import React from "react";
import Display from "./Display";
import CondsnlRender from "./CondsnlRender";
import RenderingLists from "./RenderingLists";
import ShoppingList from "./ShoppingList";
import UpdateState from "./UpdateState";
import SharingData from "./SharingData";
import Gallery from "./Gallery";
import TodoList from "./TodoList";
import Todo from "./Todo";
import CondisnlRendering_1 from "./CondisnlRendering_1";
import List from "./List";
import Props from "./Props";
import Props_1 from "./Props_1";
import RenderingList from "./RenderingList";
import AddingInteractivity from "./AddingInteractivity";
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
      <SharingData />
      <Gallery />
      <TodoList />
      <Todo />
      <CondisnlRendering_1 />
      <List />
      <Props />
      <Props_1 />
      <RenderingList />
      <AddingInteractivity />
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
