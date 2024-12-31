import React from "react";
import styles from './Clusters.css'
import Collapse from 'react-bootstrap/Collapse';


const Cluster = ({ title, services }) => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <div className="cluster" onClick={() => setToggle(!toggle)}>
            <div className="cluster-header">
                <span className="cluster-title">{title}</span>
                {toggle ? <span>&#11205;</span> : <span>&#11206;</span>}
            </div>
            <Collapse in={toggle}>
                <div className="cluster-content">
                    <ul>
                        {
                            services.map(service => <li>{service}</li>)
                        }
                    </ul>

                </div>
            </Collapse>
        </div>
    )
}

export default function Clusters() {

    const data = [
        {
            id: 1,
            title: 'Cluster I: Programme Development and Management:',
            services: [
                'Banking and Finance for Development.',
                'Feasibility Studies.',
                'Corporate Finance.',
                'Financial Inclusion & Micro-finance.',
                'International Finance',
                'Market Research.',
                'Digital Marketing.'
            ]
        }, 
        {
            id: 2,
            title: 'Cluster II: Data & Analytics:',
            services: [
                'Statistical Analysis and Research.',
                'Surveys.',
                'Data Collection.',
                'Data Engineering.',
                'Machine Learning.'
            ]
        },
        {
            id: 3,
            title: 'Cluster III: Information Technology',
            services: [
                'Web Development',
                'Mobile Development.',
                'Graphic Design.',
                'UI/UX Design',
                'Databases Design.'
            ]
        },
        {
            id: 4,
            title: 'Cluster IV: Policy Research and Institutional Building:',
            services: [
                'Macro-Economic policy research.',
                'Climate Change policy.',
                'Sectoral economic policies.',
                'Knowledge and learning development, and human growth.',
                'Institutional design and organizational governance.'
            ]
        },
        {
            id: 5,
            title: 'Cluster V: Environment and Natural Resource Management:',
            services: [
                'Environmental governance at national, regional, state, and local levels.',
                'Environmental conservation, protection and regeneration.',
                'Natural Resources Mapping, and Resource-based conflict prevention.',
                'Environmental impact assessment and monitoring.'
            ]
        },
        {
            id: 6,
            title: 'Cluster VI: Climate Change',
            services: [
                'Climate Change Policies, Strategies and Action Planning, vis-a-vis Mitigation and Adaptation.',
                'Climate Change Finance.',
                'COPs preparations, follow-up and monitoring and reporting on National commitments and obligations.',
                'Establishing Environmental Observation for Urban Planning.'
            ]
        }
    ]

    return (
        <div  id="knowledge-areas" className="clusters" style={styles}>
            <h1 className="clusters-title">Knowledge Areas</h1>
            <div className="clusters-content">
                {
                    data.map(cluster => <Cluster id={cluster.id} title={cluster.title} services={cluster.services} />)
                }
            </div>
        </div>)
}