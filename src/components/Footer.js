import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/jackson-khuto-625360267/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/jackson951"><i className="fab fa-github"></i></a>
        <a href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></a>
      </div>
      <ul className="list">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p>&copy; 2024 Jackson Mahlotle Khuto. All rights reserved.</p>
    </footer>
  );
};

export default Footer;