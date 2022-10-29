import StyledComment from "../styles/StyledComment";
import StyledCommentAuthor from "../styles/StyledCommentAuthor";
import StyledCommentText from "../styles/StyledCommentText";

const Comment = ({ text, author }) => {
  return (
    <StyledComment>
      <StyledCommentAuthor>@{author}</StyledCommentAuthor>
      <StyledCommentText>{text}</StyledCommentText>
    </StyledComment>
  );
};

export default Comment;
