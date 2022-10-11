import React, { useState } from "react";
import styled from "styled-components";
import { useProductsContextConsumer } from "../context/ProductContextProvider";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const {
    state: { products },
    productState: { bylatest, byProdAssurance, sort, searchQuery },
  } = useProductsContextConsumer();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!bylatest) {
      sortedProducts = sortedProducts.filter((prod) => prod.isLatest);
      console.log(bylatest)
    }
    if (!byProdAssurance) {
      sortedProducts = sortedProducts.filter((prod) => prod.CompanyAssured);
      console.log(byProdAssurance)
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.productName.toLowerCase().includes(searchQuery)
      );
    }
    // console.log(sortedProducts);
    return sortedProducts;
  };
  return <Container>
    {transformProducts().map((product) => (
        <Product product={product} key={product.id}/>
    ))}
    </Container>;
};

export default Products;
