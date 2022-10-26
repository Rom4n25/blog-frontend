import StyledMain from "../styles/StyledMain";
import NewPost from "./NewPost";
import PostContainer from "./PostContainer";

const Main = () => {
  return (
    <StyledMain>
      <NewPost />
      <PostContainer />
    </StyledMain>
  );
};
export default Main;
