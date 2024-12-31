import React from "react";
import styles from './Competences.css'

import integratedDevelopment from '../assets/integrated-development-management.png'
import dataAnalytics from '../assets/data-analytics.png'
import sustainableResource from '../assets/sustainable-resource.png'
import policyResearch from '../assets/policy-research.png'
import ictDevelopment from '../assets/ict-development.png'
import environmentalResearch from '../assets/environmental-research.png'


export default function Competences() {

    return (
        <div  id="core-competences" className="competences" style={styles}>
            <h1 className="competences-title">Core Competences</h1>
            <div className="competences-content">
                <div className="icon-card">
                    <div className="icon-card-img">
                        <img src={integratedDevelopment} width="100%" height="100%" alt="integrated development management" />
                    </div>
                    <div className="icon-card-title">
                        Integrated Development Mangement
                    </div>
                </div>
                <div className="icon-card">
                    <div className="icon-card-img">
                        <img src={dataAnalytics} width="100%" height="100%" alt="integrated development management" />
                    </div>
                    <div className="icon-card-title">
                        Data Driven Insights
                    </div>
                </div>
                <div className="icon-card">
                    <div className="icon-card-img">
                        <img src={sustainableResource} width="100%" height="100%" alt="integrated development management" />
                    </div>
                    <div className="icon-card-title">
                        Environmental Research
                    </div>
                </div>
                <div className="icon-card">
                    <div className="icon-card-img">
                        <img src={policyResearch} width="100%" height="100%" alt="integrated development management" />
                    </div>
                    <div className="icon-card-title">
                        Policy Research and Capacity Building
                    </div>
                </div>
                <div className="icon-card">
                    <div className="icon-card-img">
                        <img src={ictDevelopment} width="100%" height="100%" alt="integrated development management" />
                    </div>
                    <div className="icon-card-title">
                        ICT for Development
                    </div>
                </div>
                <div className="icon-card">
                    <div className="icon-card-img">
                        <img src={environmentalResearch} width="100%" height="100%" alt="integrated development management" />
                    </div>
                    <div className="icon-card-title">
                        Environmental Research
                    </div>
                </div>
            </div>
        </div>)
}