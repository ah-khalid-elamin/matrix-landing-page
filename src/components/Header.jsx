import React, { useState } from "react";
import MediaQuery from "react-responsive";
import Collapse from 'react-bootstrap/Collapse';


import logo from '../assets/logo.png'
import styles from './Header.css'


export default function Header() {

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <nav className="nav-menu" style={styles}>
            <div className="nav-menu-brand">
                <img src={logo} alt="Matrix logo" width="80px" height="80px" />
                <span className="title"> MATRIX</span>
                <MediaQuery maxWidth={480}>
                    <div className="menu-toggle" onClick={() => setMenuToggle(!menuToggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                </MediaQuery>
            </div>

            <MediaQuery minWidth={481}>
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
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Collapse in={menuToggle}>
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
                </Collapse>
            </MediaQuery>

        </nav>
    )

}
