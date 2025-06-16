import React from "react";
import { useLanguage } from "../context/LanguageContext";


const Cluster = ({ title, services }) => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <div className="group flex-auto md:basis-1/4 md:shrink-0 md:grow-1 w-full" onClick={() => setToggle(!toggle)}>
            <div className="py-2 px-4 border text-gray-500 border-gray-200 text-lg shadow flex h-20 min-h-[max-content] justify-between items-center font-medium hover:cursor-pointer group-hover:text-amber-500">
                <span>{title}</span>
                {toggle ? <span>&#11205;</span> : <span>&#11206;</span>}
            </div>
            {toggle && <div className="border border-gray-200 h-[max-content] text-gray-500 p-4 transition duration-500 ease-in-out">
                <ul>
                    {
                        services.map(service =>
                            <li className="relative pl-6">
                                <div className="absolute m-1  text-amber-500">▪</div>
                                <div className="pl-3 mx-4 text-gray-700">
                                    {service}
                                </div>
                            </li>)
                    }
                </ul>

            </div>}
        </div>
    )
}

export default function Clusters() {

    const { translations, isLoading } = useLanguage();

    const data = [
        {
            id: 1,
            title: translations.clusterOne, // 'Cluster I: Development Economics & Programme Management',
            services: [
                translations.clusterOneItemOne, //'Economic Restructuring',
                translations.clusterOneItemTwo, //'Economic and Social Infrastructure Rehabilitation Programming',
                translations.clusterOneItemThree, //'Technoloy, Energy, and Industrial Programming',
                translations.clusterOneItemFour, //'Rural Development',
                translations.clusterOneItemFive, //'Development Finance'
            ]
        },
        {
            id: 2,
            title: translations.clusterTwo,//'Cluster II: Data & Analytics:',
            services: [
                translations.clusterTwoItemOne, //'Statistical Analysis and Research.',
                translations.clusterTwoItemTwo, //'Surveys.',
                translations.clusterTwoItemThree, //'Data Collection.',
                translations.clusterTwoItemFour, //'Data Engineering.',
                translations.clusterTwoItemFive, //'Machine Learning.'
            ],
        },
        {
            id: 3,
            title: translations.clusterThree, //'Cluster III: Information Technology',
            services: [
                translations.clusterThreeItemOne, //'Web Development',
                translations.clusterThreeItemTwo, //'Mobile Development.',
                translations.clusterThreeItemThree, //'Graphic Design.',
                translations.clusterThreeItemFour, //'UI/UX Design',
                translations.clusterThreeItemFive, //'Databases Design.'
            ]
        },
        {
            id: 4,
            title: translations.clusterFour, //'Cluster IV: Policy Research and Capacity Building:',
            services: [
                translations.clusterFourItemOne, //'Macro-Economic policy research.',
                translations.clusterFourItemTwo, //'Climate Change policy.',
                translations.clusterFourItemThree, //'Sectoral economic policies.',
                translations.clusterFourItemFour, //'Knowledge and learning development, and human growth.',
                translations.clusterFourItemFive, //'Institutional design and organizational governance.'
            ]
        },
        {
            id: 5,
            title: translations.clusterFive,//'Cluster V: Environment and Natural Resources Management:',
            services: [
                translations.clusterFiveItemOne, //'Environmental governance at national, regional, state, and local levels.',
                translations.clusterFiveItemTwo, //'Natural Resources & Bio-diversity conservation, protection and regeneration.',
                translations.clusterFiveItemThree, //'Natural Resources Mapping, and Resource-based conflict prevention.',
                translations.clusterFiveItemFour, //'Environmental impact assessment and monitoring.'
            ],
        },
        {
            id: 6,
            title: translations.clusterSix, //'Cluster VI: Climate Change',
            services: [
                translations.clusterSixItemOne, //'Climate Change Policies, Strategies and Action Planning, vis-a-vis Mitigation and Adaptation.',
                translations.clusterSixItemTwo, //'Climate Change Finance.',
                translations.clusterSixItemThree, //'COPs preparations, follow-up and monitoring, reporting on National commitments and obligations.',
                translations.clusterSixItemFour //'Establishing Environmental Observatories for Urban & Rural Planning.'
            ]
        }
    ]

    return (
        <div id="knowledge-areas" className="mt-24 md:mt-28 lg:mt-32">
            <h1 className="py-4 md:px-8 md:py-8 text-2xl md:text-2xl lg:text-4xl font-bold text-gray-600 tracking-wider text-center">{translations.knowledgeAreas}</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start md:m-8 gap-1 p-8">
                {
                    data.map(cluster => <Cluster id={cluster.id} title={cluster.title} services={cluster.services} />)
                }
            </div>
        </div>)
}