import StyledComment from "../../styles/Messages/Comment/StyledComment";
import StyledText from "../../styles/Messages/StyledText";
import StyledImgWrapper from "../../styles/Messages/StyledImgWrapper";
import EditMessage from "./EditMessage";
import CommentData from "../../services/CommentData";
import { useState, useEffect } from "react";
import Header from "./Header";
const CommentMessage = ({
  id,
  text,
  image,
  author,
  dateCreated,
  setComments,
  points,
  loggedUser,
  postId,
  newComment,
  setNewComment,
}) => {
  const [pointsNumber, setPointsNumber] = useState(points.length);
  const [isPointAwarded, setPointAwarded] = useState(false);
  const [shouldEdit, setShouldEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedImage, setEditedImage] = useState(null);

  useEffect(() => {
    for (const element of points) {
      if (element.user.username === loggedUser) {
        setPointAwarded(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editComment = () => {
    const formData = new FormData();

    if (editedImage) {
      formData.append("file", editedImage);
    }
    formData.append("text", editedText);
    formData.append("commentId", id);

    CommentData()
      .editCommentById(formData, id)
      .then(() => {
        CommentData()
          .getComments(postId)
          .then((comments) => {
            setComments(comments);
            setShouldEdit(false);
          });
      });
  };

  const deleteComment = () => {
    CommentData()
      .deleteCommentById(id)
      .then(() => {
        CommentData()
          .getComments(postId)
          .then((comments) => {
            setComments(comments);
          })
          .catch(() => setComments([]));
      });
  };

  const addPoint = () => {
    CommentData()
      .addPoint(id)
      .then((response) => {
        if (response.status !== 400) {
          setPointsNumber(pointsNumber + 1);
          setPointAwarded(true);
        } else {
          window.alert("You've already given a point to this Comment!");
        }
      });
  };

  return (
    <>
      <StyledComment>
        <Header
          addComment={() => setNewComment(!newComment)}
          author={author}
          points={pointsNumber}
          isPointAwarded={isPointAwarded}
          addPoint={addPoint}
          dateCreated={dateCreated}
          loggedUser={loggedUser}
          editMessageEffect={() => setShouldEdit(!shouldEdit)}
          deleteMessageEffect={deleteComment}
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
      </StyledComment>
      {shouldEdit === true ? (
        <EditMessage
          text={editedText}
          setText={setEditedText}
          image={image}
          setImage={setEditedImage}
          submit={editComment}
        ></EditMessage>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentMessage;
