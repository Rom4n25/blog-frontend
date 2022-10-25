import StyledPostContainer from "../styles/PostContainer";
import Post from "./Post";
import postData from "../../services/PostData";
import { useEffect } from "react";
import { useState } from "react";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postData()
      .getAllPosts()
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <StyledPostContainer>
      {posts.map((post) => (
        <Post key={post.id} text={post.text} author={post.user.username}></Post>
      ))}
    </StyledPostContainer>
  );
};
export default PostContainer;
