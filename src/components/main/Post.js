import StyledPost from "../styles/Post/StyledPost";
import Comment from "./Comment";
import { useState } from "react";
import StyledCommentButton from "../styles/Comment/StyledCommentButton";
import StyledPostText from "../styles/Post/StyledPostText";
import StyledCommentContainer from "../styles/Comment/StyledCommentContainer";
import NewComment from "./NewComment";
import PostHeader from "./PostHeader";

const Post = ({ id, text, author, comment, created }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(comment);
  const [newComment, setNewComment] = useState(false);

  const displayComments = () => {
    setShowComments(!showComments);
  };

  const addComment = () => {
    setNewComment(!newComment);
    setShowComments(true);
  };

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
          {comments.length > 0 ? (
            <p>show comments ({comments.length})&#8628;</p>
          ) : (
            <></>
          )}
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
        <NewComment
          postId={id}
          setComments={setComments}
          setNewComment={setNewComment}
        ></NewComment>
      ) : (
        <></>
      )}
    </>
  );
};
export default Post;
