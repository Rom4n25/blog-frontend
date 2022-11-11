import StyledMain from "../styles/StyledMain";
import PostContainer from "./post/PostContainer";
import PostData from "../services/PostData";
import NewPost from "./post/NewPost";
import { useState } from "react";

const Main = ({ loggedUser }) => {
  const [posts, setPosts] = useState([]);
  const loadPosts = async (page) => {
    return await PostData().getAllPosts(page);
  };
  return (
    <StyledMain>
      <NewPost setPosts={setPosts}></NewPost>
      <PostContainer
        loggedUser={loggedUser}
        loadPosts={loadPosts}
        posts={posts}
        setPosts={setPosts}
      ></PostContainer>
    </StyledMain>
  );
};
export default Main;
