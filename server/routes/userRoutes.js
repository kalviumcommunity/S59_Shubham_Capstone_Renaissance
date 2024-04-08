const express = require('express')
const router = express.Router()
const { registerUser, updateUser, deleteUser } = require('../controllers/userController')

router.post('/register', registerUser)
router.put('/update', updateUser)
router.delete('/delete/:mail', deleteUser)

module.exports = router