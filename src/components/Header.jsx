import React, { useState } from "react";
import logo from '../assets/logo.png'
import useClickAway from '../hooks/clickAwayHook'
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";


export default function Header() {

    const [menuToggle, setMenuToggle] = useState(false)
    const clickAwayRef = useClickAway(() => setMenuToggle(false));
    const { translations, isLoading } = useLanguage();


    const menuItems = (
        <>
            <div onClick={()=>setMenuToggle(false)} className="text-lg uppercase text-gray-500 hover:text-amber-500 hover:scale-105 duration-300 transition hover:font-medium  border-amber-500">
                <a href="#">{translations.headerHome}</a>
            </div>
            <div onClick={()=>setMenuToggle(false)} className="text-lg uppercase text-gray-500 hover:text-amber-500 hover:scale-105 duration-300 transition hover:font-medium border-amber-500">
                <a href="#about-us"> {translations.headerAbout}</a>
            </div>
            <div onClick={()=>setMenuToggle(false)} className="text-lg uppercase text-gray-500 hover:text-amber-500 hover:scale-105 duration-300 transition hover:font-medium border-amber-500">
                <a href="#core-competences"> {translations.headerCoreCompetences}</a>
            </div>
            <div onClick={()=>setMenuToggle(false)} className="text-lg uppercase text-gray-500 hover:text-amber-500 hover:scale-105 duration-300 transition hover:font-medium border-amber-500">
                <a href="#knowledge-areas"> {translations.headerKnowledgeAreas}</a>
            </div>
            <div onClick={()=>setMenuToggle(false)} className="text-lg uppercase text-gray-500 hover:text-amber-500 hover:scale-110 duration-300 transition hover:font-medium border-amber-500">
                <a href="#clients"> {translations.headerClients}</a>
            </div>
            <div onClick={()=>setMenuToggle(false)} className="text-lg uppercase text-gray-500 hover:text-amber-500 hover:scale-110 duration-300 transition hover:font-medium border-amber-500">
                <LanguageSwitcher />
            </div>
            <div className="text-lg uppercase text-white self-center m-2 bg-amber-500 rounded-full py-2 px-6 hover:shadow-md hover:scale-105 duration-300 ease-out hover:bg-amber-600">
                <a href="mailto:info@matrix-sd.com">{translations.headerContactUs}</a>
            </div>
            

        </>
    );

    return (
        <nav className="px-4 md:flex md:justify-stretch shadow-md gap-10 sticky top-0 z-50 bg-white" ref={clickAwayRef}>
            <div className="flex justify-stretch items-center md:flex md:basis-auto gap-4 p-1">
                <img src={logo} alt="Matrix logo" className="w-10 h-14 md:h-20 md:w-15 object-fit" />
                <span className="text-4xl font-bold text-amber-500 grow-1 text-center hover:scale-105 duration-300 ease-in-out uppercase"> {translations.headerBrandName}</span>
                <div className="md:hidden" onClick={() => setMenuToggle(!menuToggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </div>
            </div>

            {menuToggle && <div className="flex flex-col p-4 gap-y-2 basis-auto grow-1 justify-around items-start md:hidden">{menuItems}</div>}
            <div className="basis-auto grow-1 justify-around items-center hidden md:flex">{menuItems}</div>
        </nav >
    );

}
