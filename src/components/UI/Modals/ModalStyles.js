import styled from "styled-components"

const DialogStyled = styled.div`
  position: fixed;
  z-index: 99;
  -webkit-box-shadow: 0 0 1rem 0 rgba(2, 48, 71, 1);
  -moz-box-shadow: 0 0 1rem 0 rgba(2, 48, 71, 1);
  box-shadow: 0 0 1rem 0 rgba(2, 48, 71, 1);
  text-align: center;
  display: flex;
`

export const InfoStyled = styled(DialogStyled)`
  bottom: ${props => (props.open ? "-.3rem" : "-100%")};
  transition: bottom 0.3s linear;
  height: 5rem;
  left: 1rem;
  right: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: larger;
  font-weight: bolder;
  border-radius: .3rem;
  padding: 0 .5rem;
  background-color: var(--light-blue);
  color: var(--dark-blue);
  @media (max-width: 576px) {
      font-size: medium;
  }
`
export const ConfirmStyled = styled(DialogStyled)`
  margin: auto;
  gap: 2rem;
  border-radius: .3rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;
  width: min(90vw, 30rem);
  background-color: var(--dark-blue);
  color: white;
  .confirm-btns {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .yes {
    color: white;
    background-color: transparent;
    border: .2rem solid white;
  }
  .no {
    color: white;
    background-color: var(--mid-blue);
  }
`

