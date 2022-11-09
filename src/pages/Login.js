import UserData from "../services/UserData";
import Form from "../components/Form";
import StyledButton from "../styles/StyledButton";
import StyledHeader from "../styles/StyledHeader";
import IconLogo from "../styles/IconLogo";
import StyledHeaderTitle from "../styles/StyledHeaderTtitle";

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

  return (
    <>
      <StyledHeader>
        <div style={{ display: "flex" }}>
          <IconLogo /> <StyledHeaderTitle>Mikroblog</StyledHeaderTitle>
        </div>
        <StyledButton onClick={() => navigate("/create-account")}>
          Create account
        </StyledButton>
      </StyledHeader>
      <Form
        formName={"Mikroblog"}
        btnName={"Login"}
        onSubmit={submitForm}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      ></Form>
    </>
  );
};

export default Login;
