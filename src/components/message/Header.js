import StyledHeader from "../../styles/Messages/StyledHeader";
import StyledAuthor from "../../styles/Messages/StyledAuthor";
import StyledDate from "../../styles/Messages/StyledDate";
import StyledHeaderButton from "../../styles/Messages/StyledHeaderButton";
import StyledAuthorDateWrapper from "../../styles/Messages/StyledAuthorDateWrapper";
import { Link } from "react-router-dom";

const Header = ({
  dateCreated,
  author,
  points,
  addComment,
  addPoint,
  isPointAwarded,
  loggedUser,
  editMessageEffect,
  deleteMessageEffect,
}) => {
  return (
    <StyledHeader>
      <StyledAuthorDateWrapper>
        <StyledAuthor>
          <Link id="user_link" to={"/user/" + author} state={{ loggedUser }}>
            @{author + " "}
          </Link>
        </StyledAuthor>
        <StyledDate>{new Date(dateCreated).toLocaleString()}</StyledDate>
      </StyledAuthorDateWrapper>
      <div style={{ display: "flex" }}>
        {loggedUser === author ? (
          <>
            <StyledHeaderButton danger onClick={() => deleteMessageEffect()}>
              delete &#10005;
            </StyledHeaderButton>

            <StyledHeaderButton onClick={() => editMessageEffect()}>
              edit &#9998;
            </StyledHeaderButton>
          </>
        ) : (
          <></>
        )}
        <StyledHeaderButton primary onClick={addComment}>
          reply &#8631;
        </StyledHeaderButton>
        {isPointAwarded ? (
          <StyledHeaderButton pointAdded onClick={addPoint}>
            +{points}
          </StyledHeaderButton>
        ) : (
          <StyledHeaderButton point onClick={addPoint}>
            +{points}
          </StyledHeaderButton>
        )}
      </div>
    </StyledHeader>
  );
};
export default Header;
