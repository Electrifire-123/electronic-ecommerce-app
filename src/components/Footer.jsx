import { Email, Facebook, GitHub, LinkedIn, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import payment from '../images/payments.png'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f3dada;
`;
const Top = styled.div`
    flex:8;
    display: flex;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`
    
`;
const Desc = styled.p`
    margin: 20px 0px;

`;
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;

`;
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payments = styled.img`
    height: 20%;
    width: 60%;
    margin: 0;
    object-fit: contain;
`;
const Bottom = styled.div`
    flex: 2;
    font-weight: 500;
    font-size: 14px;
    color: teal;
    text-align: center;
    text-decoration: underline;
`
const Footer = () => {
  return (
    <Container>
        <Top>

        <Left>
            <Logo>shoppo.com</Logo>
            <Desc>This site is just for the practice purpose, In this you will find a cart a product page and other functionality hope you will like this small project of mine, Thank You! for visiting</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='1e90ff'>
                    <LinkedIn/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='24292f'>
                    <GitHub/>
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mobile's</ListItem>
                <ListItem>Laptop's</ListItem>
                <ListItem>TV's</ListItem>
                <ListItem>Headphone's</ListItem>
                <ListItem>Smartwatch's</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: '10px'}}/>
                2433 La Oplanza, South Mumbai 58828
            </ContactItem>
            <ContactItem><Phone style={{marginRight: '10px'}}/>
                +91 7828 822 474
            </ContactItem>
            <ContactItem><Email style={{marginRight: '10px'}}/>
                contact@shoppo.com
            </ContactItem>
            <Payments src={payment} />
        </Right>
        </Top>
        <Bottom>Created By: Rahul Yadav</Bottom>
    </Container>
  )
}

export default Footer