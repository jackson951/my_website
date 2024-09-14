import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="heading">My Projects</div>
      <div className="projects-box">
        <div className="projects-item">
          <img src="weather-app.jpg" alt="Project 1" />
          <h4>Project 1</h4>
          <p>Real-time weather app providing current conditions and a 5-day forecast. Features include interactive weather maps, detailed temperature and precipitation data, and a user-friendly interface for easy navigation.</p>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>
        <div className="projects-item">
          <img src="Real-Time-Chat.png" alt="Project 2" />
          <h4>Project 2</h4>
          <p>Real-time chat app enabling instant messaging with multiple chat rooms and live updates. Features user authentication and responsive design for smooth communication across devices.</p>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;