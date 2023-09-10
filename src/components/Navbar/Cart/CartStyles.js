import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CartStyled = styled(motion.div)`
  z-index: 3;
  position: fixed;
  top: 70px;
  right: 0;
  width: 50%;
  height: calc(100vh - 70px);
  transition: right 0.3s linear;
  -webkit-box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.75);
  box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--dark-blue);
  padding: 1.5rem;
  @media (max-width: 576px) {
      width: 100%;
  }
  .cartHeader{
    display: flex;
    width: 100%;
    justify-content: flex - start;
    gap: 2rem;
  }
  .backBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    font-size: large;
    cursor: pointer;
    border-radius: .5rem;
    border-width: 0rem;
    background-color: var(--light-blue);
    color: var(--dark-blue);
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 100%;
  border-radius: .5rem;
  background-color: var(--mid-blue);
  padding: 1rem;
  overflow: scroll;
  .empty-msg {
    text-align: center;
    font-size: large;
    font-weight: 500;
  }
`;


export const CartItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: .5rem;
  color: var(--dark-blue);
  background-color: white;
  border-radius: .5rem;
  
  .item-content{ //todo menos el qhandler
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    img {
      height: 8rem;
      width: 8rem;
      object-fit: contain;
      object-position: center;
      border: .2rem solid var(--mid-blue);
      border-radius: .5rem;
    }
    .item-text {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: space-around;
      .item-title {
        font-size: medium;
        width: 100%;
      }
      .item-price {
        display: flex;
        font-weight: 900;
        font-size: large;
        color: var(--selective-yellow);
        border: .2rem solid var(--dark-blue);
        border-radius: .5rem;
        padding: .5rem;
        width: 10rem;
        justify-content: center;
      }
    }
  }
  .quantityHandler{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 3rem;
    border-radius: .3rem;
    gap: .5rem;
    .quantityBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: .3rem;
      color: white;
      font-weight: 900;
      font-size: x-large;
      cursor: pointer;
      :first-child{
        background-color: var(--dark-blue);
      }
      :last-child{
        background-color: var(--light-blue);
      }
    }
  }
`;

export const TotalContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: x-large;
  font-weight: 600;
  width: 100%;
  border-top: .2rem solid var(--light-blue);
  padding-top: .5rem;
  .total {
    color: var(--selective-yellow);
  }
`;

export const BtnsContainerStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .clear-btn {
    border: .3rem solid var(--light-blue);
    background-color: transparent;
    color: var(--light-blue);
  }
`;