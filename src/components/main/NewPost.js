import StyledNewPost from "../styles/StyledNewPost";
import { useState } from "react";
import PostData from "../../services/PostData";
import StyledButton from "../styles/StyledButton";
import StyledTextArea from "../styles/StyledTextArea";

const NewPost = () => {
  const [post, setPost] = useState("");

  const addPost = () => {
    PostData().addPost(post).then(window.location.reload(false));
  };

  return (
    <>
      <StyledNewPost>
        <StyledTextArea
          onChange={(e) => setPost(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
      </StyledNewPost>
      <StyledButton onClick={addPost}>Add Post</StyledButton>
    </>
  );
};

export default NewPost;
