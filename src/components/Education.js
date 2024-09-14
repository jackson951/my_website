import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="heading">My Education</div>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h4>North-West University</h4>
            <p>BSc IT - Final Year</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <div className="timeline-content">
            <h4>Dinao Secondary School</h4>
            <p>Completed High School</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;