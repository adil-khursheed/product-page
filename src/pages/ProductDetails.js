import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { ProductInfo } from '../productApi';
import { CartState } from '../context/Contexts';

const ProductDetails = () => {

    const { decQty, incQty, qty, addToCart } = CartState();
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        if (index == 0) {
            setIndex(index)
        } else {
            setIndex(index - 1)
        }
    }

  return (
      <>
          <Wrapper>
              {ProductInfo.map((info) => (
                  <>
                        <LeftGrid key={info.id}>
                            <LargeImage>
                                  <img src={info.images[index].src} alt={info.title} className='main__image' />
                                  <div className="previous-icon" onClick={prevSlide}>
                                    <img src="/images/icon-previous.svg" alt="" />
                                  </div>
                                  <div className="next-icon">
                                     <img src="/images/icon-next.svg" alt="" />
                                  </div>
                            </LargeImage>
                            <SmallImage>
                                {info.images.map((image, i) => (
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        onClick={()=> setIndex(i)}
                                    />
                                ))}
                            </SmallImage>
                        </LeftGrid>
                        <RightGrid>
                            <p className="subtitle">
                                {info.subtitle}
                            </p>
                            <h2 className='title'>
                                {info.title}
                            </h2>
                            <p className="description">
                                {info.description}
                            </p>
                            <div className="price">
                                <div className="discounted__price">
                                      <h3 className="sale__price">${info.price}</h3>
                                    <h5 className="discount__percentage">
                                        {info.discount}
                                    </h5>
                                </div>
                                <del className="regular__price">
                                    ${info.mrp}
                                </del>
                            </div>
                            <div className="button-wrapper">
                                <div className="quantity__wrapper">
                                    <button className="decrement" onClick={decQty}>
                                        <FaMinus />
                                    </button>
                                    <p className="quantity">
                                        {qty}
                                    </p>
                                      <button className="increment" onClick={incQty}>
                                        <FaPlus />
                                    </button>
                                </div>
                                  <button className='add__to__cart' onClick={()=> addToCart(info, qty)}>
                                  Add to cart
                              </button>
                            </div>
                        </RightGrid>
                      </>
                  ))}
          </Wrapper>
      </>
  )
}

export default ProductDetails


const Wrapper = styled.div`
    max-width: 1024px;
    width: 100%;
    min-height: calc(100vh-80px);
    margin: 0 auto;
    display: flex;
    gap: 3rem;
    padding: 3rem;

    @media screen and (max-width: 780px){
        flex-direction: column;
        padding: 0;
        gap: 0;
    }
`

const LeftGrid = styled.div`
    flex: 1;
`

const LargeImage = styled.div`

    width: 380px;
    height: 380px;
    border-radius: 15px;
    cursor: pointer;
    position: relative;

    .main__image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;

    }

    .previous-icon,
    .next-icon{
        position: absolute;
        display: none;
    }

    @media screen and (max-width: 780px){
        width: 100%;
        height: 500px;
        border-radius: 0;

        .main__image{
            border-radius: 0;
        }

        .previous-icon,
        .next-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            top: 50%;
            transform: translateY(-50%);
            width: 35px;
            height: 35px;
            background-color: var(--White);
            // padding: 10px;
            border-radius: 50%;
            z-index: 0;
        }

        .previous-icon{
            left: 10px;
        }

        .next-icon{
            right: 10px;
        }

        .previous-icon img,
        .next-icon img{
            width: 10px;
        }
    }

    @media screen and (max-width: 550px){
        height: 330px;
    }

`

const SmallImage = styled.div`
    display: flex;
    gap: 10px;
    margin: 1rem 0;
    width: 100%;

    img{
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
        transition: opacity 250ms ease-in-out;

        &:hover{
            opacity: 0.5;
            border: 2px solid var(--Orange);
        }
    }


    @media screen and (max-width: 780px){
        display: none;
    }
`


const RightGrid = styled.div`
    padding: 1.5rem;

    .subtitle{
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1.42px;
        font-weight: 700;
        color: var(--Orange);
        margin-bottom: 1rem;
    }

    .title{
        font-size: 3rem;
        color: var(--Very-dark-blue);
        margin-bottom: 1rem;
        line-height: 1.125;
    }

    .description{
        font-size: 1.05rem;
        color: var(--Dark-grayish-blue);
        line-height: 1.5;
        margin-bottom: 2rem;
    }

    .price{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;


        .discounted__price{
            display: flex;
            align-items: center;
            gap: 1.5rem;

            .sale__price{
                color: var(--Very-dark-blue);
                font-size: 1.6rem;
            }

            .discount__percentage{
                width: 50px;
                height: 30px;
                background-color: var(--Pale-orange);
                color: var(--Orange);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
            }
        }

        .regular__price{
            color: var(--Grayish-blue);
        }
    }

    .button-wrapper{
        display: flex;
        align-items: center;
        gap: 1rem;



        .quantity__wrapper{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 1rem 1rem;
            background-color: var(--Light-grayish-blue);
            border-radius: 5px;

            button{
                background: transparent;
                border: none;
                outline: none;
                color: var(--Orange);
                cursor: pointer;
            }

            p{
                font-weight: 700;
                color: var(--Very-dark-blue);
            }
        }

        .add__to__cart{
            width: 100%;
            // margin: 1rem 0 2.5rem;
            padding: 1rem;
            border: none;
            outline: none;
            background-color: var(--Orange);
            color: var(--White);
            font-size: 1rem;
            font-weight: 700;
            border-radius: 6px;
            cursor: pointer;
        }
    }


    @media screen and (max-width: 950px){
        .title{
            font-size: 2.2rem;
        }

        .price{
            flex-direction: row;
            align-items: center;
        }

        .button-wrapper{
            flex-direction: column;
        }
    }

`