import { Children } from "react"
import {Link} from "react-router-dom"
import Logo from './assets/logo.png'
import './Navbar.css';
export default function Navbar(){
    
    return <nav className="nav">
        <img src={Logo} alt="GameSync Logo" id="logo" />
        
        <ul>
        <CustomLink to="/player1"> Player1</CustomLink>
        <CustomLink to="/player2"> Player2</CustomLink>
        <CustomLink to="/recommendation"> Recommendation</CustomLink>
        <CustomLink to="/savedsessions"> Saved Sessions</CustomLink>
        <CustomLink to="/savedplayers"> Saved Players</CustomLink>
        <CustomLink to="/summary"> Summary</CustomLink>
        <CustomLink to="/wishlist"> Wishlist</CustomLink>
        
            
        
        </ul>
    </nav>
}

function CustomLink ({to, children,...props}){
    const path =window.location.pathname
    return(
        <li className={path === to ? "active" : ""}> 
            <Link to={to} {...props}> 
            {children}
            </Link>
        </li>
    )
}