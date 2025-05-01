import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills';
import SkillBar from './ui/SkillBar';
import '../styles/components/skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-intro">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Throughout my education and projects, I've developed proficiency in various technologies, tools, and domains. 
            Here's a snapshot of my technical skills and expertise.
          </motion.p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((category, catIndex) => (
            <motion.div 
              key={category.id} 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={`${category.id}-${skillIndex}`}
                    name={skill.name} 
                    level={skill.level} 
                    delay={skillIndex * 100}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="additional-skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Other Skills & Interests</h3>
          <div className="skills-tags">
            <span className="skill-tag">Mobile Development</span>
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">RESTful APIs</span>
            <span className="skill-tag">Computer Vision</span>
            <span className="skill-tag">Natural Language Processing</span>
            <span className="skill-tag">Web3</span>
            <span className="skill-tag">IoT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;