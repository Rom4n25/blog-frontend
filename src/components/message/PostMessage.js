import StyledPost from "../../styles/Messages/Post/StyledPost";
import CommentMessage from "./CommentMessage";
import { useState } from "react";
import StyledShowCommentsButton from "../../styles/Messages/Post/StyledShowCommentsButton";
import StyledText from "../../styles/Messages/StyledText";
import StyledMessagesContainer from "../../styles/Messages/StyledMessagesContainer";
import NewMessage from "./NewMessage";
import Header from "./Header";
import StyledImgWrapper from "../../styles/Messages/StyledImgWrapper";
import EditMessage from "./EditMessage";
import PostData from "../../services/PostData";
import CommentData from "../../services/CommentData";

const PostMessage = ({
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
  const [newCommentText, setNewCommentText] = useState("");
  const [newCommentImage, setNewCommentImage] = useState(null);
  const [shouldEdit, setShouldEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedImage, setEditedImage] = useState(null);

  const addComment = () => {
    const formData = new FormData();
    if (newCommentImage) {
      formData.append("file", newCommentImage);
    }
    formData.append("text", newCommentText);
    formData.append("postId", id);

    CommentData()
      .addComment(formData)
      .then(() => {
        CommentData()
          .getComments(id)
          .then((comments) => {
            setCommentList(comments);
            setNewCommentText("");
            setNewCommentImage(null);
            setNewComment(false);
          });
      });

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
        <Header
          addComment={() => setNewComment(!newComment)}
          author={author}
          dateCreated={dateCreated}
          loggedUser={loggedUser}
          editPostEffect={() => setShouldEdit(!shouldEdit)}
        ></Header>
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
          onClick={() => {
            setShowComments(!showComments);
          }}
        >
          {comments.length > 0 ? (
            <p>
              {showComments
                ? "hide comments (" + comments.length + ")"
                : "show comments (" + comments.length + ")"}
            </p>
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
            <CommentMessage
              key={comment.id}
              id={comment.id}
              text={comment.text}
              author={comment.user.username}
              dateCreated={comment.created}
              image={comment.img}
              loggedUser={loggedUser}
              setComments={setCommentList}
              postId={id}
              newComment={newComment}
              setNewComment={setNewComment}
            ></CommentMessage>
          ))
        ) : (
          <></>
        )}
      </StyledMessagesContainer>

      {newComment === true ? (
        <NewMessage
          text={newCommentText}
          setText={setNewCommentText}
          image={newCommentImage}
          submit={addComment}
        ></NewMessage>
      ) : (
        <></>
      )}
    </>
  );
};
export default PostMessage;
