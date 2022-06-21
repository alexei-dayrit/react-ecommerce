import React from 'react';
import styled from 'styled-components';
import { products } from '../data';
import Product from '../components/Product';

const Container = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {products.map(item => (
         <Product key={item.id} item={item}/>
      ))}
    </Container>
  );
};

export default Products;
