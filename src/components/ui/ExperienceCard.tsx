import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../data/experience';
import '../../styles/components/experiencecard.css';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div 
      className="experience-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="experience-header">
        <div className="experience-title">
          <h3>{experience.position}</h3>
          <div className="experience-company">
            <span>{experience.company}</span>
            {experience.url && (
              <a href={experience.url} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="experience-meta">
          <div className="experience-date">
            {experience.startDate} - {experience.endDate}
          </div>
          <div className="experience-location">{experience.location}</div>
        </div>
      </div>
      
      <p className="experience-description">{experience.description}</p>
      
      <div className="experience-responsibilities">
        <h4>Key Responsibilities:</h4>
        <ul>
          {experience.responsibilities.map((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </ul>
      </div>
      
      <div className="experience-skills">
        {experience.skills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;