import { useParams, useNavigate } from "react-router-dom";
import StyledHeader from "../styles/StyledHeader";
import { useEffect, useState, useRef } from "react";
import StyledPostContainer from "../styles/Post/StyledPostContainer";
import StyledMain from "../styles/StyledMain";
import Post from "../components/post/Post";
import PostData from "../services/PostData";
import UserData from "../services/UserData";
import StyledButton from "../styles/StyledButton";

const User = () => {
  const initialMount = useRef(true);
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    UserData()
      .getUserIdFromUsername(username)
      .then((response) => setUserId(response.id));
  }, [username]);

  useEffect(() => {
    if (userId) {
      PostData()
        .getAllPostsByUserId(userId, 0)
        .then((post) => setPosts(post));
    }
  }, [userId]);

  useEffect(() => {
    const scrollEvent = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.getElementById("postContainer").offsetHeight + 50
      ) {
        PostData()
          .getAllPostsByUserId(userId, page)
          .then((post) => {
            setPage((page) => page + 1);
            setPosts((posts) => posts.concat(post));
          });
        window.removeEventListener("scroll", scrollEvent);
      }
    };

    if (initialMount.current) {
      initialMount.current = false;
    } else {
      window.addEventListener("scroll", scrollEvent);
    }
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [page, userId]);

  return (
    <>
      <StyledHeader>
        <StyledButton
          onClick={() => {
            navigate("/");
          }}
        >
          Mikroblog
        </StyledButton>
      </StyledHeader>
      <StyledMain>
        <StyledPostContainer key={"postContainer"} id="postContainer">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              text={post.text}
              created={post.created}
              author={post.user.username}
              comment={post.comment}
              img={post.img}
            ></Post>
          ))}
        </StyledPostContainer>
      </StyledMain>
    </>
  );
};
export default User;
