import StyledComment from "../../styles/Messages/Comment/StyledComment";
import StyledAuthor from "../../styles/Messages/StyledAuthor";
import StyledDate from "../../styles/Messages/StyledDate";
import StyledHeader from "../../styles/Messages/StyledHeader";
import StyledText from "../../styles/Messages/StyledText";
import StyledImgWrapper from "../../styles/Messages/StyledImgWrapper";
import StyledHeaderButton from "../../styles/Messages/StyledHeaderButton";
import EditMessage from "../Message/EditMessage";
import StyledAuthorDateWrapper from "../../styles/Messages/StyledAuthorDateWrapper";
import CommentData from "../../services/CommentData";
import { useState } from "react";

const Comment = ({
  text,
  author,
  created,
  image,
  loggedUser,
  id,
  setCommentList,
  postId,
}) => {
  const [shouldEdit, setShouldEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedImage, setEditedImage] = useState(null);

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
            setCommentList(comments);
            setShouldEdit(false);
          });
      });
  };

  const editCommentEffect = () => {
    setShouldEdit(true);
  };

  return (
    <>
      <StyledComment>
        <StyledHeader>
          <StyledAuthorDateWrapper>
            <StyledAuthor>@{author + " "}</StyledAuthor>
            <StyledDate>{new Date(created).toUTCString()}</StyledDate>
          </StyledAuthorDateWrapper>
          {loggedUser === author ? (
            <StyledHeaderButton opacity onClick={() => editCommentEffect()}>
              edit &#9998;
            </StyledHeaderButton>
          ) : (
            <></>
          )}
        </StyledHeader>
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

export default Comment;
