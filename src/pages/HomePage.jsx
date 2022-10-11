import React, { useState } from 'react'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import { useProductsContextConsumer } from '../context/ProductContextProvider'
import Category from '../components/Category';
import Products from '../components/Products';
import Filters from '../components/Filters';

const HomePage = () => {

  return (
    <>
        <Filters/>
        <Announcement/>
        <Slider/>
        <Category/>
        <Products/>
    </>
  )
}

export default HomePage