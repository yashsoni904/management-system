// src/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); // Load .env variables
const app = express();

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Import routes
const userRoutes = require('./routes/userRoutes');
const clubRoutes = require('./routes/clubRoutes'); 
const eventRoutes = require('./routes/eventRoutes');
const vacancyRoutes = require('./routes/vacancyRoutes');

// Register routes
app.use('/api/users', userRoutes);
app.use('/api/clubs', clubRoutes); 
app.use('/api/events', eventRoutes);
app.use('/api/vacancies', vacancyRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
