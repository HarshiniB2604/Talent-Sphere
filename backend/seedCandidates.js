// seedCandidates.js
// Run this script with: node seedCandidates.js

const mongoose = require('mongoose');

// Replace with your actual MongoDB Atlas connection string
const MONGODB_URI = "";
// Candidate schema (adjust fields as needed)
const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: [String],
  experience: Number,
  jobTitle: String,
  location: String,
  education: String,
  summary: String
});

const Candidate = mongoose.model('Candidate', candidateSchema);

const candidates = [
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    skills: ['JavaScript', 'React', 'Node.js'],
    experience: 3,
    jobTitle: 'Frontend Developer',
    role: 'Frontend Developer',
    location: 'New York',
    education: 'BSc Computer Science',
    summary: 'Passionate about building interactive UIs.'
  },
  {
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    skills: ['Python', 'Django', 'REST'],
    experience: 5,
    jobTitle: 'Backend Developer',
    role: 'Backend Developer',
    location: 'San Francisco',
    education: 'MSc Software Engineering',
    summary: 'Experienced in scalable backend systems.'
  },
  {
    name: 'Carol Lee',
    email: 'carol.lee@example.com',
    skills: ['Java', 'Spring', 'Microservices'],
    experience: 4,
    jobTitle: 'Full Stack Developer',
    role: 'Full Stack Developer',
    location: 'Chicago',
    education: 'BSc Information Technology',
    summary: 'Enjoys working across the stack.'
  },
  {
    name: 'David Kim',
    email: 'david.kim@example.com',
    skills: ['C#', '.NET', 'Azure'],
    experience: 6,
    jobTitle: 'Cloud Engineer',
    role: 'Cloud Engineer',
    location: 'Seattle',
    education: 'BSc Computer Engineering',
    summary: 'Cloud solutions architect.'
  },
  {
    name: 'Eva Brown',
    email: 'eva.brown@example.com',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    experience: 2,
    jobTitle: 'UI Designer',
    role: 'UI Designer',
    location: 'Austin',
    education: 'BA Graphic Design',
    summary: 'Creative UI/UX designer.'
  },
  {
    name: 'Frank Green',
    email: 'frank.green@example.com',
    skills: ['Go', 'Kubernetes', 'Docker'],
    experience: 5,
    jobTitle: 'DevOps Engineer',
    role: 'DevOps Engineer',
    location: 'Denver',
    education: 'BSc DevOps',
    summary: 'Automation and deployment specialist.'
  },
  {
    name: 'Grace Miller',
    email: 'grace.miller@example.com',
    skills: ['PHP', 'Laravel', 'MySQL'],
    experience: 4,
    jobTitle: 'Web Developer',
    role: 'Web Developer',
    location: 'Miami',
    education: 'BSc Web Development',
    summary: 'Building robust web applications.'
  },
  {
    name: 'Henry Wilson',
    email: 'henry.wilson@example.com',
    skills: ['Swift', 'iOS', 'Xcode'],
    experience: 3,
    jobTitle: 'Mobile Developer',
    role: 'Mobile Developer',
    location: 'Boston',
    education: 'BSc Mobile Computing',
    summary: 'iOS app developer.'
  },
  {
    name: 'Ivy Chen',
    email: 'ivy.chen@example.com',
    skills: ['R', 'Statistics', 'Data Analysis'],
    experience: 5,
    jobTitle: 'Data Scientist',
    role: 'Data Scientist',
    location: 'Los Angeles',
    education: 'PhD Data Science',
    summary: 'Expert in data modeling.'
  },
  {
    name: 'Jack Turner',
    email: 'jack.turner@example.com',
    skills: ['JavaScript', 'Vue.js', 'Firebase'],
    experience: 2,
    jobTitle: 'Frontend Developer',
    role: 'Frontend Developer',
    location: 'Portland',
    education: 'BSc Computer Science',
    summary: 'Modern web developer.'
  },
  {
    name: 'Karen White',
    email: 'karen.white@example.com',
    skills: ['Python', 'Machine Learning', 'TensorFlow'],
    experience: 4,
    jobTitle: 'ML Engineer',
    role: 'ML Engineer',
    location: 'San Diego',
    education: 'MSc AI',
    summary: 'Machine learning enthusiast.'
  },
  {
    name: 'Leo Adams',
    email: 'leo.adams@example.com',
    skills: ['C++', 'Embedded Systems', 'IoT'],
    experience: 6,
    jobTitle: 'Embedded Engineer',
    role: 'Embedded Engineer',
    location: 'Dallas',
    education: 'BSc Electrical Engineering',
    summary: 'IoT and embedded systems expert.'
  },
  {
    name: 'Mona Patel',
    email: 'mona.patel@example.com',
    skills: ['Ruby', 'Rails', 'PostgreSQL'],
    experience: 3,
    jobTitle: 'Backend Developer',
    role: 'Backend Developer',
    location: 'Atlanta',
    education: 'BSc Computer Science',
    summary: 'Ruby on Rails developer.'
  },
  {
    name: 'Nate Brooks',
    email: 'nate.brooks@example.com',
    skills: ['JavaScript', 'Angular', 'TypeScript'],
    experience: 4,
    jobTitle: 'Frontend Developer',
    role: 'Frontend Developer',
    location: 'Houston',
    education: 'BSc Software Engineering',
    summary: 'Angular specialist.'
  },
  {
    name: 'Olivia Scott',
    email: 'olivia.scott@example.com',
    skills: ['SQL', 'ETL', 'Data Warehousing'],
    experience: 5,
    jobTitle: 'Data Engineer',
    role: 'Data Engineer',
    location: 'Philadelphia',
    education: 'MSc Data Engineering',
    summary: 'Data pipeline builder.'
  },
  {
    name: 'Paul Young',
    email: 'paul.young@example.com',
    skills: ['Java', 'Android', 'Kotlin'],
    experience: 3,
    jobTitle: 'Mobile Developer',
    role: 'Mobile Developer',
    location: 'Phoenix',
    education: 'BSc Computer Science',
    summary: 'Android app developer.'
  },
  {
    name: 'Quinn Davis',
    email: 'quinn.davis@example.com',
    skills: ['Scala', 'Spark', 'Big Data'],
    experience: 6,
    jobTitle: 'Big Data Engineer',
    role: 'Big Data Engineer',
    location: 'San Jose',
    education: 'MSc Computer Science',
    summary: 'Big data processing expert.'
  },
  {
    name: 'Rita Evans',
    email: 'rita.evans@example.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    experience: 2,
    jobTitle: 'Web Designer',
    role: 'Web Designer',
    location: 'Las Vegas',
    education: 'BA Design',
    summary: 'Web design and branding.'
  },
  {
    name: 'Sam Lee',
    email: 'sam.lee@example.com',
    skills: ['Python', 'Flask', 'APIs'],
    experience: 4,
    jobTitle: 'Backend Developer',
    role: 'Backend Developer',
    location: 'Orlando',
    education: 'BSc Computer Science',
    summary: 'API and backend specialist.'
  },
  {
    name: 'Tina Brown',
    email: 'tina.brown@example.com',
    skills: ['JavaScript', 'React Native', 'Redux'],
    experience: 3,
    jobTitle: 'Mobile Developer',
    role: 'Mobile Developer',
    location: 'Charlotte',
    education: 'BSc Software Engineering',
    summary: 'Cross-platform mobile developer.'
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Candidate.deleteMany({}); // Optional: clear existing candidates
    await Candidate.insertMany(candidates);
    console.log('Inserted 20 candidates successfully!');
  } catch (err) {
    console.error('Error inserting candidates:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
