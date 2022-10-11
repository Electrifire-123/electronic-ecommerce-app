import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useProductsContextConsumer } from "../context/ProductContextProvider";

const Container = styled.div`
  height: 80px;
  background-color: #ecfcff;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  border: 1px solid lightblue;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
  padding: 2px;
`;
const NavBar = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "black",
  };
  const {
    dispatchProduct,
  } = useProductsContextConsumer();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input 
              placeholder="Search Product"
              onChange={((e) => {
                dispatchProduct({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              })}
            />
            <SearchIcon style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : { color: "black", textDecoration: "none" }
              }
            >
              shoppo.com
            </NavLink>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : { color: "black", textDecoration: "none" }
              }
              to="/register"
            >
              Register
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : { color: "black", textDecoration: "none" }
              }
              to="/login"
            >
              Sign In
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : { color: "black", textDecoration: "none" }
              }
              to="/cart"
            >
              <Badge badgeContent={4} color="success">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
