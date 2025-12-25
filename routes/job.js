const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Create a new job posting
router.post('/create', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// List all jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
