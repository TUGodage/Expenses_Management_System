// Auth router
const app = require('express');
const router = app.Router();

// Auth controller
const authController = require('../controllers/AuthController');

// Signup route
router.post('/signup', authController.signUp);

// Login
router.post('/login', authController.login);

module.exports = router;