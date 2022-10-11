import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useProductsContextConsumer } from "../context/ProductContextProvider";
import Product from '../components/Product';


const Container = styled.div`
  display: block;

`
const Section = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Heading = styled.h2`
  text-align: center;
  font-weight: 600;
  color: #1a5353;
  text-decoration: underline;
`

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const params = useParams();
  const {title} = params;
  console.log(title)
  const {
    state: { products },
    //productState: { bylatest, byProdAssurance, sort, searchQuery },
  } = useProductsContextConsumer();

  const category = products.filter((prod)=>{
    return prod.productType === title;
  })
  console.log(category)
  return (<Container>
    <Heading>{title}'s</Heading>
    <Section>
    {category.map((product) => (
        <Product product={product} key={product.id}/>
    ))}
    </Section>
    
    </Container>
  )
}

export default ProductsPage