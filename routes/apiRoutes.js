const router = require('express').Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

// User Routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// Post Routes
router.post('/post', postController.createPost);
router.get('/post/:id', postController.getPost);
router.put('/post/:id', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

module.exports = router;
