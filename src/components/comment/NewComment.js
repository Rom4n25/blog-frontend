import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledButton from "../../styles/StyledButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledNewComment from "../../styles/Comment/StyledNewComment";

const NewComment = ({ postId, setComments, setNewComment }) => {
  const [comment, setComment] = useState("");

  const addComment = () => {
    CommentData()
      .addComment(postId, comment)
      .then(() => {
        CommentData()
          .getComments(postId)
          .then((comments) => {
            setComments(comments);
            setComment("");
            setNewComment(false);
          });
      });
  };

  return (
    <>
      <StyledNewComment>
        <StyledTextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
        <StyledButton primary onClick={addComment}>
          Add Comment
        </StyledButton>
      </StyledNewComment>
    </>
  );
};

export default NewComment;
