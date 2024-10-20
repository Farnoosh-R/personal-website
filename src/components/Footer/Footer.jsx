import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import './style.scss';




const Footer = () => {

    return(
        <div className="Footer">
        <footer>
        <ul>
        <li><a href="#"><FaSquareFacebook /></a></li>
        <li><a href="#"><FaLinkedin /></a></li>
        <li><a href="#"><FaSquareInstagram /></a></li>
        <li><a href="#"><FaWhatsappSquare /></a></li>
        </ul>
        </footer>
        </div>
    )
}
export default Footer;