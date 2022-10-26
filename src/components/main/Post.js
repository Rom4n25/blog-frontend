import StyledPost from "../styles/StyledPost";
import Comment from "./Comment";
import { useState } from "react";
import CommentData from "../../services/CommentData";

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
      <button value={showComments} onClick={displayComments}>
        Show posts
      </button>

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
