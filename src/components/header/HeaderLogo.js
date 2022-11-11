import IconLogo from "../../styles/IconLogo";
import StyledHeaderTitle from "../../styles/Header/StyledHeaderTitle";

const HeaderLogo = () => {
  return (
    <div style={{ display: "flex" }}>
      <IconLogo />
      <StyledHeaderTitle>Mikroblog</StyledHeaderTitle>
    </div>
  );
};
export default HeaderLogo;
