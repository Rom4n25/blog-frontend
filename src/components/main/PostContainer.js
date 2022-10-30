import StyledPostContainer from "../styles/Post/StyledPostContainer";
import Post from "./Post";
import postData from "../../services/PostData";
import { useEffect, useState } from "react";
import NewPost from "./NewPost";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    postData()
      .getAllPosts(0)
      .then((post) => setPosts(post));
  }, []);

  useEffect(() => {
    const scrolling_function = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.getElementById("postContainer").offsetHeight + 10
      ) {
        postData()
          .getAllPosts(page)
          .then((post) => {
            setPosts((posts) => posts.concat(post));
            setPage((page) => page + 1);
          });
        window.removeEventListener("scroll", scrolling_function);
      }
    };
    window.addEventListener("scroll", scrolling_function);
  }, [page, posts]);

  return (
    <StyledPostContainer key={"postContainer"} id="postContainer">
      <NewPost setPosts={setPosts}></NewPost>
      {posts.map((post) => (
        <Post
          key={post.id.toString()}
          id={post.id}
          text={post.text}
          created={post.created}
          author={post.user.username}
          comment={post.comment}
        ></Post>
      ))}
    </StyledPostContainer>
  );
};
export default PostContainer;
