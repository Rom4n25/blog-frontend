import styled from "styled-components";

const StyledCommentButton = styled.button`
  height: 30px;
  cursor: pointer;
  font-size: 15px;
  border: none;
  background-color: transparent;
  padding: 5px;

  ${(props) => {
    if (props.danger) {
      return `

        color: #b20000;
    `;
    } else if (props.primary) {
      return `
        color: #00abb3;
    `;
    } else if (props.point) {
      return `
      color: #F9F9F9;
  `;
    } else if (props.pointAdded) {
      return `
      color: #dc5f00;
  `;
    } else {
      return `
        color: #F8CB2E;
    `;
    }
  }}

  opacity: ${(props) => (props.light ? 0.5 : 1)};
`;

export default StyledCommentButton;
