import React, { useState } from "react";
import userData from "../services/UserData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          userData()
            .logIn(username, password)
            .then(() => navigate("/"));
        }}
      >
        <input
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type={"submit"}></input>
      </form>
    </>
  );
};

export default Login;
