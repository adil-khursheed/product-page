import React from 'react'
import styled from 'styled-components'
import { CartState } from '../context/Contexts';

const CartModal = () => {

    const { state: { cart } } = CartState();

  return (
      <>
          <Modal>
              <h4>Cart</h4>
              {cart.length > 0 ? (
              <></>
              ) : (

                <div>
                    Your cart is empty.
                </div>
              )}
        </Modal>
      </>
  )
}

export default CartModal


const Modal = styled.div`
    position: absolute;
    // max-width: 320px;
    width: 280px;
    height: 220px;
    background-color: var(--White);
    border-radius: 5px;
    box-shadow: 0 18px 15px 0px var(--Grayish-blue);
    top: 50px;
    right: 0px;
    padding: 1.3rem 0;

    h4{
        font-size: 0.9rem;
        padding-bottom: 1.3rem;
        padding-left: 1.5rem;
        border-bottom: 1px solid var(--Grayish-blue);
    }

    div{
        height: calc(100% - 15px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--Dark-grayish-blue);
    }
`