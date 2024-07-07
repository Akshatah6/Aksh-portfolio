import React from 'react';
import './About.css';
import profile from '../Assets/profile.jpg'; // Import your profile image

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profile} alt="Profile" className="about-pic" />
        <div className="about-details">
          <p>
            I am a web developer with expertise in React.js, JavaScript, and CSS. I enjoy building 
            user-friendly and responsive web applications. My passion for web development 
            drives me to continually learn and stay updated with the latest technologies.
          </p>
          
          <h3>Professional Experience</h3>
          <ul>
            <li>
              <strong>BMC Remedy Support Engineer</strong> at Hexaware Company (2020 - 2024)
              <ul>
                <li>Implemented and maintained BMC Remedy solutions for various clients.</li>
                <li>Provided technical support and troubleshooting for end-users.</li>
              </ul>
            </li>
            <li>
              <strong>Web Developer</strong> at Croma Campus(2024 - Present)
              <ul>
                <li>Developed and maintained web applications using React.js and other modern technologies.</li>
                <li>Collaborated with design and product teams to create seamless user experiences.</li>
              </ul>
            </li>
          </ul>

          <h3>Education</h3>
          <p>
            Bachelor of Engineering in Information Science, VTU (2013 - 2017)
          </p>
          
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>BMC Remedy</li>
            <li>Team Collaboration</li>
          </ul>

          <h3>Hobbies and Interests</h3>
          <p>
            In my free time, I enjoy hiking, reading tech blogs, and contributing to open-source projects. 
            I am also an avid traveler, constantly seeking new adventures and experiences.
          </p>

          <h3>Contact Information</h3>
          <p>Email: akshh614@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/akshatha-hiremath-1b5277316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>
      </div>
    </section>
  );
}

export default About;
