import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Intro() {

    const { translations, isLoading } = useLanguage();
    
    return (
        <div id="about-us" className="my-4 p-4 md:p-8 md:m-8 lg:m-12 xl:m-12">
            <h1 className="p-8 md:px-8 md:py-8 text-2xl md:text-2xl lg:text-4xl font-bold text-gray-600 tracking-wider">
                {translations.introTitle}
            </h1>
            <div className="px-8 my-4 text-lg md:text-lg lg:text-xl  xl:text-2xl h-auto text-gray-500 text-pretty md:text-justify">
                <p className="pt-4">{translations.introBodyFirstParagraph}</p>
                <p className="pt-4">{translations.introBodySecondParagraph}</p>
            </div>
        </div>
    )
}