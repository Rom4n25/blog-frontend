import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledButton from "../styles/StyledButton";
import StyledTextArea from "../styles/StyledTextArea";
import StyledNewComment from "../styles/StyledNewComment";

const NewComment = ({ postId }) => {
  const [comment, setComment] = useState("");

  const addComment = () => {
    CommentData()
      .addComment(postId, comment)
      .then(window.location.reload(false));
  };

  return (
    <>
      <StyledNewComment>
        <StyledTextArea
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
        <StyledButton onClick={addComment}>Add Comment</StyledButton>
      </StyledNewComment>
    </>
  );
};

export default NewComment;
