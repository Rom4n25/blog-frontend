import StyledPostHeader from "../../styles/Post/StyledPostHeader";
import StyledPostAuthor from "../../styles/Post/StyledPostAuthor";
import StyledPostDate from "../../styles/Post/StyledPostDate";
import StyledCommentButton from "../../styles/Comment/StyledCommentButton";
import { Link } from "react-router-dom";

const PostHeader = ({
  dateCreated,
  author,
  addComment,
  loggedUser,
  editPostEffect,
}) => {
  return (
    <StyledPostHeader>
      <div>
        <StyledPostAuthor>
          <Link id="user_link" to={"/user/" + author} state={{ loggedUser }}>
            @{author + " "}
          </Link>
        </StyledPostAuthor>
        <StyledPostDate>{new Date(dateCreated).toUTCString()}</StyledPostDate>
      </div>
      <div>
        {loggedUser === author ? (
          <StyledCommentButton onClick={() => editPostEffect()}>
            edit &#9998;
          </StyledCommentButton>
        ) : (
          <></>
        )}
        <StyledCommentButton onClick={addComment}>
          reply &#8631;
        </StyledCommentButton>
      </div>
    </StyledPostHeader>
  );
};
export default PostHeader;
