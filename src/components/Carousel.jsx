import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { carouselItems } from '../data.js';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #f9f1f1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 9999;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${props => props.carouselIndex * -100}vw);
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 90%;
  object-fit: contain;
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 40%;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 3rem 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleClick = direction => {
    if (direction === 'left') {
      setCarouselIndex(carouselIndex > 0 ? carouselIndex - 1 : 2);
    } else {
      setCarouselIndex(carouselIndex < 2 ? carouselIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper carouselIndex={carouselIndex}>
        {carouselItems.map(item => {
          return <>
            <Item key={item.id} bg={item.bg}>
              <ImageContainer>
                <Image src={item.src} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>VIEW NOW</Button>
              </InfoContainer>
            </Item>;
          </>;
        })}
      </Wrapper>

      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>

    </Container>
  );
};

export default Carousel;
