const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/userController'); // week-7 update 


const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateAllUsers,
  deleteUser,
  deleteAllUsers
} = require('../controllers/userController');

// CRUD routes for User
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.put('/',updateAllUsers);
router.delete('/:id', deleteUser);
router.delete('/', deleteAllUsers);
router.post('/login', loginUser); //week-7 update 


module.exports = router;
