export interface Education {
    id: number;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    location: string;
    gpa?: string;
    description: string;
    relevantCourses?: string[];
    achievements?: string[];
  }
  
  const education: Education[] = [
    {
      id: 1,
      institution: 'Singapore Polytechnic',
      degree: 'Diploma',
      field: 'Computer Engineering',
      startDate: '2020',
      endDate: '2023',
      location: 'Singapore',
      gpa: '3.67',
      description: 'Comprehensive education in computer engineering with a focus on both hardware and software aspects of computing systems.',
      relevantCourses: [
        'Machine Learning',
        'Artificial Intelligence',
        'Object-Oriented Programming',
        'Data Structures and Algorithms',
        'Computer Networks'
      ],
      achievements: [
        'ICAS Distinctions',
        'Dean\'s List',
        'Technical Skills Competitions'
      ]
    },
    {
      id: 2,
      institution: 'Singapore University of Technology and Design (SUTD)',
      degree: 'Undergraduate Acceptance',
      field: 'Computer Science and Engineering',
      startDate: '2023',
      endDate: 'Present',
      location: 'Singapore',
      description: 'Accepted into SUTD\'s prestigious program focusing on innovative approaches to computer science and engineering.',
      relevantCourses: [
        'Advanced Algorithms',
        'Deep Learning',
        'Software Design',
        'Systems Engineering'
      ]
    }
  ];
  
  export default education;