import StyledMain from "../../styles/StyledMain";
import PostContainer from "./PostContainer";

const Main = ({ userId }) => {
  return (
    <StyledMain>
      <PostContainer userId={userId}></PostContainer>
    </StyledMain>
  );
};
export default Main;
