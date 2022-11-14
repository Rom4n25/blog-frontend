import StyledComment from "../../styles/Messages/Comment/StyledComment";
import StyledAuthor from "../../styles/Messages/StyledAuthor";
import StyledDate from "../../styles/Messages/StyledDate";
import StyledHeader from "../../styles/Messages/StyledHeader";
import StyledText from "../../styles/Messages/StyledText";
import StyledImgWrapper from "../../styles/StyledImgWrapper";
import StyledHeaderButton from "../../styles/Messages/StyledHeaderButton";
import EditComment from "./EditComment";
import StyledAuthorDateWrapper from "../../styles/Messages/StyledAuthorDateWrapper";
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
        <StyledHeader>
          <StyledAuthorDateWrapper>
            <StyledAuthor>@{author + " "}</StyledAuthor>
            <StyledDate>{new Date(created).toUTCString()}</StyledDate>
          </StyledAuthorDateWrapper>
          {loggedUser === author ? (
            <StyledHeaderButton onClick={() => editCommentEffect()}>
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
