const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/joke - returns a random joke
router.get('/', async (req, res, next) => {
  try {
    const { data } = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(data);
  } catch (error) {
    next(error); // send error to global error handler
  }
});

module.exports = router;
