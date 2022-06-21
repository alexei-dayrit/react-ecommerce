import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 1px;
`;

const Announcement = () => {
  return (
    <Container>
      Free Shipping on Orders Over $50
    </Container>
  );
};

export default Announcement;
