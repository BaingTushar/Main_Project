const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUri = process.env.MONGO_URI || 'mongodb://db-service:27017/mydb';

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Failed:', err.message));

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the Three-Tier Backend!" });
});

app.listen(5000, () => console.log('Server running on port 5000'));
