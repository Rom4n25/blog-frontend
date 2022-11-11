import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 15px;
  background-color: #00abb3;
  height: 65px;
  border-bottom: 1px solid #00abb3;
  justify-content: space-between;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`;

export default StyledHeader;
