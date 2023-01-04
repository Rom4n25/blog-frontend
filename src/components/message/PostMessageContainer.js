import { useEffect, useState } from "react";
import StyledMessagesContainer from "../../styles/Messages/StyledMessagesContainer";
import PostMessage from "./PostMessage";

const PostMessageContainer = ({ loggedUser, loadPosts, posts, setPosts }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadPosts(0).then((posts) => setPosts(posts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const scrollEvent = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.getElementById("postContainer").offsetHeight + 50
      ) {
        loadPosts(page).then((post) => {
          setPage((page) => page + 1);
          setPosts((posts) => posts.concat(post));
        });
        window.removeEventListener("scroll", scrollEvent);
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <StyledMessagesContainer key={"postContainer"} id="postContainer">
      {posts.map((post) => (
        <PostMessage
          key={post.id}
          id={post.id}
          text={post.text}
          image={post.img}
          dateCreated={post.created}
          author={post.user.username}
          comments={post.comment}
          points={post.pointPost}
          loggedUser={loggedUser}
          setPosts={setPosts}
        ></PostMessage>
      ))}
    </StyledMessagesContainer>
  );
};
export default PostMessageContainer;
