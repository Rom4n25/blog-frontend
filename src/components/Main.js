import StyledMain from "../styles/StyledMain";
import PostContainer from "./post/PostContainer";

const Main = ({ userId }) => {
  return (
    <StyledMain>
      <PostContainer userId={userId}></PostContainer>
    </StyledMain>
  );
};
export default Main;