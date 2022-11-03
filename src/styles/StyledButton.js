import styled from "styled-components";

const StyledButton = styled.button`
  height: 30px;
  border-radius: 4px;
  background-color: #00abb3;
  border: none;
  margin-top: 4px;
  color: #eaeaea;
  cursor: pointer;
  padding: 8px;
  font-size: 15px;

  &:hover {
    transform: scale(1.02);
  }
`;

export default StyledButton;
