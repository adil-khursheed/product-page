import React from 'react'
import styled from 'styled-components'

const ProductDetails = () => {
  return (
      <>
          <Wrapper>
              <LeftGrid>
                  <LargeImage>
                      <img src="/images/image-product-1.jpg" alt="Main" />
                  </LargeImage>
                  <SmallImage>
                    <img src="/images/image-product-1-thumbnail.jpg" alt="Thumbnail" />
                    <img src="/images/image-product-2-thumbnail.jpg" alt="Thumbnail" />
                    <img src="/images/image-product-3-thumbnail.jpg" alt="Thumbnail" />
                    <img src="/images/image-product-4-thumbnail.jpg" alt="Thumbnail" />
                  </SmallImage>
              </LeftGrid>

              <RightGrid>
                  <p className="subtitle">
                    sneaker compnay
                  </p>
                  <h2 className='title'>
                      Fall Limited Edition Sneakers
                  </h2>
                  <p className="description">
                      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                  </p>
                  <div className="price">
                      <div className="discounted__price">
                          <h3 className="sale__price">$125.00</h3>
                          <h5 className="discount__percentage">
                              50%
                          </h5>
                      </div>
                      <div className="regular__price">
                          $250.00
                      </div>
                  </div>
                  <div className="button-wrapper">
                      <button className="decrement">
                          
                      </button>
                  </div>
              </RightGrid>
          </Wrapper>
      </>
  )
}

export default ProductDetails


const Wrapper = styled.div`

`

const LeftGrid = styled.div`

`

const LargeImage = styled.div`

    img{
        width: 100%;
    }

`

const SmallImage = styled.div`

`


const RightGrid = styled.div`

`