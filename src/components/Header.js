import StyledHeader from "../styles/StyledHeader";
import StyledButton from "../styles/StyledButton";
import UserData from "../services/UserData";

const Header = ({ setAuthentication }) => {
  return (
    <StyledHeader>
      <StyledButton
        onClick={() => UserData().logOut().then(setAuthentication(false))}
      >
        Log Out
      </StyledButton>
    </StyledHeader>
  );
};
export default Header;
