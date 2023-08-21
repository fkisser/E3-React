import { styled } from "styled-components";

export const MenuContainerStyled = styled.div`
  display: none;
  color: white;
  font-size: 1.8rem;
  @media(max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;