import React from 'react';
import { motion } from 'framer-motion';
import educationData from '../data/education';
import '../styles/components/education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.id}
              className="education-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              
              <div className="education-card">
                <div className="education-header">
                  <h3>{edu.institution}</h3>
                  <span className="education-date">{edu.startDate} - {edu.endDate}</span>
                </div>
                
                <div className="education-degree">
                  <span>{edu.degree} in {edu.field}</span>
                  {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                {edu.relevantCourses && (
                  <div className="education-courses">
                    <h4>Relevant Coursework:</h4>
                    <ul>
                      {edu.relevantCourses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {edu.achievements && (
                  <div className="education-achievements">
                    <h4>Achievements:</h4>
                    <ul>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;