import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="heading">My Skills</div>
      <div className="skills-container">
        <div className="skills-box">
          <i className="fab fa-js"></i>
          <h4>JavaScript</h4>
          <p>Experienced in building interactive web applications using JavaScript.</p>
        </div>
        <div className="skills-box">
          <i className="fab fa-python"></i>
          <h4>Python</h4>
          <p>Skilled in Python for data analysis and automation.</p>
        </div>
        <div className="skills-box">
          <i className="fab fa-java"></i>
          <h4>Java</h4>
          <p>Proficient in Java for backend development and enterprise applications.</p>
        </div>
        <div className="skills-box">
          <i className="fab fa-html5"></i>
          <h4>HTML5</h4>
          <p>Expert in HTML5 for creating structured and semantic web pages.</p>
        </div>
        <div className="skills-box">
          <i className="fab fa-css3-alt"></i>
          <h4>CSS3</h4>
          <p>Experienced in CSS3 for styling and layout design.</p>
        </div>
        <div className="skills-box">
          <i className="fas fa-database"></i>
          <h4>Database Management</h4>
          <p>Proficient in managing and querying databases for data-driven applications.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;