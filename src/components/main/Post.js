import StyledPost from "../styles/StyledPost";
import Comment from "./Comment";
import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledButton from "../styles/StyledButton";

const Post = ({ id, text, author }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const displayComments = () => {
    CommentData()
      .getComments(id)
      .then((comments) => setComments(comments))
      .then(setShowComments(!showComments));
  };

  return (
    <>
      <StyledPost>
        <div>{text}</div>
        <div>{author}</div>
      </StyledPost>
      <StyledButton value={showComments} onClick={displayComments}>
        Show comments
      </StyledButton>

      {showComments === true ? (
        comments.map((comment) => (
          <Comment key={comment.id} text={comment.text}></Comment>
        ))
      ) : (
        <></>
      )}
    </>
  );
};
export default Post;
