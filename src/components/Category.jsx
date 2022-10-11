import React from 'react';
import styled from 'styled-components';
import { categories } from '../context/data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    /* height: 100vh; */
    flex-wrap: wrap;
`
const Category = () => {
  return (
    <Container>
        {
            categories.map((item) => (
                <CategoryItem item={item} key={item.id}/>
            ))
        }
    </Container>
  )
}

export default Category;