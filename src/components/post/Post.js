import StyledPost from "../../styles/Post/StyledPost";
import Comment from "../comment/Comment";
import { useState } from "react";
import StyledCommentButton from "../../styles/Comment/StyledCommentButton";
import StyledPostText from "../../styles/Post/StyledPostText";
import StyledCommentContainer from "../../styles/Comment/StyledCommentContainer";
import NewComment from "../comment/NewComment";
import PostHeader from "./PostHeader";
import StyledImgWrapper from "../../styles/StyledImgWrapper";
import EditComment from "../comment/EditComment";

const Post = ({
  id,
  text,
  author,
  comment,
  created,
  username,
  img,
  setEditPost,
  setEditPostText,
  setEditPostId,
  setPosts,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(comment);
  const [newComment, setNewComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [editCommentText, setEditCommentText] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentImg, setEditCommentImg] = useState(null);

  const displayComments = () => {
    setShowComments(!showComments);
  };

  const addComment = () => {
    setNewComment(!newComment);
    setShowComments(true);
  };

  const editPostEffect = () => {
    setEditPostText(text);
    setEditPostId(id);
    setEditPost(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <StyledPost>
        <PostHeader
          addComment={addComment}
          author={author}
          created={created}
          username={username}
          editPostEffect={editPostEffect}
        ></PostHeader>
        <StyledPostText>{text}</StyledPostText>
        {img !== null ? (
          <StyledImgWrapper>
            <img
              draggable="false"
              alt="img"
              src={`data:image/jpeg;base64,${img}`}
              width={300}
            ></img>
          </StyledImgWrapper>
        ) : (
          <></>
        )}

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
              id={comment.id}
              text={comment.text}
              author={comment.user.username}
              created={comment.created}
              img={comment.img}
              username={username}
              setEditComment={setEditComment}
              setEditCommentText={setEditCommentText}
              setEditCommentId={setEditCommentId}
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

      {editComment === true ? (
        <EditComment
          commentId={editCommentId}
          postId={id}
          setComments={setComments}
          setEditComment={setEditComment}
          setText={setEditCommentText}
          text={editCommentText}
          setImg={setEditCommentImg}
          img={editCommentImg}
        ></EditComment>
      ) : (
        <></>
      )}
    </>
  );
};
export default Post;
