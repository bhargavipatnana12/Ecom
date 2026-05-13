import React from "react";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientits</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="profilepic"
    />
  );
}
