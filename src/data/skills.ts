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
      { name: 'Java', level: 80 },
      { name: 'Python', level: 60 },
      { name: 'Bash', level: 50 },
      { name: 'JavaScript', level: 50 },
      { name: 'C++', level: 40 },
    ]
  },
  {
    id: 2,
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 50 },
      { name: 'Node.js', level: 60 },
      { name: 'TensorFlow', level: 50 },
      { name: 'Bukkit/Paper', level: 80 },
    ]
  },
  {
    id: 3,
    name: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Redis', level: 65 },
      { name: 'SQL', level: 65 },
      { name: 'Linux CLI', level: 60 },
      { name: 'AWS', level: 40 },
    ]
  },
  {
    id: 4,
    name: 'Areas of Expertise',
    skills: [
      { name: 'Software Development', level: 85 },
      { name: 'Artificial Intelligence', level: 65 },
      { name: 'Machine Learning', level: 65 },
      { name: 'UI/UX Design', level: 65 },
      { name: 'Data Analysis', level: 65 }
    ]
  }
];

export default skills;