const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  resumeUrl: String,
  githubUrl: String,
  linkedinUrl: String,
  skillProofScore: Number,
  intentAnswers: [String],
  microAssessmentScore: Number,
});

module.exports = mongoose.model('Candidate', CandidateSchema);
