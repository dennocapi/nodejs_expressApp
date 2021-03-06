
const express = require('express');
const {getUsers, getUser, createUser, deleteUser, updateUser} =
 require('../controllers/users.js');

const router = express.Router();

router.get('/users',getUsers);

router.post('/users',createUser);

router.get('/users/:id',getUser); 

router.delete('/users/:id',deleteUser);

router.patch('/users/:id',updateUser);

module.exports = router;
