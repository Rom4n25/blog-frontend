import StyledNewPost from "../../styles/Post/StyledNewPost";
import { useState } from "react";
import PostData from "../../services/PostData";
import StyledButton from "../../styles/StyledButton";
import StyledTextArea from "../../styles/StyledTextArea";

const NewPost = ({ setPosts }) => {
  const [post, setPost] = useState("");

  const addPost = () => {
    PostData()
      .addPost(post)
      .then(() =>
        PostData()
          .getAllPosts(0)
          .then((posts) => {
            setPosts(posts);
            setPost("");
          })
      );
  };

  return (
    <>
      <StyledNewPost>
        <StyledTextArea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
        <StyledButton primary onClick={addPost}>
          Add Post
        </StyledButton>
      </StyledNewPost>
    </>
  );
};

export default NewPost;
