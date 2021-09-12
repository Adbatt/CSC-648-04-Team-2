import React from "react";
import IslomImage from '../assets/ImgIslom.jpg';

function AboutIslom() {
    return (
        <div>
            <h1>Islombek Abdulakhatov </h1>
            <img src={IslomImage} width="200" height="200" alt="Islombek Abdulakhatov" /> 
            <p> Hi! I am Islombek Abdulakhatov and I am an international transfer student at SFSU. 
                My role in this project is as a SCRUM master. I am responsible for organizing, monitoring, facilitating processes within a group.
                Also, I am responsible for connecting and informing team members about updates and make sure that all of us in the same track. 
                I will also help with the front-end work of our project.</p>
        </div>
    )
}

export default AboutIslom;