const express = require('express')
const router = express.Router()
const { registerUser, updateUser } = require('../controllers/userController')

router.post('/register', registerUser)
router.put('/update', updateUser)

module.exports = router