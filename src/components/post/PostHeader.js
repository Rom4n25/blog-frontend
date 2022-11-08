import StyledPostHeader from "../../styles/Post/StyledPostHeader";
import StyledPostAuthor from "../../styles/Post/StyledPostAuthor";
import StyledPostDate from "../../styles/Post/StyledPostDate";
import StyledCommentButton from "../../styles/Comment/StyledCommentButton";
import { Link } from "react-router-dom";

const PostHeader = ({ created, author, addComment, username }) => {
  return (
    <StyledPostHeader>
      <div>
        <StyledPostAuthor>
          <Link id="user_link" to={"/user/" + author} state={{ username }}>
            @{author + " "}
          </Link>
        </StyledPostAuthor>
        <StyledPostDate>{new Date(created).toUTCString()}</StyledPostDate>
      </div>
      <div>
        {username === author ? (
          <StyledCommentButton onClick={() => console.log("edit")}>
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
