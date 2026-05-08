import React from "react";
import { useState } from "react";

const UpdateState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLICK HERE</button>
      <p>you clicked {count} times</p>
    </div>
  );
};

export default UpdateState;
