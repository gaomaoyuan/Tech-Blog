const router = require('express').Router();
const { ensureAuth } = require('../config/auth');

// Homepage Route
router.get('/', async (req, res) => {
  res.render('home');
});

// Dashboard Route
router.get('/dashboard', ensureAuth, async (req, res) => {
  res.render('dashboard');
});

// Login Route
router.get('/login', (req, res) => {
  res.render('login');
});

// Signup Route
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
