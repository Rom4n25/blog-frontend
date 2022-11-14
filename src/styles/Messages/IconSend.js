import styled from "styled-components";
import { ReactComponent as myIcon } from "../../svg/send.svg";

const IconSend = styled(myIcon)`
  z-index: 10;
  width: 100%;
  width: 32px;
  height: 32px;
  fill: #00abb3;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export default IconSend;
