// Home.js
import React from 'react';
import { front } from '../images/me';
import { professionalResume, gerneralResume } from '../resources/resumes';
import {
} from './Styles';

function Home() {
  return (
    <styledSection>
      <div className="container">
        <h1 className="landing-page">Home Page</h1>
        <div className="image-container">
            <img src={front} alt=" " height="600" />
        </div>
        <div className="centered-container">
            <div id="typing-animation" className="typed-text-animation"></div>
        </div>
        <h2 className="landing-page">Summary</h2>
        <div className="svg-divider">
            <svg className="divider-style-main" height="20" width="100%">
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
        <div className="container">
            <p>As a Computer Science graduate from the University of California, Santa Cruz, I am actively seeking job opportunities where I can apply and
            expand my technical skills. While I have a strong foundation in programming languages like C, C++, and Python, I am currently honing my skills in
            AI and machine learning, evident in my ongoing personal projects. My experience includes developing innovative software solutions and enhancing existing
            systems with a focus on efficiency and user experience. Beyond technical skills, my roles in customer service have sharpened my communication and
            problem-solving abilities, making me a well-rounded candidate for technology-focused positions.</p>
        </div>
        <h2 className="landing-page">Work History/Resumes</h2>
        <div className="svg-divider">
            <svg className="divider-style-main" height="20" width="100%">
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
        <div className="container">
            <p>My current up to date Professional Resume: <a href={professionalResume} target="_blank">Professional Resume</a></p>
            <p>My current up to date General Workforce Resume: <a href={gerneralResume} target="_blank">General Resume</a></p>
        </div>
      </div>
    </styledSection>
  );
}

export default Home;