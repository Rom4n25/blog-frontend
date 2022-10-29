import StyledPost from "../styles/StyledPost";
import Comment from "./Comment";
import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledCommentButton from "../styles/StyledCommentButton";
import StyledPostAuthor from "../styles/StyledPostAuthor";
import StyledPostText from "../styles/StyledPostText";
import StyledCommentContainer from "../styles/StyledCommentContainer";

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
        <StyledPostAuthor>@{author}</StyledPostAuthor>
        <StyledPostText>{text}</StyledPostText>
        <StyledCommentButton value={showComments} onClick={displayComments}>
          show comments &#8628;
        </StyledCommentButton>
      </StyledPost>

      <StyledCommentContainer>
        {showComments === true ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              text={comment.text}
              author={comment.user.username}
            ></Comment>
          ))
        ) : (
          <></>
        )}
      </StyledCommentContainer>
    </>
  );
};
export default Post;
