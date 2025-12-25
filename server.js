require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const candidateRoutes = require('./routes/candidate');
const jobRoutes = require('./routes/job');
const matchRoutes = require('./routes/match');
const aiRoutes = require('./routes/ai');

app.use('/api/candidates', candidateRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/ai', aiRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));