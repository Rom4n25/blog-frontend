import StyledComment from "../../styles/Comment/StyledComment";
import StyledCommentAuthor from "../../styles/Comment/StyledCommentAuthor";
import StyledCommentDate from "../../styles/Comment/StyledCommentDate";
import StyledCommentHeader from "../../styles/Comment/StyledCommentHeader";
import StyledCommentText from "../../styles/Comment/StyledCommentText";
import StyledImgWrapper from "../../styles/StyledImgWrapper";
import StyledCommentButton from "../../styles/Comment/StyledCommentButton";

const Comment = ({
  text,
  author,
  created,
  img,
  username,
  setEditComment,
  setEditCommentId,
  setEditCommentText,
  id,
}) => {
  const editCommentEffect = () => {
    setEditCommentText(text);
    setEditCommentId(id);
    setEditComment(true);
  };

  return (
    <StyledComment>
      <StyledCommentHeader>
        <div>
          <StyledCommentAuthor>@{author + " "}</StyledCommentAuthor>
          <StyledCommentDate>
            {new Date(created).toUTCString()}
          </StyledCommentDate>
        </div>
        {username === author ? (
          <StyledCommentButton onClick={() => editCommentEffect()}>
            edit &#9998;
          </StyledCommentButton>
        ) : (
          <></>
        )}
      </StyledCommentHeader>
      <StyledCommentText>{text}</StyledCommentText>
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
    </StyledComment>
  );
};

export default Comment;
