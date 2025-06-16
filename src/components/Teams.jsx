import React from "react";
import profileImage from '../assets/profile.png'
import { useLanguage } from "../context/LanguageContext";



const TeamMember = ({id, name, designation, skills }) => {
    return (
        <div key={id} className="group basis-1/4 text-center shrink-0 grow-1 border-2 border-gray-200 px-4 py-2 bg-white rounded-2xl hover:shadow-md">
            <div className="flex flex-col items-center justify-center">
                <svg className="w-36 h-36 my-4 rounded-full" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M130.5 0C58.8187 0 0.5 58.3187 0.5 130C0.5 201.681 58.8187 260 130.5 260C202.181 260 260.5 201.681 260.5 130C260.5 58.3187 202.181 0 130.5 0ZM99.1125 73.0125C107.031 64.6188 118.175 60 130.5 60C142.825 60 153.869 64.65 161.819 73.0875C169.875 81.6375 173.794 93.125 172.869 105.475C171.019 130 152.019 150 130.5 150C108.981 150 89.9438 130 88.1313 105.469C87.2125 93.0187 91.125 81.4938 99.1125 73.0125V73.0125ZM130.5 240C115.815 240.01 101.278 237.071 87.751 231.357C74.2236 225.643 61.9813 217.271 51.75 206.737C57.6097 198.381 65.076 191.276 73.7125 185.837C89.6437 175.625 109.806 170 130.5 170C151.194 170 171.356 175.625 187.269 185.837C195.912 191.273 203.385 198.379 209.25 206.737C199.02 217.272 186.777 225.645 173.25 231.359C159.722 237.073 145.185 240.011 130.5 240V240Z" fill="#DFDFDF" />
                </svg>
                <span className="text-lg font-bold text-gray-600 uppercase my-1">{name}</span>
                <span className="text-lg font-medium text-gray-600 uppercase">{designation}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 my-4">
                {skills.map(skill => <span className="text-sm break-keep bg-gray-100 text-gray-500 py-1 px-4 rounded-full">{skill}</span>)}
            </div>
        </div>
    )
}

export default function Teams() {
    const { translations, isLoading } = useLanguage();

    if (isLoading) return

    return (
        <div id="teams" className="mt-24 md:mt-28 lg:mt-32">
            <h1 className="py-4 md:px-8 md:py-8 text-2xl md:text-2xl lg:text-4xl font-bold text-gray-600 tracking-wider text-center">{translations.teamsTitle}</h1>
            <div className="mx-4 md:my-8 lg:my-16 flex flex-col gap-2 md:gap-2 md:flex-row justify-stretch p-4 bottom-0 overflow-x-auto justify-items-stretch scrollbar-hide">
                <TeamMember id="1" name={translations.teamMemberOne?.name} designation={translations.teamMemberOne?.designation} skills={translations.teamMemberOne?.skills} />
                <TeamMember id="2" name={translations.teamMemberTwo?.name} designation={translations.teamMemberTwo?.designation} skills={translations.teamMemberTwo?.skills} />
                <TeamMember id="3" name={translations.teamMemberThree?.name} designation={translations.teamMemberThree?.designation} skills={translations.teamMemberThree?.skills} />
                <TeamMember id="4" name={translations.teamMemberFour?.name} designation={translations.teamMemberFour?.designation} skills={translations.teamMemberFour?.skills} />
                <TeamMember id="5" name={translations.teamMemberFive?.name} designation={translations.teamMemberFive?.designation} skills={translations.teamMemberFive?.skills} />
                <TeamMember id="6" name={translations.teamMemberSix?.name} designation={translations.teamMemberSix?.designation} skills={translations.teamMemberSix?.skills} />
                <TeamMember id="7" name={translations.teamMemberSeven?.name} designation={translations.teamMemberSeven?.designation} skills={translations.teamMemberSeven?.skills} />
                <TeamMember id="8" name={translations.teamMemberEight?.name} designation={translations.teamMemberEight?.designation} skills={translations.teamMemberEight?.skills} />
            </div>
        </div>
    )
}