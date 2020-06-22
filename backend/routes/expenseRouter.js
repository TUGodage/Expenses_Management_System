// Expense router
const app = require('express');
const router = app.Router();

// Auth middleware
const CheckAuth = require('../shared/middleware/AuthMiddleware')

// Controller
const ExpenseController = require('../controllers/ExpenseController')

// Create
router.post('/', CheckAuth, ExpenseController.create);

// Update
router.put('/', CheckAuth, ExpenseController.update);

// Get all
router.get('/', CheckAuth, ExpenseController.listByUser);

// Delete by id
router.delete('/:id', CheckAuth, ExpenseController.delete);

module.exports = router;