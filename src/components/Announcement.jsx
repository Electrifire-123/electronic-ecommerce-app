import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    z-index: 4;
`
const Announcement = () => {
  return (
    <div>
        <Container>
            Super Deal!🎉✨ Free Shipping🚚 on Orders Over ₹500💰        
        </Container>
    </div>
  )
}

export default Announcement;