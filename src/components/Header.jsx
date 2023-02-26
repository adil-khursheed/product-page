import React from 'react'
import styled from 'styled-components'

const Header = ({toggleMenu, setToggleMenu}) => {

  return (
    <MainHeader>
        <LeftNav>
              <MenuIcon
                toggleMenu={toggleMenu}
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                {toggleMenu ?
                    <img src="/images/icon-close.svg" alt="" />
                    :
                    <img src="/images/icon-menu.svg" alt="" />
                }
            </MenuIcon>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            <Nav toggleMenu = {toggleMenu}>
                <ul>
                    <li><a href="/">Collections</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                  {/* <Overlay /> */}
            </Nav>
        </LeftNav>
        <RightNav>
            <Cart>
                <img src="/images/icon-cart.svg" alt="" />
            </Cart>
            <Avatar src="/images/image-avatar.png" />
        </RightNav>
    </MainHeader>
  )
}

export default Header;


const MainHeader = styled.header`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0rem;
    border-bottom: 1px solid var(--Grayish-blue);
    position: relative;

    @media screen and (max-width: 1024px){
        padding: 2rem;
    }

    @media screen and (max-width: 768px){
        padding: 1rem 2rem;
        border-bottom: none;
    }
`

const LeftNav = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const MenuIcon = styled.div`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px){
        display: block;
        position: fixed;
        z-index: 10;
    }
`

const Logo = styled.div`

    @media screen and (max-width: 768px){
        margin-left: 2rem;

        img{
            width: 110px;
        }
    }
`

const Nav = styled.nav`

    ul{
        list-style: none;
        display: flex;
        gap: 2rem;
        font-size: 0.85rem;


        a{
            text-decoration: none;
            color: var(--Dark-grayish-blue);
        }
    }


    @media screen and (max-width: 768px){
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--White);
        width: 50%;
        height: 100vh;
        transform: ${({ toggleMenu }) => toggleMenu ? 'translateX(0)' : 'translateX(-100%)'};
        transition: all 300ms ease-in-out;
        z-index: 1;

        ul{
            flex-direction: column;
            margin-top: 100px;
            padding: 0 2rem;
            font-size: 0.9rem;
            font-weight: 700;

            a{
                color: var(--Very-dark-blue);
            }
        }
    }
`

const RightNav = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media screen and (max-width: 768px){
        gap: 1rem;
    }
`

const Cart = styled.div`

`

const Avatar = styled.img`
    width: 40px;

    @media screen and (max-width: 768px){
        width: 30px;
    }
`