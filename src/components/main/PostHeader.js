import StyledPostHeader from "../styles/Post/StyledPostHeader";
import StyledPostAuthor from "../styles/Post/StyledPostAuthor";
import StyledPostDate from "../styles/Post/StyledPostDate";
import StyledCommentButton from "../styles/Comment/StyledCommentButton";

const PostHeader = ({ created, author, addComment }) => {
  return (
    <StyledPostHeader>
      <div>
        <StyledPostAuthor>@{author + " "}</StyledPostAuthor>
        <StyledPostDate>{new Date(created).toUTCString()}</StyledPostDate>
      </div>
      <StyledCommentButton onClick={addComment}>
        reply &#8631;
      </StyledCommentButton>
    </StyledPostHeader>
  );
};
export default PostHeader;
