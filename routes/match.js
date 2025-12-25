const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');
const Job = require('../models/Job');

// Simple matching: candidates with at least one matching skill
router.get('/:jobId', async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  if (!job) return res.status(404).json({ error: 'Job not found' });
  const candidates = await Candidate.find({
    // This matches if any skill in job.skills is in candidate.intentAnswers (for demo)
    intentAnswers: { $in: job.skills }
  });
  res.json({ job, candidates });
});

module.exports = router;
