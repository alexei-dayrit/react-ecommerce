import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
  margin: 1.4rem 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.h1`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.2rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.2rem;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.8rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.2rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP.</Logo>
        <Description>
          A store dedicated to ensuring you&#39;ll have the best for any and
          every occasion.
        </Description>
        <SocialContainer>
          <SocialIcon color='#3b5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='#34405f'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='#55acee'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='#e60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Helpful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 123 Lombard Street , SanFrancisco CA 94016
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> 1-(234)-567-8900
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> alexeidayrit@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

      </Right>
    </Container>
  );
};

export default Footer;
