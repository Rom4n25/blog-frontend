import StyledFormWrapper from "../styles/Form/StyledFormWrapper";
import StyledForm from "../styles/Form/StyledForm";
import StyledLabel from "../styles/Form/StyledLabel";
import StyledInput from "../styles/Form/StyledInput";
import StyledButton from "../styles/StyledButton";

const Form = ({ formName, btnName, onSubmit, setUsername, setPassword }) => {
  return (
    <StyledFormWrapper>
      {formName}
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>Username</StyledLabel>
        <StyledInput
          type={"text"}
          required
          onChange={(e) => setUsername(e.target.value)}
        ></StyledInput>
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          type={"password"}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></StyledInput>
        <StyledButton primary type={"submit"}>
          {btnName}
        </StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Form;
