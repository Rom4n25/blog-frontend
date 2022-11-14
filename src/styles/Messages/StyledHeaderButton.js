import styled from "styled-components";

const StyledCommentButton = styled.button`
  height: 30px;
  cursor: pointer;
  font-size: 15px;
  background-color: transparent;
  border: none;
  padding: 5px;

  color: ${(props) => (props.primary ? "#00abb3" : "#b2b2b2")};
  opacity: ${(props) => (props.light ? 0.5 : 1)};
`;

export default StyledCommentButton;
