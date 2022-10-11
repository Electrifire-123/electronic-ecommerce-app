import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    margin: 3px;
    height: 50vh ;
    min-width:30%;
    width: 300px;
    object-fit: contain;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 20px;
    
`
const Button = styled.button`
    color: gray;
    padding: 10px;
    border: none;
    background-color: white;
    cursor: pointer;
    color: gray;
    font-weight: 600;
`
const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.image}alt="Category-Image"/>
        <Info>
            <Title>{item.title}</Title>
            <Button><Link to={`productpage/${item.title}`}>Shop Now</Link></Button>
        </Info>

    </Container>
  )
}

export default CategoryItem;