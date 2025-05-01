export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  highlights: string[];
  category: 'featured' | 'open-source' | 'data-science' | 'other';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Jeracraft Territory Management System',
    description: 'A comprehensive management system for Minecraft server territories.',
    longDescription: 'Developed a complete territory management system for a Minecraft server with 5000+ players, allowing for dynamic allocation, permissions, and visualization of in-game territories.',
    technologies: ['Java', 'Spigot API', 'MySQL', 'Redis', 'React'],
    github: 'https://github.com/amuazm/territory-management',
    demo: 'https://jeracraft.net',
    highlights: [
      'Reduced territory conflicts by 85% through implementing a robust permission system',
      'Improved server performance by 40% using efficient data structures and caching',
      'Created a web dashboard for administrators to visualize and manage territories',
      'Implemented a microservice architecture to handle high player load'
    ],
    category: 'featured'
  },
  {
    id: 2,
    title: 'Moonlight-Android Open Source Contribution',
    description: 'Contributed to an open-source game streaming client for Android.',
    longDescription: 'Made significant contributions to Moonlight-Android, an open-source implementation of NVIDIA\'s GameStream protocol for Android devices.',
    technologies: ['Java', 'Android SDK', 'C++', 'OpenGL'],
    github: 'https://github.com/moonlight-stream/moonlight-android/pulls',
    highlights: [
      'Implemented hardware-accelerated video decoding for improved performance',
      'Fixed critical bugs affecting Samsung devices',
      'Optimized battery usage through more efficient rendering pipeline',
      'Added support for custom controller mappings'
    ],
    category: 'open-source'
  },
  {
    id: 3,
    title: 'Speech-to-Text Evaluation System',
    description: 'A system to evaluate and compare different speech-to-text APIs.',
    longDescription: 'Built a comprehensive system to evaluate and compare the accuracy and performance of various speech-to-text APIs for the Data Science and Analytics Centre.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Google Cloud API', 'AWS Transcribe'],
    github: 'https://github.com/amuazm/speech-to-text-eval',
    highlights: [
      'Developed a metric to quantify transcription accuracy across different accents',
      'Created a visualization dashboard for comparing API performance',
      'Implemented an automated testing pipeline for continuous evaluation',
      'Reduced evaluation time by 75% through parallel processing'
    ],
    category: 'data-science'
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets.',
    longDescription: 'Designed and implemented an interactive data visualization dashboard for the Data Science Centre, allowing researchers to explore and analyze complex datasets.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/amuazm/data-viz-dashboard',
    demo: 'https://data-viz-demo.herokuapp.com',
    highlights: [
      'Implemented 15+ visualization types for different data structures',
      'Created a custom data transformation pipeline for preprocessing',
      'Built a responsive design that works on mobile and desktop',
      'Added interactive filters and search functionality'
    ],
    category: 'data-science'
  }
];

export default projects;