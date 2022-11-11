import StyledPost from "../../styles/Post/StyledPost";
import Comment from "../comment/Comment";
import { useState } from "react";
import StyledCommentButton from "../../styles/Comment/StyledCommentButton";
import StyledPostText from "../../styles/Post/StyledPostText";
import StyledCommentContainer from "../../styles/Comment/StyledCommentContainer";
import NewComment from "../comment/NewComment";
import PostHeader from "./PostHeader";
import StyledImgWrapper from "../../styles/StyledImgWrapper";
import EditPost from "./EditPost";

const Post = ({
  id,
  text,
  image,
  author,
  dateCreated,
  comments,
  loggedUser,
  setPosts,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState(false);
  const [editPost, setEditPost] = useState(false);

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
          dateCreated={dateCreated}
          loggedUser={loggedUser}
          editPostEffect={() => setEditPost(true)}
        ></PostHeader>
        <StyledPostText>{text}</StyledPostText>
        {image !== null ? (
          <StyledImgWrapper>
            <img
              draggable="false"
              alt="img"
              src={`data:image/jpeg;base64,${image}`}
              width={300}
            ></img>
          </StyledImgWrapper>
        ) : (
          <></>
        )}

        <StyledCommentButton
          value={showComments}
          onClick={() => setShowComments(!showComments)}
        >
          {comments.length > 0 ? (
            <p>show comments ({comments.length})&#8628;</p>
          ) : (
            <></>
          )}
        </StyledCommentButton>
      </StyledPost>

      {editPost === true ? (
        <EditPost
          text={text}
          image={image}
          postId={id}
          setPosts={setPosts}
          editPost={setEditPost}
        ></EditPost>
      ) : (
        <></>
      )}

      <StyledCommentContainer>
        {showComments === true ? (
          commentList.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              text={comment.text}
              author={comment.user.username}
              created={comment.created}
              image={comment.img}
              loggedUser={loggedUser}
              setCommentList={setCommentList}
              postId={id}
            ></Comment>
          ))
        ) : (
          <></>
        )}
      </StyledCommentContainer>

      {newComment === true ? (
        <NewComment
          postId={id}
          setComments={setCommentList}
          setNewComment={setNewComment}
        ></NewComment>
      ) : (
        <></>
      )}
    </>
  );
};
export default Post;
