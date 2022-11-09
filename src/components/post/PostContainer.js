import StyledPostContainer from "../../styles/Post/StyledPostContainer";
import Post from "./Post";
import postData from "../../services/PostData";
import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import EditPost from "./EditPost";

const PostContainer = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [editPost, setEditPost] = useState(false);
  const [editPostText, setEditPostText] = useState("");
  const [editPostImg, setEditPostImg] = useState(null);
  const [editPostId, setEditPostId] = useState(null);

  useEffect(() => {
    postData()
      .getAllPosts(0)
      .then((post) => {
        setPosts(post);
      });
  }, []);

  useEffect(() => {
    const scrollEvent = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.getElementById("postContainer").offsetHeight + 50
      ) {
        postData()
          .getAllPosts(page)
          .then((post) => {
            setPage((page) => page + 1);
            setPosts((posts) => posts.concat(post));
          });
        window.removeEventListener("scroll", scrollEvent);
      }
    };
    window.addEventListener("scroll", scrollEvent);
  }, [page]);

  return (
    <StyledPostContainer key={"postContainer"} id="postContainer">
      {editPost === true ? (
        <EditPost
          setText={setEditPostText}
          text={editPostText}
          setImg={setEditPostImg}
          img={editPostImg}
          id={editPostId}
          setPosts={setPosts}
          setEditPost={setEditPost}
        ></EditPost>
      ) : (
        <NewPost setPosts={setPosts}></NewPost>
      )}

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          text={post.text}
          created={post.created}
          author={post.user.username}
          comment={post.comment}
          username={username}
          img={post.img}
          setEditPost={setEditPost}
          setEditPostText={setEditPostText}
          setEditPostId={setEditPostId}
        ></Post>
      ))}
    </StyledPostContainer>
  );
};
export default PostContainer;
