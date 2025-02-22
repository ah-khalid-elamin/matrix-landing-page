import React from "react";
import './Clients.css'
import undpLogo from '../assets/UNDP-Logo.png'
import wblogo from '../assets/World_Bank-Logo.png';
import ifadLogo from '../assets/IFAD-logo.png';
import ncrLogo from '../assets/NCR-logo.png';
import gadarifLogo from '../assets/Gadarif-State-Logo.png';
import kassalaLogo from '../assets/Kassala-State-Logo.png';
import nileRiverLogo from '../assets/Nile-River-State-Logo.png';
import redSeaLogo from '../assets/Red-Sea-State-Logo.png';
import smrc from '../assets/SMRC-Logo.png';

const clients = [
    { logo: undpLogo, alt: "UNDP" },
    { logo: wblogo, alt: "World Bank" },
    { logo: ifadLogo, alt: "IFAD" },
    { logo: ncrLogo, alt: "NCR" },
    { logo: gadarifLogo, alt: "Gadarif State" },
    { logo: kassalaLogo, alt: "Kassala" },
    { logo: nileRiverLogo, alt: "Nile River State" },
    { logo: redSeaLogo, alt: "Red Sea State" },
    { logo: smrc, alt: "SMRC" }
];

export default function Clients() {
    return (
        <div id="clients" name="clients" className="clients">
            <h1 className="clients-title">Our Clients</h1>
            <div className="clients-content">
                {clients.map((client, index) => (
                    <div key={index} className="client-image">
                        <img src={client.logo} alt={client.alt} width="100%" height="100%" />
                    </div>
                ))}
            </div>
        </div>
    )
}