import { styled } from "styled-components";

export const OverlayStyled = styled.div`
  display: ${props => (props.open ? "flex" : "none")};
  position: fixed;
  top: 70px;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  background: rgba(114, 179, 232, .3);
  backdrop-filter: blur(.5rem);
  -webkit-backdrop-filter: blur(.5rem);
`;