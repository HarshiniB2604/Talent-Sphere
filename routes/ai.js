const express = require('express');
const router = express.Router();

const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Analyze candidate intent using OpenAI
router.post('/analyze-intent', async (req, res) => {
  const { answers } = req.body;
  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'answers (array) required' });
  }
  try {
    const prompt = `Analyze the following candidate answers for intent, motivation, and fit for a software job. Give a short summary and a score out of 10. Answers: ${answers.join(' | ')}`;
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are an expert technical recruiter.' },
        { role: 'user', content: prompt }
      ]
    });
    const aiResponse = completion.choices[0].message.content;
    res.json({ summary: aiResponse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
