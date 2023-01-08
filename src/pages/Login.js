import UserData from "../services/UserData";
import Form from "../components/Form";
import HeaderLogo from "../components/header/HeaderLogo";
import StyledButton from "../styles/StyledButton";
import StyledHeader from "../styles/Header/StyledHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StyledMessageBox from "../styles/StyledMessageBox";

const Login = ({
  setAuthentication,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    UserData()
      .logIn(username, password)
      .then((response) => {
        response.status === 200
          ? setAuthentication(true)
          : setAuthentication(false);
        setLoginFailed(true);
      });
  };

  const formProps = {
    formName: "Mikroblog",
    btnName: "Login",
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
        <StyledButton onClick={() => navigate("/create-account")}>
          Create account
        </StyledButton>
      </StyledHeader>
      <Form {...formProps}></Form>
      {loginFailed ? (
        <StyledMessageBox>
          Wrong credentials or user does not exists.
          <StyledButton onClick={() => setLoginFailed(false)} primary>
            Try Again
          </StyledButton>
        </StyledMessageBox>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
