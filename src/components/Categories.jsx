import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item => {
        return <CategoryItem key={item.id} item={item}/>;
      })}
    </Container>
  );
};

export default Categories;
