import React from "react";
import styles from './Footer.css'

import logo from '../assets/logo.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <img src={logo} alt="Logo" width="100%" height="100%" />
                <h1 className="logo-title">MATRIX</h1>
            </div>
            <div className="contact-information">
                <h1 className="title">Address</h1>
                <span>Kassala, Sudan</span>
                <span>+249 - 912359122</span>
                <span>www.matrix-sd.com</span>
            </div>
            <div className="useful-links">
                <h1 className="title">Useful Links</h1>
                <span><a href="#about-us">About Us</a></span>
                <span><a href="#core-competences">Core Competences</a></span>
                <span><a href="#knowledge-areas">Knowledge Areas</a></span>
                <span><a href="#teams">Meet our Team </a></span>
                <span><a href="#clients">Our Clients</a></span>
            </div>
            <div className="social">
                <h1 className="title">Get Social with us</h1>
                <div className="platforms">
                    <img src={linkedin} alt="LinkedIn" width="24px" height="24px"/>
                    <img src={facebook} alt="Facebook" width="24px" height="24px"/>
                    <img src={twitter} alt="Twitter" width="24px" height="24px"/>
                    <img src={whatsapp} alt="Whatsapp" width="24px" height="24px"/>
                </div>
            </div>
        </footer>
    )
}