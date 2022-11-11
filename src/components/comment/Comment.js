import StyledComment from "../../styles/Comment/StyledComment";
import StyledCommentAuthor from "../../styles/Comment/StyledCommentAuthor";
import StyledCommentDate from "../../styles/Comment/StyledCommentDate";
import StyledCommentHeader from "../../styles/Comment/StyledCommentHeader";
import StyledCommentText from "../../styles/Comment/StyledCommentText";
import StyledImgWrapper from "../../styles/StyledImgWrapper";
import StyledCommentButton from "../../styles/Comment/StyledCommentButton";
import EditComment from "./EditComment";
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
  const [editComment, setEditComment] = useState(false);

  const editCommentEffect = () => {
    setEditComment(true);
  };

  return (
    <>
      <StyledComment>
        <StyledCommentHeader>
          <div>
            <StyledCommentAuthor>@{author + " "}</StyledCommentAuthor>
            <StyledCommentDate>
              {new Date(created).toUTCString()}
            </StyledCommentDate>
          </div>
          {loggedUser === author ? (
            <StyledCommentButton onClick={() => editCommentEffect()}>
              edit &#9998;
            </StyledCommentButton>
          ) : (
            <></>
          )}
        </StyledCommentHeader>
        <StyledCommentText>{text}</StyledCommentText>
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
      {editComment === true ? (
        <EditComment
          commentId={id}
          postId={postId}
          setComments={setCommentList}
          setEditComment={setEditComment}
          text={text}
          image={image}
        ></EditComment>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
