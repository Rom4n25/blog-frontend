import StyledHeader from "../../styles/StyledHeader";
import StyledButton from "../../styles/StyledButton";
import userData from "../../services/UserData";

const Header = ({ setAuthentication }) => {
  return (
    <StyledHeader>
      <StyledButton
        onClick={() => userData().logOut().then(setAuthentication(false))}
      >
        Log Out
      </StyledButton>
    </StyledHeader>
  );
};
export default Header;
