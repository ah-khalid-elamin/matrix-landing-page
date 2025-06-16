import React from "react";
import undpLogo from '../assets/UNDP-Logo.png'
import wblogo from '../assets/World_Bank-Logo.png';
import ifadLogo from '../assets/IFAD-logo.png';
import ncrLogo from '../assets/NCR-logo.png';
import gadarifLogo from '../assets/Gadarif-State-Logo.png';
import kassalaLogo from '../assets/Kassala-State-Logo.png';
import nileRiverLogo from '../assets/Nile-River-State-Logo.png';
import redSeaLogo from '../assets/Red-Sea-State-Logo.png';
import smrc from '../assets/SMRC-Logo.png';
import { useLanguage } from "../context/LanguageContext";

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
    const { translations, isLoading } = useLanguage();
    return (
        <div id="clients" className="my-24 md:my-28 lg:my-32">
            <h1 className="py-4 md:px-8 md:py-8 text-2xl md:text-2xl lg:text-4xl font-bold text-gray-600 tracking-wider text-center">{translations.clients}</h1>
            <div className="flex flex-col md:flex-row my-8 md:my-16 lg:my-20 gap-4 p-4 overflow-x-scroll scrollbar-hide items-center">
                {clients.map((client, index) => (
                    <div key={index} className="basis-auto border-2 border-gray-100 shrink-0 grow-1 p-4 bg-white rounded-2xl">
                        <img src={client.logo} alt={client.alt} width="100%" height="100%" className="h-65 object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}