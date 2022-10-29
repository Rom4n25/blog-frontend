import StyledHeader from "../styles/StyledHeader";
import userData from "../../services/UserData";

const Header = ({ setAuthentication }) => {
  return (
    <StyledHeader>
      <div>
        <button
          onClick={() => userData().logOut().then(setAuthentication(false))}
        >
          Log Out
        </button>
      </div>
    </StyledHeader>
  );
};
export default Header;
