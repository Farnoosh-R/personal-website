import React from "react";
import Button from "../Button/Button";
import './style.scss'
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return(
        <div className="Header">
        <span className="logo-text">Farnoosh</span>
        <ul>
        <li><Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to={'/about'} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to={'/portfolio'} className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
        <li><Link to={'/contact'} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <Button title="Download Resume"/>
        </div>
    )
}
export default Header;