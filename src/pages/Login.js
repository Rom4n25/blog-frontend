import UserData from "../services/UserData";
import Form from "../components/Form";
import HeaderLogo from "../components/header/HeaderLogo";
import StyledButton from "../styles/StyledButton";
import StyledHeader from "../styles/Header/StyledHeader";
import { useNavigate } from "react-router-dom";

const Login = ({
  setAuthentication,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    UserData()
      .logIn(username, password)
      .then((response) => {
        setAuthentication(response.status === 200);
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
    </>
  );
};

export default Login;
