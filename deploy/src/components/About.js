// About.js
import React from 'react';

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
            <img src="/images/Me/p1.png" alt="Photo 1" />
            <img src="/images/Me/p2.png" alt="Photo 2" />
            <img src="/images/Me/p3.png" alt="Photo 3" />
          </div>
          <div className="photo-row">
            <img src="/images/Me/p4.png" alt="Photo 4" />
            <img src="/images/Me/p5.png" alt="Photo 5" />
            <img src="/images/Me/p6.png" alt="Photo 6" />
          </div>
          <div className="photo-row">
            <img src="/images/Me/p7.png" alt="Photo 7" />
            <img src="/images/Me/p8.png" alt="Photo 8" />
            <img src="/images/Me/p9.png" alt="Photo 9" />
          </div>
          <div className="photo-row">
            <img src="/images/Me/p10.png" alt="Photo 10" />
            <img src="/images/Me/p11.png" alt="Photo 11" />
            <img src="/images/Me/p12.png" alt="Photo 12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
