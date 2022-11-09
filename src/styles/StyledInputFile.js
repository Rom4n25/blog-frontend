import styled from "styled-components";

const StyledInputFile = styled.input.attrs({ type: "file" })`
  position: absolute;
  color: #b2b2b2;
  cursor: pointer;
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
  }

  &::file-selector-button {
    width: 25px;
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
