import React from "react";
import {  Link } from "react-router-dom";
import styled from "styled-components";
const NavLink = styled(Link)`
  padding: 20px;
  color: red;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;

export default NavLink;