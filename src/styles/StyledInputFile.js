import styled from "styled-components";

const StyledInputFile = styled.input.attrs({ type: "file" })`
  color: transparent;
  position: absolute;
  width: 25px;
  &:before {
    display: inline-block;
    border-radius: 3px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-size: 10pt;
    color: white;
    z-index: 1;
  }

  &::file-selector-button {
    visibility: hidden;
  }

  &:hover:before {
    border-color: black;
  }

  &:active:before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

export default StyledInputFile;
