import Form from "./Form";
import { useState } from "react";
import StyledHeader from "../styles/StyledHeader";
import StyledButton from "../styles/StyledButton";
import userData from "../services/UserData";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    userData().create(username, password).then(navigate("/"));
  };

  return (
    <>
      <StyledHeader>
        <StyledButton onClick={() => navigate("/")}>Back to login</StyledButton>
      </StyledHeader>
      <Form
        formName={"Create account"}
        btnName={"Create"}
        onSubmit={submitForm}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      ></Form>
    </>
  );
};

export default CreateUser;
