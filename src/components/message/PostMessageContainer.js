import { useEffect } from "react";
import StyledMessagesContainer from "../../styles/Messages/StyledMessagesContainer";
import PostMessage from "./PostMessage";

const PostMessageContainer = ({
  loggedUser,
  loadPosts,
  posts,
  setPosts,
  page,
  setPage,
  shouldLoadPostOnScroll,
}) => {
  useEffect(() => {
    loadPosts(0).then((posts) => setPosts(posts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const scrollEvent = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.getElementById("postContainer").offsetHeight + 50 &&
        shouldLoadPostOnScroll
      ) {
        loadPosts(page)
          .then((post) => {
            setPage((page) => page + 1);
            setPosts((posts) => posts.concat(post));
          })
          .catch(() => console.log("No more posts"));
        window.removeEventListener("scroll", scrollEvent);
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, shouldLoadPostOnScroll]);

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
          tag={post.tag}
          loggedUser={loggedUser}
          setPosts={setPosts}
          posts={posts}
        ></PostMessage>
      ))}
    </StyledMessagesContainer>
  );
};
export default PostMessageContainer;
