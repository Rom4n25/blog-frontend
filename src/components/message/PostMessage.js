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
  points,
  loggedUser,
  setPosts,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [commentList, setCommentList] = useState(comments);
  const [pointList, setPointList] = useState(points.length);
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

  const deletePost = () => {
    PostData()
      .deletePostById(id)
      .then(() =>
        PostData()
          .getAllPosts(0)
          .then((posts) => setPosts(posts))
      );
  };

  const addPoint = () => {
    PostData()
      .addPoint(id)
      .then((response) => {
        if (response.status !== 400) {
          setPointList(pointList + 1);
        }
      });
  };

  return (
    <>
      <StyledPost>
        <Header
          addComment={() => setNewComment(!newComment)}
          addPoint={addPoint}
          author={author}
          dateCreated={dateCreated}
          points={pointList}
          loggedUser={loggedUser}
          editMessageEffect={() => setShouldEdit(!shouldEdit)}
          deleteMessageEffect={deletePost}
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
          {commentList.length > 0 ? (
            <p>
              {showComments
                ? "hide comments (" + commentList.length + ")"
                : "show comments (" + commentList.length + ")"}
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
              points={comment.pointComment}
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
