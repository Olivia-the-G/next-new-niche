// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = ({ handleNavClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("events");

  // This function will toggle the visibility of the navigation modal in mobile view
  const toggleNav = () => setIsNavModalOpen(!isNavModalOpen);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <header
      className={`header bg-dark text-white vh-100 fix-to-left ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="profile-container">
        <img
          src="https://i.pinimg.com/564x/7f/4b/77/7f4b77922662e577a5202aea3d70592a.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h2>Olivia's Five</h2>
      </div>
      <nav className={`nav flex-column ${!isNavModalOpen ? "" : "open"}`}>
        <Link
          onClick={() => {
            setSelectedTab("home");
            handleNavClick("home");
          }}
          className={`nav-link test ${selectedTab === "home" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          className={`nav-link ${selectedTab === "aboutus" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("aboutus");
            handleNavClick("aboutus");
          }}
        >
          About Us
        </Link>

        <Link
          className={`nav-link ${selectedTab === "post" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("post");
            handleNavClick("post");
          }}
        >
          Blog Post
        </Link>

        <Link
          className={`nav-link ${selectedTab === "events" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("events");
            handleNavClick("events");
          }}
        >
          Events
        </Link>

        <Link
          className={`nav-link ${
            selectedTab === "featurepost" ? "active" : ""
          }`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("featurepost");
            handleNavClick("featurepost");
          }}
        >
          Feature Blog Post
        </Link>

        <Link
          className={`nav-link ${
            selectedTab === "testimonial" ? "active" : ""
          }`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("testimonial");
            handleNavClick("testimonial");
          }}
        >
          Testimonial
        </Link>

        <Link
          className={`nav-link ${selectedTab === "newsletter" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("newsletter");
            handleNavClick("newsletter");
          }}
        >
          Subscribe
        </Link>

        <Link
          className={`nav-link ${selectedTab === "LoginForm" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("LoginForm");
            handleNavClick("LoginForm");
          }}
        >
          Log In
        </Link>

        <Link
          className={`nav-link ${selectedTab === "SignUpForm" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("SignUpForm");
            handleNavClick("SignUpForm");
          }}
        >
          Sign Up
        </Link>
      </nav>

      <div className="social-links">
        <a
          href="https://linkedin.com/in/stanislavmorozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Stas-Cell-Max"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://facebook.com/stas.moozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com/stas_moozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
