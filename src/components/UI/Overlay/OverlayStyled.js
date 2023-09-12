import { styled } from "styled-components";

export const OverlayStyled = styled.div`
  display: ${props => (props.open ? "flex" : "none")};
  position: fixed;
  top: ${props => (props.modal ? "0" : "70px")};
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${props => (props.modal ? "99" : "0")};
  background: ${props => (props.modal ? "rgba(0, 0, 0, .3)" : "rgba(114, 179, 232, .3)")};
  backdrop-filter: blur(.5rem);
  -webkit-backdrop-filter: blur(.5rem);
`;