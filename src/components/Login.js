import React, { useState } from "react";
import userData from "../services/UserData";
import StyledForm from "./styles/StyledForm";
import StyledLoginFormWrapper from "./styles/StyledLoginFormWrapper";

const Login = ({ setAuthentication }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledLoginFormWrapper>
      Login
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          userData()
            .logIn(username, password)
            .then((response) => setAuthentication(response.status === 200));
        }}
      >
        <label>Username</label>
        <input
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type={"submit"}></input>
      </StyledForm>
    </StyledLoginFormWrapper>
  );
};

export default Login;
