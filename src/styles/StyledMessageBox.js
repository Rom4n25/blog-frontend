import styled from "styled-components";

const StyledMessageBox = styled.div`
  width: 130px;
  height: 96px;
  border: 1px solid rgb(0, 171, 179);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #3c4048;
  color: #eaeaea;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  position: absolute;
  z-index: 99;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 44%;
  opacity: 0.97;
`;

export default StyledMessageBox;
