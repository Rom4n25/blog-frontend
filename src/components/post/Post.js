import StyledPost from "../../styles/Messages/Post/StyledPost";
import Comment from "../comment/Comment";
import { useState } from "react";
import StyledShowCommentsButton from "../../styles/Messages/Post/StyledShowCommentsButton";
import StyledText from "../../styles/Messages/StyledText";
import StyledMessagesContainer from "../../styles/Messages/StyledMessagesContainer";
import NewComment from "../comment/NewComment";
import PostHeader from "./PostHeader";
import StyledImgWrapper from "../../styles/Messages/StyledImgWrapper";
import EditMessage from "../Message/EditMessage";
import PostData from "../../services/PostData";

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
  const [shouldEdit, setShouldEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedImage, setEditedImage] = useState(null);

  const addComment = () => {
    setNewComment(!newComment);
    setShowComments(true);
  };

  const editPost = () => {
    const formData = new FormData();

    if (editedImage) {
      formData.append("file", editedImage);
    }
    formData.append("text", editedText);

    PostData()
      .editPostById(formData, id)
      .then(() => {
        PostData()
          .getAllPosts(0)
          .then((posts) => {
            setPosts(posts);
            setShouldEdit(false);
          });
      });
  };

  return (
    <>
      <StyledPost>
        <PostHeader
          addComment={addComment}
          author={author}
          dateCreated={dateCreated}
          loggedUser={loggedUser}
          editPostEffect={() => setShouldEdit(true)}
        ></PostHeader>
        <StyledText>{text}</StyledText>
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

        <StyledShowCommentsButton
          value={showComments}
          onClick={() => setShowComments(!showComments)}
        >
          {comments.length > 0 ? (
            <p>show comments ({comments.length})&#8628;</p>
          ) : (
            <></>
          )}
        </StyledShowCommentsButton>
      </StyledPost>

      {shouldEdit === true ? (
        <EditMessage
          text={editedText}
          setText={setEditedText}
          image={image}
          setImage={setEditedImage}
          submit={editPost}
        ></EditMessage>
      ) : (
        <></>
      )}

      <StyledMessagesContainer>
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
      </StyledMessagesContainer>

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
