import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const darkModeIcon = darkModeToggle.querySelector("i");

    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });

    navbar.addEventListener("click", (event) => {
      if (event.target.tagName === 'A') {
        navbar.classList.remove("active");
        menuIcon.classList.remove("active");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navbar.classList.remove("active");
        menuIcon.classList.remove("active");
      }
    });

    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
      } else {
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
      }
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      darkModeIcon.classList.remove("fa-sun");
      darkModeIcon.classList.add("fa-moon");
    }
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo"><span>Jackson</span> Khuto</a>
      <nav className="navbar">
        <a href="#about" className="active">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-icons">
        <button id="dark-mode-toggle" aria-label="Toggle Dark Mode">
          <i className="fas fa-sun"></i>
        </button>
        <div id="menu-icon"><i className="fas fa-bars"></i></div>
      </div>
    </header>
  );
};

export default Navbar;