import StyledHeader from "../../styles/Header/StyledHeader";
import StyledButton from "../../styles/StyledButton";
import HeaderLogo from "./HeaderLogo";
import UserData from "../../services/UserData";

const Header = ({ setAuthentication }) => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <StyledButton
        onClick={() => UserData().logOut().then(setAuthentication(false))}
      >
        Log Out
      </StyledButton>
    </StyledHeader>
  );
};
export default Header;
