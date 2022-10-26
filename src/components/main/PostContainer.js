import StyledPostContainer from "../styles/StyledPostContainer";
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
        <Post
          key={post.id}
          id={post.id}
          text={post.text}
          author={post.user.username}
          comments={post.comment}
        ></Post>
      ))}
    </StyledPostContainer>
  );
};
export default PostContainer;
