import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <h1>Hi, I'm <span>Jackson</span></h1>
        <h3>Final-Year BSc IT Student</h3>
        <p>I am passionate about software development and have a strong foundation in building web and desktop applications. I enjoy solving complex problems, continuously improving my skills, and contributing to impactful projects.</p>
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/jackson-khuto-625360267/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/jackson951"><i className="fab fa-github"></i></a>
          <a href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="btn-group">
          <a href="my_cv.pdf" className="btn">Download CV</a>
        </div>
        <div className="about-img">
          <img src="profile.jpg" alt="Jackson Mahlotle Khuto" />
        </div>
      </div>
    </section>
  );
};

export default About;