import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/hero.css';
import TypewriterText from './ui/TypewriterText';

const Hero: React.FC = () => {
  const titles = [
    'Software Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-greeting">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, my name is
            </motion.span>
          </div>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Ahmad Muaz
            <br />
            <span>Bin Mohammed</span>
          </motion.h1>
          
          <motion.div 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a <TypewriterText texts={titles} typingSpeed={80} />
          </motion.div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Building innovative solutions through code and exploring the frontiers of artificial intelligence.
            Passionate about creating technology that makes a difference.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-decoration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="code-block">
            <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;</div>
            <div className="code-line indent"><span className="code-property">name:</span> <span className="code-string">'Ahmad Muaz'</span>,</div>
            <div className="code-line indent"><span className="code-property">skills:</span> [<span className="code-string">'Java'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'JavaScript'</span>],</div>
            <div className="code-line indent"><span className="code-property">interests:</span> [<span className="code-string">'AI'</span>, <span className="code-string">'ML'</span>, <span className="code-string">'Software Dev'</span>],</div>
            <div className="code-line indent"><span className="code-property">education:</span> <span className="code-string">'Computer Engineering'</span>,</div>
            <div className="code-line indent"><span className="code-property">seeking:</span> <span className="code-string">'New Challenges'</span></div>
            <div className="code-line">&#125;;</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;