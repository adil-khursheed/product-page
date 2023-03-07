import React, { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import ProductDetails from './pages/ProductDetails';

const App = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Overlay toggleMenu={toggleMenu} />
      <ProductDetails />
    </>
  )
}

export default App


const Overlay = styled.div`
    display: ${({toggleMenu}) => toggleMenu ? 'block' : 'none'};
    width: 100%;
    height: 100vh;
    background-color: var(--Black);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 350ms ease-in;
    z-index: 999;
`