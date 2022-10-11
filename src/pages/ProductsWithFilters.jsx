import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import { useProductsContextConsumer } from "../context/ProductContextProvider";


const Container = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProductsWithFilters = () => {
    const {
        productState: { byLatest, byCompAssurance, sort},
        dispatchProduct,
      } = useProductsContextConsumer();
  return (
    <Container>
      <Section>
        {category.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Section>
    </Container>
  );
};

export default ProductsWithFilters;
