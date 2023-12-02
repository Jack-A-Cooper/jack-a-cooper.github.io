// Demos.js
import React from 'react';

function Demos() {
  return (
    <div id="demos" className="section">
      <div className="container">
        <h1 className="landing-page">Project Demos</h1>
        <div className="svg-divider">
          <svg className="divider-style-main" height="20" width="100%">
            <line x1="0" y1="10" x2="100%" y2="10" />
          </svg>
        </div>
        <div className="container">
          <p>Coming soon... Will hopefully have some (preferably) hands-on demos or visual treats to play around with that I've worked on! Might also provide demos in video format with narration if the context requires it.</p>
          <p>In the meantime, feel free to check out these diagrams I created. The first is my take on streamlining the Best Buy home theater department workflow and converting it to a cpu flowchart! (I was terribly bored).</p>
          <p>The second is a conceptual system design mockup for an Amazon service. At least my attempt to apply my knowledge and make a pretty technical diagram at the same time.</p>
        </div>
        <div className="photo-grid">
          <div className="photo-row">
            <img src="/images/content/BBY_workflow.png" alt="Photo 1" />
          </div>
          <div className="photo-row">
            <img src="/images/content/System Design Chart - Amazon Product Concept.png" alt="Photo 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demos;

