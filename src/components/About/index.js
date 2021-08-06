import React from 'react'
import image from "../../assets/About/me.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={image} className='my-2' alt='cover' />
      <div className="my-2">
        <p>
          I am a student in the process of earning a certificate in 
          Full Stack Web Development from the University of Texas of Austin 
          Coding Boot Camp.
        </p>
      </div>
    </section>
  );
}

export default About;