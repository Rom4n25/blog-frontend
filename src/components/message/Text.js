import StyledText from "../../styles/Messages/StyledText";
import { Link } from "react-router-dom";
import StyledTag from "../../styles/Messages/StyledTag";

const Text = ({ tag, text }) => {
  return (
    <>
      <StyledText>{text}</StyledText>
      <div style={{ display: "flex", width: "100%", gap: "4px" }}>
        {tag.map((e) => (
          <StyledTag key={e.id}>
            <Link id="user_link" to={"/tag/" + e.name}>
              #{e.name}
            </Link>
          </StyledTag>
        ))}
      </div>
    </>
  );
};
export default Text;
