import StyledMain from "../styles/Main/StyledMain";
import PostMessageContainer from "./message/PostMessageContainer";
import PostData from "../services/PostData";
import NewMessage from "./message/NewMessage";
import { useState } from "react";

const Main = ({ loggedUser }) => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  const loadPosts = async (page) => {
    return await PostData().getAllPosts(page);
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
        setPosts={setPosts}
      ></PostMessageContainer>
    </StyledMain>
  );
};
export default Main;
