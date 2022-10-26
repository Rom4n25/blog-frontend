import StyledHeader from "../styles/StyledHeader";
import { useCookies } from "react-cookie";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  return (
    <StyledHeader>
      <div>
        <button onClick={() => removeCookie("accessToken")}>Log Out</button>
      </div>
    </StyledHeader>
  );
};
export default Header;
