
import './header.css';
import {NavLink, Title} from '../styles/navstyles';
const Header = () => {
    return(
      
    <div class="header">
    <nav class="head1">
        
  <ul>
    
  
    <Title to = "/" id = "title">Existential Ironies, By Aakash Rajaraman</Title>
    
    {/**/}
    
  </ul>
</nav>
<nav class="head2">
  <ul>
  <NavLink to ="/">Home</NavLink>
    <NavLink to ="/">Short Stories</NavLink>
    <NavLink to= "/">Poetry</NavLink>
    <NavLink to= "/">About</NavLink>
    </ul>
</nav>

    </div>
    
);}

export default Header;