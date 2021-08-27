import React from 'react';
import Image from "../assets/me.jpg";

function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <img src={Image} alt="me" />
      <div>
        <p>
          I am a student in the process of earning my certificate in 
          Full Stack Web Development from the University of Texas of Austin Coding Boot Camp. 
        </p>
      </div>
    </section>
  );
}

export default About;