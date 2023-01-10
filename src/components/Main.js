import StyledMain from "../styles/Main/StyledMain";
import PostMessageContainer from "./message/PostMessageContainer";
import PostData from "../services/PostData";
import NewMessage from "./message/NewMessage";
import { useState, useEffect } from "react";
import StyledNavBar from "../styles/Main/StyledNavBar";
import StyledNavBarButton from "../styles/Main/StyledNavBarButton";

const Main = ({ loggedUser }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [shouldLoadPostOnScroll, setShouldLoadPostOnScroll] = useState(true);
  const [newPostText, setNewPostText] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  useEffect(() => {
    PostData()
      .getAllPosts(0)
      .then((posts) => setPosts(posts));
  }, []);

  const loadPosts = async (page) => {
    setShouldLoadPostOnScroll(true);
    return await PostData().getAllPosts(page);
  };

  const loadTop10Posts = async () => {
    setShouldLoadPostOnScroll(false);
    return await PostData().findTop10();
  };

  const addPost = () => {
    const formData = new FormData();
    if (newPostImage) {
      formData.append("file", newPostImage);
    }
    formData.append("text", newPostText);

    PostData()
      .addPost(formData)
      .then(() => {
        PostData()
          .getAllPosts(0)
          .then((posts) => {
            setPosts(posts);
            setNewPostText("");
            setNewPostImage(null);
          });
      });
  };

  return (
    <StyledMain>
      <StyledNavBar>
        <StyledNavBarButton
          onClick={() => {
            loadPosts(0)
              .then((posts) => {
                setPosts(posts);
              })
              .then(() => setPage(1));
          }}
        >
          All Posts
        </StyledNavBarButton>
        <div
          style={{
            backgroundColor: "#00abb3",
            height: "100%",
            width: "1px",
          }}
        ></div>
        <StyledNavBarButton
          onClick={() =>
            loadTop10Posts().then((posts) => {
              setPosts(posts);
            })
          }
        >
          Top 10
        </StyledNavBarButton>
      </StyledNavBar>
      <NewMessage
        text={newPostText}
        setText={setNewPostText}
        image={newPostImage}
        submit={addPost}
      ></NewMessage>

      <PostMessageContainer
        loggedUser={loggedUser}
        loadPosts={loadPosts}
        posts={posts}
        page={page}
        setPage={setPage}
        setPosts={setPosts}
        shouldLoadPostOnScroll={shouldLoadPostOnScroll}
      ></PostMessageContainer>
    </StyledMain>
  );
};
export default Main;
