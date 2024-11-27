// src/components/Sidebar.js
import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const Sidebar = () => (
  <aside>
    {/* Profile Section */}
    <div className="profile">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="profile-img"
      />
      <h2 className="profile-name">Sajid Amin</h2>
      <p className="profile-title">Web Developer & Designer</p>
    </div>

    {/* Contact Info Section */}
    <div className="sidebar-section">
      <h3 className="section-title">Contact Info</h3>
      <ul className="contact-list">
        <li>
          <FaEnvelope />{' '}
          <a href="mailto:sajid@example.com">sajid@example.com</a>
        </li>
        <li>
          <FaPhone /> <a href="tel:+1234567890">+123 456 7890</a>
        </li>
        <li>
          <FaMapMarkerAlt /> Saint-Etienne, France
        </li>
      </ul>
    </div>

    {/* Skills Section */}
    <div className="sidebar-section">
      <h3 className="section-title">Skills</h3>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS & Sass</li>
        <li>Node.js</li>
        <li>Graphic Design</li>
      </ul>
    </div>

    {/* Social Links Section */}
    <div className="sidebar-section">
      <h3 className="section-title">Social Links</h3>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.github.com">
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter /> Twitter
          </a>
        </li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;
