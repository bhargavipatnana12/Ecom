import React from "react";

const TodoList = () => {
  return (
    <div>
      <h1 style={{ color: "darkblue", fontSize: "30px" }}>SRUTHI PATNANA</h1>
      <img
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        alt="profilepic"
      />
      <div
        style={{
          color: "red",
          fontFamily: "sans-serif",
          backgroundColor: "yellow",
        }}
      >
        <ul>
          <li>VASUNDHARA VILLAGE</li>
          <li>SRIKAKULAM DISTRICT</li>
          <li>ANDHRA PRADESH</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
