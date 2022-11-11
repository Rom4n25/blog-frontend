import Form from "../components/Form";
import UserData from "../services/UserData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledHeader from "../styles/Header/StyledHeader";
import StyledButton from "../styles/StyledButton";
import HeaderLogo from "../components/header/HeaderLogo";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    UserData().create(username, password).then(navigate("/"));
  };

  const formProps = {
    formName: "CreateAccount",
    btnName: "Create",
    onSubmit: submitForm,
    username,
    setUsername,
    password,
    setPassword,
  };

  return (
    <>
      <StyledHeader>
        <HeaderLogo />
        <StyledButton onClick={() => navigate("/")}>Back to login</StyledButton>
      </StyledHeader>
      <Form {...formProps}></Form>
    </>
  );
};

export default CreateUser;
