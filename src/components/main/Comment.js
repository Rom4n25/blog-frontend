import StyledComment from "../../styles/Comment/StyledComment";
import StyledCommentAuthor from "../../styles/Comment/StyledCommentAuthor";
import StyledCommentDate from "../../styles/Comment/StyledCommentDate";
import StyledCommentHeader from "../../styles/Comment/StyledCommentHeader";
import StyledCommentText from "../../styles/Comment/StyledCommentText";

const Comment = ({ text, author, created }) => {
  return (
    <StyledComment>
      <StyledCommentHeader>
        <div>
          <StyledCommentAuthor>@{author + " "}</StyledCommentAuthor>
          <StyledCommentDate>
            {new Date(created).toUTCString()}
          </StyledCommentDate>
        </div>
      </StyledCommentHeader>

      <StyledCommentText>{text}</StyledCommentText>
    </StyledComment>
  );
};

export default Comment;
