const app = require('express');
const router = app.Router();

// Auth routes
const AuthRoutes = require('./authRoutes');
router.use('/auth', AuthRoutes);

// Topic routes
const ExpenseRoutes = require('./expenseRouter');
router.use('/expense', ExpenseRoutes);

module.exports = router;