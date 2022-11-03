import { useParams } from "react-router-dom";
import StyledHeader from "../styles/StyledHeader";

const User = () => {
  const { username } = useParams();

  return <StyledHeader>{username}</StyledHeader>;
};
export default User;
