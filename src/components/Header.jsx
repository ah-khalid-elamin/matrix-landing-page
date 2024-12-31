import React from "react";
import logo from '../assets/logo.png'
import styles from './Header.css'
export default function Header() {
    return (
        <nav className="nav-menu" style={styles}>
            <div className="nav-menu-brand">
                <img src={logo} alt="Matrix logo" width="80px" height="80px" />
                <span className="title"> MATRIX</span>
            </div>

            <div className="nav-menu-links">
                <div className="nav-link">
                    <a href="#">Home</a>
                </div>
                <div className="nav-link">
                    <a href="#about-us">About Us</a>
                </div>
                <div className="nav-link">
                    <a href="#core-competences">Core Competences</a>
                </div>
                <div className="nav-link">
                    <a href="#knowledge-areas">Knowledge Areas</a>
                </div>
                <div className="nav-link">
                    <a href="#clients">Clients</a>
                </div>
                <div className="nav-button">Request a Demo</div>
            </div>

        </nav>
    )

}
