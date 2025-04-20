import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience';
import ExperienceCard from './ui/ExperienceCard';
import '../styles/components/experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="experience-intro">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My professional journey has equipped me with valuable skills and experiences in software development,
            data science, and team collaboration. Here are some highlights of my career so far.
          </motion.p>
        </div>
        
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;