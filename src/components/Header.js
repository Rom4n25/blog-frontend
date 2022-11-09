import StyledHeader from "../styles/StyledHeader";
import StyledButton from "../styles/StyledButton";
import UserData from "../services/UserData";
import IconLogo from "../styles/IconLogo";
import StyledHeaderTitle from "../styles/StyledHeaderTtitle";

const Header = ({ setAuthentication }) => {
  return (
    <StyledHeader>
      <div style={{ display: "flex" }}>
        <IconLogo /> <StyledHeaderTitle>Mikroblog</StyledHeaderTitle>
      </div>
      <StyledButton
        onClick={() => UserData().logOut().then(setAuthentication(false))}
      >
        Log Out
      </StyledButton>
    </StyledHeader>
  );
};
export default Header;
