// Remove duplicate candidates by email, keeping only one per email
const mongoose = require('mongoose');
const Candidate = require('./models/Candidate');

mongoose.connect(process.env.MONGO_URI || 'your-mongodb-uri-here', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const duplicates = await Candidate.aggregate([
      { $group: { _id: '$email', ids: { $push: '$_id' }, count: { $sum: 1 } } },
      { $match: { count: { $gt: 1 } } }
    ]);
    for (const dup of duplicates) {
      // Keep the first, remove the rest
      const idsToDelete = dup.ids.slice(1);
      await Candidate.deleteMany({ _id: { $in: idsToDelete } });
    }
    console.log('Duplicate candidates removed.');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.disconnect();
  });
