import Form from "../components/Form";
import { useState } from "react";
import StyledHeader from "../styles/StyledHeader";
import StyledButton from "../styles/StyledButton";
import UserData from "../services/UserData";
import { useNavigate } from "react-router-dom";
import IconLogo from "../styles/IconLogo";
import StyledHeaderTitle from "../styles/StyledHeaderTtitle";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    UserData().create(username, password).then(navigate("/"));
  };

  return (
    <>
      <StyledHeader>
        <div style={{ display: "flex" }}>
          <IconLogo /> <StyledHeaderTitle>Mikroblog</StyledHeaderTitle>
        </div>
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
