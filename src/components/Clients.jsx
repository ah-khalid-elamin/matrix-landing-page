import React from "react";
import styles from './Clients.css'
import undpLogo from '../assets/UNDP-Logo.png'
import wblogo from '../assets/World_Bank-Logo.png'
import ifadLogo from '../assets/IFAD-logo.png'
import ncrLogo from '../assets/NCR-logo.png'
import gadarifLogo from '../assets/Gadarif-State-Logo.png'
import kassalaLogo from '../assets/Kassala-State-Logo.png'
import nileRiverLogo from '../assets/Nile-River-State-Logo.png'
import redSeaLogo from '../assets/Red-Sea-State-Logo.png'
import smrc from '../assets/SMRC-Logo.png'

export default function Clients() {
    return (
        <div  id="clients" name="clients" className="clients" style={styles}>
            <h1 className="clients-title">Our Clients</h1>
            <div className="clients-content">
                <div className="client-image">
                    <img src={undpLogo} alt="UNDP" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={wblogo} alt="World Bank" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={ifadLogo} alt="IFAD" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={ncrLogo} alt="NCR" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={gadarifLogo} alt="Gadarif State" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={kassalaLogo} alt="Kassala" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={nileRiverLogo} alt="Nile River State" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={redSeaLogo} alt="Nile River State" width="100%" height="100%" />
                </div>
                <div className="client-image">
                    <img src={smrc} alt="SMRC" width="100%" height="100%" />
                </div>
            </div>
        </div>
    )
}