import React from 'react';
import Image from "../assets/About/me.jpg";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={Image} alt="me" />
      <div>
        <p style={{color: 'white'}}>
          I am a student in the process of earning my certificate in 
          Full Stack Web Development from the University of Texas of Austin Coding Boot Camp. 
        </p>
      </div>
    </div>
  );
}

export default About;