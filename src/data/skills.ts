export interface Skill {
    name: string;
    level: number; // 0-100
    icon?: string;
  }
  
  export interface SkillCategory {
    id: number;
    name: string;
    skills: Skill[];
  }
  
  const skills: SkillCategory[] = [
    {
      id: 1,
      name: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'HTML/CSS', level: 85 }
      ]
    },
    {
      id: 2,
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'TensorFlow', level: 65 },
        { name: 'PyTorch', level: 60 },
        { name: 'Spring Boot', level: 70 }
      ]
    },
    {
      id: 3,
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      id: 4,
      name: 'Areas of Expertise',
      skills: [
        { name: 'Software Development', level: 85 },
        { name: 'Artificial Intelligence', level: 75 },
        { name: 'Machine Learning', level: 70 },
        { name: 'UI/UX Design', level: 65 },
        { name: 'Data Analysis', level: 80 }
      ]
    }
  ];
  
  export default skills;