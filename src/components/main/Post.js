import StyledPost from "../styles/StyledPost";
import Comment from "./Comment";
import { useState } from "react";

const Post = ({ text, author, comments }) => {
  const [showComments, setShowComments] = useState(false);

  const displayComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
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
    </div>
  );
};
export default Post;
