import IconLogo from "../../styles/Header/IconLogo";
import StyledHeaderTitle from "../../styles/Header/StyledHeaderTitle";
import StyledButton from "../../styles/Header/StyledButton";
import { useNavigate } from "react-router-dom";

const HeaderLogo = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <StyledButton onClick={() => navigate("/")} />
      <IconLogo />
      <StyledHeaderTitle>Mikroblog</StyledHeaderTitle>
    </div>
  );
};
export default HeaderLogo;
