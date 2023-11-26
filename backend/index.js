// backend/index.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
