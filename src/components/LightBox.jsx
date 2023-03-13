import React, { useState } from 'react'
import { ProductInfo } from '../productApi'
import styled from 'styled-components';
import { CartState } from '../context/Contexts';
import { FaTimes } from 'react-icons/fa';

const LightBox = () => {

    const { handleLightBox } = CartState();
    const [index, setIndex] = useState(0);

  return (
      <Wrapper>
          {ProductInfo.map((info) => (
              <>
                    <LargeImage>
                      <img src={info.images[index].src} alt={info.title} className='main__image' />
                      <FaTimes className='close-icon' onClick={handleLightBox} />
                    </LargeImage>
                    <SmallImage>
                        {info.images.map((image, i) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.title}
                                onMouseEnter={()=> setIndex(i)}
                            />
                        ))}
                    </SmallImage>
              </>
            ))}
      </Wrapper>
  )
}

export default LightBox


const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--Black);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const LargeImage = styled.div`

    width: 420px;
    height: auto;
    border-radius: 15px;
    cursor: pointer;
    position: relative;

    .main__image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        border-radius: 15px;

    }

    .close-icon{
        position: absolute;
        top: -35px;
        right: 0;
        cursor: pointer;
        font-size: 1.5rem;
        color: var(--White);

        &:hover{
            color: var(--Orange);
        }
    }
`


const SmallImage = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 1rem 0;
    width: 100%;

    img{
        width: 70px;
        border-radius: 10px;
        cursor: pointer;
        transition: opacity 250ms ease-in-out;

        &:hover{
            opacity: 0.5;
            border: 2px solid var(--Orange);
        }
    }
`