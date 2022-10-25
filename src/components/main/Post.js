import StyledPost from "../styles/Post";

const Post = ({ text, author }) => {
  return (
    <StyledPost>
      <div>{text}</div>
      <div>{author}</div>
    </StyledPost>
  );
};
export default Post;
