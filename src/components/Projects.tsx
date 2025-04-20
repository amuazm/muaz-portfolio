import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData, { Project } from '../data/projects';
import ProjectCard from './ui/ProjectCard';
import '../styles/components/projects.css';

type ProjectCategory = 'all' | 'featured' | 'open-source' | 'data-science' | 'other';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects: Project[] = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: 'Featured' },
    { id: 'open-source', label: 'Open Source' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'other', label: 'Other' }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="projects-intro">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of projects that showcase my skills and experience in software development,
            artificial intelligence, and data science.
          </motion.p>
        </div>
        
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
        
        <motion.div 
          className="more-projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>Want to see more of my work?</p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="github-link">
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;