import styled from "styled-components";
import { ReactComponent as myIcon } from "../svg/image.svg";

const IconImg = styled(myIcon)`
  position: absolute;
  width: 100%;
  width: 25px;
  height: 25px;
  fill: #00abb3;
  &:hover {
    transform: scale(1.1);
  }
`;

export default IconImg;
