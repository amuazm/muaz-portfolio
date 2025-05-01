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
    institution: 'Madrasah Al-Arabiah Al-Islamiah',
    degree: 'L1R5: 10',
    field: 'O Levels',
    startDate: '2016',
    endDate: '2019',
    location: 'Singapore',
    description: 'Secondary school education through the Express Stream.',
    relevantCourses: [
      'English: A2',
      'Maths: A1',
      'Additional Maths: A2',
      'Pure Physics: A1',
      'Pure Chemistry: A1'
    ]
  },
  {
    id: 2,
    institution: 'Singapore Polytechnic',
    degree: 'Diploma',
    field: 'Computer Engineering',
    startDate: '2020',
    endDate: '2023',
    location: 'Singapore',
    gpa: '3.67',
    description: 'Comprehensive education in computer engineering with a focus on both hardware and software aspects of computing systems.',
    relevantCourses: [
      'Machine Learning/Artificial Intelligence',
      'Embedded Systems',
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Computer Networking',
      'Electrical Engineering'
    ]
  }
];

export default education;