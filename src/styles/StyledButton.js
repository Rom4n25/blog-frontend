import styled from "styled-components";

const StyledButton = styled.button`
  height: 30px;
  align-self: center;
  border-radius: 4px;
  background-color: #00abb3;
  border: none;
  margin-top: 4px;
  color: #eaeaea;
  cursor: pointer;
  font-size: 14px;
  width: max-content;
  &:hover {
    transform: scale(1.01);
  }

  background-color: ${(props) => (props.primary ? "#00abb3" : "#3c4048")};
`;

export default StyledButton;
