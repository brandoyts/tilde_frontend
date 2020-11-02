import React from "react";
import loginSvg from "./loginSvg.svg";
import "../../../../css/login.css";
import Form from "./Form";
import x from "./wearing_a_mask_.svg";

function Login() {
  return (
    <main className="login">
      <div className="login__form-container">
        <img
          className="login__form-container__image"
          src={x}
          alt="illustraions"
        />

        <Form />
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </main>
  );
}

export default Login;
