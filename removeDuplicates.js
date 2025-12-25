const mongoose = require('./backend/models/Candidate') ? require('mongoose') : require('mongoose');
const Candidate = require('./backend/models/Candidate'); // Adjust path if needed

mongoose.connect('your_mongodb_connection_string'); // <-- Replace with your actual connection string

async function removeDuplicates() {
  const candidates = await Candidate.aggregate([
    { $group: {
      _id: "$email",
      ids: { $push: "$_id" },
      count: { $sum: 1 }
    }},
    { $match: { count: { $gt: 1 } } }
  ]);

  for (const group of candidates) {
    // Keep the first, delete the rest
    const [keep, ...remove] = group.ids;
    await Candidate.deleteMany({ _id: { $in: remove } });
  }
  console.log('Duplicates removed');
  mongoose.disconnect();
}

removeDuplicates();
