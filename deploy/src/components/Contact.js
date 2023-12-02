// Contact.js
import React from 'react';

function Contact() {
  return (
    <div id="contact" className="section">
      <div className="container">
        <h1 className="landing-page">Contact Me</h1>
        <p>I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.</p>
        <div className="svg-divider">
          <svg className="divider-style-main" height="20" width="100%">
            <line x1="0" y1="10" x2="100%" y2="10" />
          </svg>
        </div>
        <h2>Get In Touch!</h2>
        <ul>
          <li>Email: <a href="mailto:Jack_cooper01@yahoo.com">Jack_cooper01@yahoo.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/jackcoop" target="_blank">Your LinkedIn</a></li>
          <li>GitHub: <a href="https://github.com/Jack-A-Cooper" target="_blank">Your GitHub</a></li>
        </ul>
        <div className="svg-divider">
          <svg className="divider-style-main" height="20" width="100%">
            <line x1="0" y1="10" x2="100%" y2="10" />
          </svg>
        </div>
        <h2>Connect With Me!</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to connect with me on any of the platforms above, or just drop me a line here. I'll get back to you as soon as possible!</p>
      </div>
    </div>
  );
}

export default Contact;
