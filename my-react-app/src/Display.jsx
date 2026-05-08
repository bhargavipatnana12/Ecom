import React from "react";

const Display = () => {
  const user = {
    name: "sruthi",
    imageurl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        src={user.imageurl}
        style={{ width: "90px", height: "90px" }}
        alt="picture"
      />
    </div>
  );
};

export default Display;
