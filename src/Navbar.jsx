import { Children } from "react"
import {Link} from "react-router-dom"
export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/" className="site-title">
            
            Gaming Scheduler</Link>
        <ul>
        <CustomLink to="/about"> About</CustomLink>
        <CustomLink to="/calender"> Calender</CustomLink>
            
        
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