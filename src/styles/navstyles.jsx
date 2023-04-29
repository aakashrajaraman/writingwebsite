
import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavLink = styled(Link)`
display: inline-block;
margin: 0 0 0 0;
padding: 10px 10px 10px 10px;
color: #fff;
font-size: 20px;
text-decoration: none;
font-weight: bold;
transition: all 0.2s ease;
&:hover{
  color: #ebcb19;
}
`;

export const Title = styled(Link)`
display: inline-block;
margin: 0 0 0 0;
color: #fff;
font-size: 50px;
text-decoration: none;
align-items: center;
font-family:'Raleway';

}
`;
export const Subtitle = styled.h1`
margin: 0px 0 0 0;
padding-top: 15px;
color: #fff;
font-size: 24px;
text-decoration: none;
font-family:'Raleway Thin';
font-weight: bold;
align-items: center;

}
`;

