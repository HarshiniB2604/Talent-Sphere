const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

router.post('/register', async (req, res) => {
  const candidate = new Candidate(req.body);
  await candidate.save();
  res.json(candidate);
});

router.get('/', async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
});

module.exports = router;
