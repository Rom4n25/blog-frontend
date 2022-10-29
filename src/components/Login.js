import React, { useState } from "react";
import userData from "../services/UserData";
import StyledForm from "./styles/StyledForm";
import StyledInput from "./styles/StyledInput";
import StyledLabel from "./styles/StyledLabel";
import StyledLogin from "./styles/StyledLogin";
import StyledButton from "./styles/StyledButton";
import StyledLoginFormWrapper from "./styles/StyledLoginFormWrapper";

const Login = ({ setAuthentication }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledLogin>
      <StyledLoginFormWrapper>
        Mikroblog
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            userData()
              .logIn(username, password)
              .then((response) => setAuthentication(response.status === 200));
          }}
        >
          <StyledLabel>Username</StyledLabel>
          <StyledInput
            type={"text"}
            onChange={(e) => setUsername(e.target.value)}
          ></StyledInput>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          ></StyledInput>
          <StyledButton type={"submit"}>Login</StyledButton>
        </StyledForm>
      </StyledLoginFormWrapper>
    </StyledLogin>
  );
};

export default Login;
