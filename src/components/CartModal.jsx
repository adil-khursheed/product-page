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
                  <>
                  <Wrapper>
                      {
                          cart.map((prod) => (
                            <>
                                <Product key={prod.id}>
                                    <div className="cart__image">
                                        <img src={prod.images[0].src} alt={prod.title}/>
                                    </div>
                                    <div className="cart__info">
                                        <p className='title'>{prod.title}</p>
                                        <div className="cart__amount">
                                              <p>{prod.price} x 3 </p>
                                              <p className="subtotal">Subtotal</p>
                                        </div>
                                    </div>
                                    <div className="delete__icon">
                                        <img src="/images/icon-delete.svg" alt="" />
                                    </div>
                                </Product>

                            </>
                          ))
                      }
                  </Wrapper>
                  <Checkout>
                        Checkout
                  </Checkout>
                  </>
              ) : (

                <CartEmpty>
                    Your cart is empty.
                </CartEmpty>
              )}
        </Modal>
      </>
  )
}

export default CartModal


const Modal = styled.div`
    position: absolute;
    // max-width: 320px;
    width: 320px;
    min-height: 220px;
    background-color: var(--White);
    border-radius: 5px;
    box-shadow: 0 18px 15px 0px var(--Grayish-blue);
    top: 50px;
    right: 0px;
    padding: 1.3rem 0;
    z-index: 1000;

    h4{
        font-size: 0.9rem;
        padding-bottom: 1.3rem;
        padding-left: 1.5rem;
        border-bottom: 1px solid var(--Grayish-blue);
    }

    @media screen and (max-width: 780px){
        box-shadow: none;
    }
`

const Wrapper = styled.div`
    padding: 1rem;
    padding-bottom: 0;
`

const Product = styled.div`

    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    .cart__image{
        width: 50px;
        border-radius: 5px;


        img{
            width: 100%;
            border-radius: 5px;
        }
    }

    .cart__info{
        flex: 1;

        .title{
            font-size: 0.85rem;
            margin-bottom: 0.3rem;
        }

        .cart__amount{
            display: flex;
            font-size: 0.9rem;
            gap: 0.6rem;
            color: var(--Dark-grayish-blue);

            .subtotal{
                font-weight: 700;
                color: var(--Very-dark-blue);
            }
        }
    }

    .delete__icon{
        cursor: pointer;
    }
`


const Checkout = styled.button`
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 0.8rem;
    color: var(--White);
    background-color: var(--Orange);
    border: none;
    outline: none;
    border-radius: 6px;

`


const CartEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--Dark-grayish-blue);
`