import React, { useState } from 'react'
import styled from 'styled-components'
import CartModal from './CartModal';
import {BsCart3} from 'react-icons/bs'
import { CartState } from '../context/Contexts';

const Header = ({ toggleMenu, setToggleMenu }) => {

    const { state: { cart } } = CartState();

    const [toggleCartModal, setToggleCartModal] = useState(false);

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
            </Nav>
        </LeftNav>
        <RightNav>
            {toggleCartModal && <CartModal />}

            <Cart onClick={()=> setToggleCartModal(!toggleCartModal)}>
                <BsCart3 className='cart__icon' />
                <span>{cart.length}</span>
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
    // padding: 2rem 0rem;
    height: 80px;
    border-bottom: 1px solid var(--Grayish-blue);
    position: relative;

    @media screen and (max-width: 1024px){
        padding: 2rem;
    }

    @media screen and (max-width: 768px){
        padding: 1rem 1.5rem;
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
        z-index: 10;
    }
`

const Logo = styled.div`

    @media screen and (max-width: 768px){

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

            &:hover{
                font-weight: 700;
                color: var(--Dark-blue);
            }
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
    position: relative;

    @media screen and (max-width: 768px){
        gap: 1rem;
    }
`

const Cart = styled.div`
    position: relative;
    cursor: pointer;
    width: 18px;

    .cart__icon{
        width: 100%;
        color: var(--Dark-grayish-blue);


        &:hover{
            color: var(--Dark-blue);
        }
    }

    span{
        position: absolute;
        top: -4px;
        right: -5px;
        font-size: 0.4rem;
        background: var(--Orange);
        width: 15px;
        height: 10px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
`

const Avatar = styled.img`
    width: 40px;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        border: 2px solid var(--Orange);
    }

    @media screen and (max-width: 768px){
        width: 30px;
    }
`