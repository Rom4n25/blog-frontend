import StyledNewPost from "../styles/StyledNewPost";
import { useState } from "react";
import postData from "../../services/PostData";

const NewPost = () => {
  const [post, setPost] = useState("");

  const addPost = () => {
    postData().addPost(post).then(window.location.reload(false));
  };

  return (
    <StyledNewPost>
      <textarea
        onChange={(e) => setPost(e.target.value)}
        rows={5}
        cols={60}
        placeholder="Say something..."
      ></textarea>
      <button onClick={addPost}>Add Post</button>
    </StyledNewPost>
  );
};

export default NewPost;
