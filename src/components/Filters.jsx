import { FilterAltOffOutlined, FilterAltOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { useProductsContextConsumer } from "../context/ProductContextProvider";

const Container = styled.div`
  width: ${(props) => props.toggle ? '100vw' : '50px'};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 6;
  position: fixed;
  top: 80px;
  left: 0;
  background: linear-gradient( rgb(24, 0, 104), rgba(200, 89, 9, 0.1));
  border-radius: 5px;
  color: white;

`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2px;
`;
const Hr = styled.hr`
  width: 0%;
  background:  rgba(103, 103, 103,0.3);
`
const Input = styled.input`
  width: 100%;
  border: 0.5px solid black;
`;
const Label = styled.label``;
const Button = styled.button`
  background-color: aliceblue;
  border: none;
  border-radius: 5px;
  background: rgba(0, 90, 66,0.6);
  color: white;
  &:hover{
        background: rgba(218, 241, 18, 0.3);
    }
`;

const Filters = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const {
    state: { products },
    dispatchProduct,
    productState: { bylatest, byProdAssurance, sort },
  } = useProductsContextConsumer();
  return (
    <Container toggle={toggle}>
      <Button title="Filters">
        {toggle ? (
          <FilterAltOffOutlined style={{background: `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%));`}} onClick={handleToggle} />
        ) : (
          <FilterAltOutlined style={{background: `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%));`}} onClick={handleToggle} />
        )}
      </Button>
      {toggle && (
        <Wrapper>
          
          <Filter>
            <Label htmlFor="lowtohigh">Low to High</Label>
            <Input
              type="radio"
              name="lowtohigh"
              onChange={() =>
                dispatchProduct({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
          </Filter>

          <Filter>
            <Label htmlFor="highToLow">High to Low</Label>
            <Input
              type="radio"
              name="highToLow"
              onChange={() =>
                dispatchProduct({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
          </Filter>
          
          {/* <Filter>
            <Label htmlFor="apple">Apple</Label>
            <Input
              type="radio"
              name="apple"
              onChange={() =>
                dispatchProduct({
                  type: "FILTER_BY_BRAND",
                  payload: "Apple",
                })
              }
              value="Apple"
              checked={byBrandName === "Apple" ? true : false}
            />
          </Filter>
          
          <Filter>
            <Label htmlFor="apple">OnePlus</Label>
            <Input
              type="radio"
              name="OnePlus"
              onChange={() =>
                dispatchProduct({
                  type: "FILTER_BY_BRAND",
                  payload: "OnePlus",
                })
              }
              checked={byBrandName === "OnePlus" ? true : false}
            />
          </Filter>
          
          <Filter>
            <Label htmlFor="apple">Samsung</Label>
            <Input
              type="radio"
              name="Samsung"
              onChange={() =>
                dispatchProduct({
                  type: "FILTER_BY_BRAND",
                  payload: "Samsung",
                })
              }
              checked={byBrandName === "Samsung" ? true : false}
            />
          </Filter>
          
          <Filter>
            <Label htmlFor="apple">Oppo</Label>
            <Input
              type="radio"
              name="Oppo"
              onChange={() =>
                dispatchProduct({
                  type: "FILTER_BY_BRAND",
                  payload: "Oppo",
                })
              }
              checked={byBrandName === "Oppo" ? true : false}
            />
          </Filter>
           */}
          <Filter>
            <Label htmlFor="latest">Latest</Label>
            <Input
              type="checkbox"
              name="latest"
              onChange={() =>
                dispatchProduct({
                  type: "FILTER_BY_LATEST",
                })
              }
              checked={bylatest}
            />
          </Filter>
          
          <Filter>
            <Label htmlFor="assured">Assured</Label>
            <Input
              type="checkbox"
              name="assured"
              onChange={() =>
                dispatchProduct({
                  type: "FILTER_BY_ASSURANCE",
                })
              }
              checked={byProdAssurance}
            />
          </Filter>
          
          
          
          <Button
            onClick={() =>
              dispatchProduct({
                type: "CLEAR_FILTERS",
              })
            }
          >
            Clear Filters
          </Button>
        </Wrapper>
      )}
    </Container>
  );
};

export default Filters;
