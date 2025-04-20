import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/about.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Hello! I'm Ahmad Muaz, a dedicated software developer with a passion for artificial intelligence
              and machine learning. With a strong foundation in Computer Engineering from Singapore Polytechnic,
              I've honed my skills in creating innovative technological solutions.
            </p>
            
            <p>
              My journey in technology has been driven by curiosity and a desire to solve complex problems.
              I enjoy working on projects that challenge me to learn new technologies and methodologies,
              from web development to data science applications.
            </p>
            
            <p>
              When I'm not coding, I'm constantly expanding my knowledge by exploring the latest advancements
              in AI and staying updated with emerging tech trends. I believe in creating software that not only
              functions efficiently but also provides meaningful impact.
            </p>
            
            <div className="about-highlights">
              <div className="highlight">
                <h3>Fast Learner</h3>
                <p>Quick to adapt to new technologies and methodologies</p>
              </div>
              
              <div className="highlight">
                <h3>Problem Solver</h3>
                <p>Analytical approach to identifying and resolving complex issues</p>
              </div>
              
              <div className="highlight">
                <h3>Team Player</h3>
                <p>Collaborative mindset with strong communication skills</p>
              </div>
              
              <div className="highlight">
                <h3>Detail-Oriented</h3>
                <p>Meticulous attention to code quality and system architecture</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="image-container">
              {/* Replace with your own image */}
              <div className="placeholder-image">
                <span>Your Photo Here</span>
              </div>
              <div className="image-decoration"></div>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:your-email@example.com">your-email@example.com</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourusername</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;