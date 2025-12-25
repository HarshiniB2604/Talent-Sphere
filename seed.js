const axios = require('axios');


const jobs = [
  {
    title: 'Backend Developer',
    description: 'Node.js and MongoDB expert',
    skills: ['Node.js', 'MongoDB', 'APIs'],
    location: 'Remote',
    company: 'Beta Inc'
  },
  {
    title: 'UI/UX Designer',
    description: 'Design modern web interfaces',
    skills: ['Figma', 'Adobe XD', 'CSS'],
    location: 'Onsite',
    company: 'DesignPro'
  },
  {
    title: 'Data Scientist',
    description: 'Analyze data and build models',
    skills: ['Python', 'Pandas', 'Machine Learning'],
    location: 'Remote',
    company: 'DataWiz'
  },
  {
    title: 'DevOps Engineer',
    description: 'Manage CI/CD pipelines and cloud infrastructure',
    skills: ['AWS', 'Docker', 'CI/CD'],
    location: 'Remote',
    company: 'CloudOps'
  }
];

const candidates = [
  {
    name: 'Alice Smith',
    email: 'alice@example.com',
    resumeUrl: 'http://resume.com/alice',
    githubUrl: 'http://github.com/alicesmith',
    linkedinUrl: 'http://linkedin.com/in/alicesmith',
    intentAnswers: ['Node.js', 'APIs'],
    microAssessmentScore: 90
  },
  {
    name: 'Bob Lee',
    email: 'bob@example.com',
    resumeUrl: 'http://resume.com/bob',
    githubUrl: 'http://github.com/boblee',
    linkedinUrl: 'http://linkedin.com/in/boblee',
    intentAnswers: ['Figma', 'CSS'],
    microAssessmentScore: 80
  },
  {
    name: 'Carol White',
    email: 'carol@example.com',
    resumeUrl: 'http://resume.com/carol',
    githubUrl: 'http://github.com/carolwhite',
    linkedinUrl: 'http://linkedin.com/in/carolwhite',
    intentAnswers: ['Python', 'Machine Learning'],
    microAssessmentScore: 95
  },
  {
    name: 'David Kim',
    email: 'david@example.com',
    resumeUrl: 'http://resume.com/david',
    githubUrl: 'http://github.com/davidkim',
    linkedinUrl: 'http://linkedin.com/in/davidkim',
    intentAnswers: ['AWS', 'Docker', 'CI/CD'],
    microAssessmentScore: 88
  }
];

async function seed() {
  for (const job of jobs) {
    await axios.post('http://localhost:5000/api/jobs/create', job)
      .then(res => console.log('Job added:', res.data.title))
      .catch(err => console.error('Job error:', err.response?.data || err.message));
  }
  for (const candidate of candidates) {
    await axios.post('http://localhost:5000/api/candidates/register', candidate)
      .then(res => console.log('Candidate added:', res.data.name))
      .catch(err => console.error('Candidate error:', err.response?.data || err.message));
  }
}

seed();
