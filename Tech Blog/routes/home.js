const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// Home route
router.get('/', async (req, res) => {
  try {
    // Fetch existing blog posts from the database
    const posts = await Post.findAll();

    res.render('home', { posts });
  } catch (error) {
    console.error('Error retrieving blog posts:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
