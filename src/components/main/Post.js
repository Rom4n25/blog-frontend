import StyledPost from "../styles/Post/StyledPost";
import Comment from "./Comment";
import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledCommentButton from "../styles/Comment/StyledCommentButton";
import StyledPostText from "../styles/Post/StyledPostText";
import StyledCommentContainer from "../styles/Comment/StyledCommentContainer";
import NewComment from "./NewComment";
import PostHeader from "./PostHeader";

const Post = ({ id, text, author, created }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);

  const displayComments = () => {
    CommentData()
      .getComments(id)
      .then((comments) => setComments(comments))
      .then(setShowComments(!showComments));
  };

  const addComment = () => {
    setNewComment(!newComment);
  };

  console.log(comments);

  return (
    <>
      <StyledPost>
        <PostHeader
          addComment={addComment}
          author={author}
          created={created}
        ></PostHeader>
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
              created={comment.created}
            ></Comment>
          ))
        ) : (
          <></>
        )}
      </StyledCommentContainer>

      {newComment === true ? (
        <NewComment postId={id} setComments={setComments}></NewComment>
      ) : (
        <></>
      )}
    </>
  );
};
export default Post;
