/** @format */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/Auth');
const ticketsRouter = require('./routes/tickets');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');

dotenv.config();

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
    // Use Routes after successful connection
    app.use('/api/auth', authRoutes);
    app.use('/tickets', ticketsRouter);
    app.use('/users', usersRouter);
    app.use('/projects', projectsRouter);

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});
