import StyledHeader from "../../styles/Messages/StyledHeader";
import StyledAuthor from "../../styles/Messages/StyledAuthor";
import StyledDate from "../../styles/Messages/StyledDate";
import StyledHeaderButton from "../../styles/Messages/StyledHeaderButton";
import StyledAuthorDateWrapper from "../../styles/Messages/StyledAuthorDateWrapper";
import { Link } from "react-router-dom";

const PostHeader = ({
  dateCreated,
  author,
  addComment,
  loggedUser,
  editPostEffect,
}) => {
  return (
    <StyledHeader>
      <StyledAuthorDateWrapper>
        <StyledAuthor>
          <Link id="user_link" to={"/user/" + author} state={{ loggedUser }}>
            @{author + " "}
          </Link>
        </StyledAuthor>
        <StyledDate>{new Date(dateCreated).toUTCString()}</StyledDate>
      </StyledAuthorDateWrapper>
      <div style={{ display: "flex" }}>
        {loggedUser === author ? (
          <StyledHeaderButton onClick={() => editPostEffect()}>
            edit &#9998;
          </StyledHeaderButton>
        ) : (
          <></>
        )}
        <StyledHeaderButton onClick={addComment}>
          reply &#8631;
        </StyledHeaderButton>
      </div>
    </StyledHeader>
  );
};
export default PostHeader;
