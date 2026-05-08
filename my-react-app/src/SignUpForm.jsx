import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <input type="text" placeholder="enter useername" />
      <input type="password" placeholder="enter password" />
      <input type="confirm password" placeholder="re-enter password" />
      <button>SUBMIT</button>
    </div>
  );
};

export default SignUpForm;
