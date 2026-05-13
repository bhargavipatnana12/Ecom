import React, { useState } from "react";

export default function SharingData() {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>Counts are updating together</h3>
      <MyButton count={count} onclick={handler} />
      <MyButton count={count} onclick={handler} />
    </div>
  );
}

function MyButton({ count, onclick }) {
  return (
    <div>
      <button onClick={onclick}>Clicked {count} times</button>
    </div>
  );
}
