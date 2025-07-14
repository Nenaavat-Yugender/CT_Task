require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const jokeRoutes = require('./routes/jokeRoutes');

const app = express();
app.use(express.json()); // Middleware for parsing JSON

connectDB(); // Connect to MongoDB

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/joke', jokeRoutes);


const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
