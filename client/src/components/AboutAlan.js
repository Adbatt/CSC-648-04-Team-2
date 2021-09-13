import React from "react";
import Alan from '../assets/AlanImage.jpg';

function AboutAlan() {
    return (
        <div>
            <h1>Alan Batt</h1> 
            <img src={Alan} width="50%" height="50%"/>
            <h3>About Me</h3>
            <p>I am a Senior at SFSU and the github master for this project.</p>
            <p>I am currently studying for a Computer Science Degree.</p>
        </div>
    )
}

export default AboutAlan;