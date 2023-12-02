// About.js
import React from 'react';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 } from '../images/me';

function About() {
  return (
    <div id="about" className="section">
      <div className="container">
        <h1 className="landing-page">About Me!</h1>
        <div className="svg-divider">
          <svg className="divider-style-main" height="20" width="100%">
            <line x1="0" y1="10" x2="100%" y2="10" />
          </svg>
        </div>
        <p>I'm a graduate from UC Santa Cruz, where my passion for computer science truly took flight. It was here that I immersed myself in the fascinating intricacies of core CS subjects, while also getting my hands dirty with a variety of exciting projects.
           My journey in computer science has been nothing short of thrilling, with each day bringing a new challenge and opportunity for growth. Since graduating, I have continued to learn and delve into the world of CS. I am particularly enthralled by the realms of
           automation and problem-solving, and have a burgeoning interest in artificial intelligence - a field that constantly amazes and inspires me.
           But life isn't all about algorithms and code. When I'm not in front of a computer, you can find me engrossed in cooking, messing around on the decks, or binging some show. I believe in the power of creativity and continuous learning, and strive to infuse this 
           ethos into every aspect of my life.
           I'm excited to embark on this next chapter, applying the skills and insights I've gained to make a tangible impact in the world of tech and beyond.
        </p>
        <div className="photo-grid">
          <div className="photo-row">
            <img src={p1} alt=" " height="400" />
            <img src={p2} alt=" " height="400" />
            <img src={p3} alt=" " height="400" />
          </div>
          <div className="photo-row">
            <img src={p4} alt=" " height="400" />
            <img src={p5} alt=" " height="400" />
            <img src={p6} alt=" " height="400" />
          </div>
          <div className="photo-row">
            <img src={p7} alt=" " height="400" />
            <img src={p8} alt=" " height="400" />
            <img src={p9} alt=" " height="400" />
          </div>
          <div className="photo-row">
            <img src={p10} alt=" " height="400" />
            <img src={p11} alt=" " height="400" />
            <img src={p12} alt=" " height="400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
