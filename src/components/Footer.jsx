import React from "react";

import logo from '../assets/logo.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {

    const { translations, isLoading } = useLanguage();

    if (isLoading) return;

    return (
        <footer className="flex flex-col gap-8 md:flex-row my-12 mx-4 p-4">
            <div className="basis-1/4 grow-0 flex flex-col justify-start md:items-center items-start gap-2">
                <img src={logo} alt="Logo" className="w-15 h-20 " />
                <h1 className="text-4xl font-bold text-amber-500">{translations?.footer?.brandName}</h1>
            </div>
            <div className="flex flex-col gap-y-8 md:gap-0 md:flex-row md:basis-3/4 md:grow-1 md:justify-around">
                <div className="flex flex-col justify-start">
                    <h1 className="text-xl font-medium  text-gray-600 my-2">{translations?.footer?.addressLabel}</h1>
                    <span className="text-md text-gray-600">{translations?.footer?.address}</span>
                    {/* <span>+249 - 912359122</span> */}
                    {/* <span className="text-md text-gray-600">www.matrix-sd.com</span> */}
                </div>
                <div className="flex flex-col items-start">
                    <h1 className="text-xl font-medium text-gray-600 my-2 hover:text-amber-500">{translations?.footer?.usefulLinks}</h1>
                    <span className="text-md text-gray-600 hover:text-amber-500"><a href="#about-us" className="hover:text-amber-500">{translations?.footer?.about}</a></span>
                    <span className="text-md text-gray-600 hover:text-amber-500"><a href="#core-competences">{translations?.footer?.coreCompetences}</a></span>
                    <span className="text-md text-gray-600 hover:text-amber-500"><a href="#knowledge-areas">{translations?.footer?.knowledgeAreas}</a></span>
                    <span className="text-md text-gray-600 hover:text-amber-500"><a href="#teams">{translations?.footer?.meetOurTeam}</a></span>
                    <span className="text-md text-gray-600 hover:text-amber-500"><a href="#clients">{translations?.footer?.clients}</a></span>
                </div>
                <div className="flex flex-col items-start">
                    <h1 className="text-xl font-medium text-gray-600 my-2">{translations?.footer?.socialLabel}</h1>
                    <div className="flex gap-2 mt-2">
                        <img src={linkedin} alt="LinkedIn" width="24px" height="24px" />
                        <img src={facebook} alt="Facebook" width="24px" height="24px" />
                        <img src={twitter} alt="Twitter" width="24px" height="24px" />
                        <img src={whatsapp} alt="Whatsapp" width="24px" height="24px" />
                    </div>
                </div>

            </div>
        </footer>
    )
}