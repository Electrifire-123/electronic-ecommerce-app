import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';

const Info=styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 320px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

// const Circle=styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
// `;

const Image=styled.img`
    flex: 1;
    height: 75%;
    width: 70%;
    z-index: 2;
    margin-right: 5px;
    object-fit: contain;
`;

const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Title = styled.div`
    margin-bottom: 5px;
    font-weight: 600;

`;
const Rating = styled.div`
    margin-bottom: 5px;
    font-weight: 500;
`;
const Price = styled.div`
    margin-bottom: 5px;
    font-weight: 400;
    text-decoration: line-through;
    color: red;
`;
const DiscountedPrice = styled.div`
    margin-bottom: 5px;
    font-weight: 500;

`;
const Discount = styled.div`
    font-weight: 600;
`;

const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({product}) => {
  return (
    <Container>
        {/* <Circle/> */}
        <Image src={product.imageUrl}/>
        <Details>
            <Title>{product.productName.slice(0,50)}...</Title>
            <Rating></Rating>
            <Price>₹{product.price}</Price>
            <DiscountedPrice></DiscountedPrice>
            <Discount>{product.discount}-Off</Discount>
        </Details>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product