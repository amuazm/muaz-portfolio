export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  url?: string;
}

const experience: Experience[] = [
  {
    id: 1,
    company: 'Data Science and Analytics Centre',
    position: 'Intern',
    startDate: 'May 2022',
    endDate: 'August 2022',
    location: 'Singapore',
    description: 'Worked as an intern at the Data Science and Analytics Centre, contributing to research and development projects focused on speech recognition and data visualization.',
    responsibilities: [
      'Developed and evaluated speech-to-text models for different accents and languages',
      'Created interactive data visualization dashboards for research projects',
      'Collaborated with a team of researchers and engineers on natural language processing tasks',
      'Optimized data processing pipelines for improved performance'
    ],
    skills: [
      'Python', 'TensorFlow', 'Data Visualization', 'Speech Recognition', 'Natural Language Processing'
    ],
    url: 'https://www.example.com/dsac'
  },
  {
    id: 2,
    company: 'Jeracraft',
    position: 'Lead Developer',
    startDate: 'January 2021',
    endDate: 'Present',
    location: 'Remote',
    description: 'Serving as the lead developer for a popular Minecraft server with over 5,000 active players, responsible for creating custom plugins and managing the development team.',
    responsibilities: [
      'Designed and implemented a comprehensive territory management system',
      'Optimized server performance through efficient code and database design',
      'Managed a team of junior developers and coordinated development efforts',
      'Created custom gameplay features to enhance player experience',
      'Implemented security measures to protect against exploits and cheats'
    ],
    skills: [
      'Java', 'Spigot API', 'MySQL', 'Redis', 'Team Leadership', 'System Architecture'
    ],
    url: 'https://jeracraft.net'
  }
];

export default experience;