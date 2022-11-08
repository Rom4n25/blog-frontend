import StyledMain from "../styles/StyledMain";
import PostContainer from "./post/PostContainer";

const Main = ({ username }) => {
  return (
    <StyledMain>
      <PostContainer username={username}></PostContainer>
    </StyledMain>
  );
};
export default Main;
