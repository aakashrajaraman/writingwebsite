import React from 'react';
import {Link } from "react-router-dom";
import styled from "styled-components";
import NavLink from "../styles/navstyles.jsx";


 
const Navbar= () =>{
  console.log('Navbar component is rendering');
  return (
   
      <div>
        <h1>hello</h1>
        <NavLink to ="mainpage">Cats</NavLink>
      </div>
    

  );
}
export default Navbar;