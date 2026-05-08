import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const CondsnlRender = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <LoginForm /> : <SignUpForm />}</div>;
};
export default CondsnlRender;
