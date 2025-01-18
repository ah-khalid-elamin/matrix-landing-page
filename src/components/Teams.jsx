import React from "react";

import styles from './Teams.css'
import profileImage from '../assets/profile.png'


const TeamMember = ({name, designation, skills })=> {
    return (
        <div className="team-member">
            <div className="profile">
                <img src={profileImage} alt="profile" width="128px" height="128px" />
                <span className="name">{name}</span>
                <span className="designation">{designation}</span>
            </div>
            <div className="skills">
                {skills.map(skill => <span className="skill">{skill}</span>)}
            </div>
        </div>
    )
}

export default function Teams(){
    return (
        <div  id="teams" className="teams" style={styles}>
            <h1 className="teams-title">Meet our Team</h1>
            <div className="teams-content">
                <TeamMember name="Mr. Khalid Elnour"  designation="Founder and CEO" skills={['Programme Development', 'Management']} />
                <TeamMember name="Dr. Manar Abdelrahman"  designation="Researcher" skills={['Researcher', 'Bio Statistics', 'Statistical Analysis', 'Data Science']} />
                <TeamMember name="Ahmed Abdelgadir"  designation="Software Engineer" skills={['Web development', 'Backend Engineer', 'UI Design', 'Mobile development']} />
                <TeamMember name="Prof. Abbas Douka"  designation="Researcher" skills={['Natural Resource Management', 'Climate Change']} />
                <TeamMember name="Prof. Nada Hamza"  designation="Researcher" skills={['Natural Resource Management', 'Climate Change']} />
                <TeamMember name="Prof. Abdel Rahaman Alkhidir"  designation="Researcher" skills={['Policy Research', 'Capacity Building']} />
            </div>
        </div>
    )
}