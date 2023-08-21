import { styled } from "styled-components";

export const ContactContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;
export const ContactContentStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  gap: 1rem;
  @media (max-width: 768px) {
      flex-direction: column;
  }
`;
export const ImgContainerStyled = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: .3rem;
  border: .3rem solid var(--selective-yellow);
  width: 50%;
  max-width: 1350px;
  aspect-ratio: 4/3;
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  
  @media (max-width: 992px) {
    aspect-ratio: 1;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;
export const FormContainerStyled = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    gap: 2rem;
    width: 100%;
    @media (max-width: 1300px) {
        gap: 1rem;
    }
    input, textarea {
      width:100%;
      border: none;
      border-bottom: 4px solid var(--light-blue);
      border-radius: 5px;
      padding: 5px !important;
      transition: all ease .3s;
      font-family: var(--body-font);
      background-color: transparent;
      color: var(--selective-yellow);
    }
    input:hover, textarea:hover, input:focus, textarea:focus {
      border: none;
      border-bottom: 4px solid var(--selective-yellow);
      background-color: white;
      color: var(--dark-blue);
      transition: all ease .3s;
    }
    input::placeholder, textarea::placeholder {
      color: var(--light-blue);
      font-weight: 500;
    }
    input{
      border-bottom: 4px solid var(--light-blue);
      border-radius: 5px;
      padding: 3px;
    }
    textarea {
      border-bottom: 4px solid var(--light-blue);
      border-radius: 5px;
      padding: 3px;
    }
    button {
      width: 50%;
      @media (max-width: 992px) {
          width: 100%;
      }
    }
  }

`;
