import StyledNewPost from "../styles/StyledNewPost";
import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledButton from "../styles/StyledButton";
import StyledTextArea from "../styles/StyledTextArea";

const NewComment = ({ postId }) => {
  const [comment, setComment] = useState("");

  const addComment = () => {
    CommentData()
      .addComment(postId, comment)
      .then(window.location.reload(false));
  };

  return (
    <>
      <StyledNewPost>
        <StyledTextArea
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
        <StyledButton onClick={addComment}>Add Comment</StyledButton>
      </StyledNewPost>
    </>
  );
};

export default NewComment;
