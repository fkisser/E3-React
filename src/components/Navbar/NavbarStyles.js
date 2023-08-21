import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarContainerStyled = styled.header`
  z-index: 99;
  height: 70px;
  background-color: var(--mid-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
export const NavbarContentWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  width: 100%;
  max-width: 2000px;
  position: relative;
`;

export const LogoNavStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const LinksContainerStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media(max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--mid-blue);
    position: fixed;
    top: 70px;
    right: ${props => (props.open ? "0" : "-100%")};
    width: 50%;
    height: calc(100vh - 70px);
    transition: right 0.3s linear;
    -webkit-box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.75);
    box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.75);
  }
  @media(max-width: 576px) {
    width: 100%;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  color: white;
  background: none;
  border-radius: 1rem;
  gap: 5px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  &.active{
    color: var(--selective-yellow);
    background: var(--dark-blue);
  }
`;


export const UserNavLinkStyled = styled(NavLinkStyled)`
  color: var(--selective-yellow);

  span {
    font-weight: 600;
  }
  :hover {
    text-decoration: underline;
  }
`;
