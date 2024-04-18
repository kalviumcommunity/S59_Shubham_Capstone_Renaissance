const express = require('express')
const router = express.Router()
const { registerUser, updateUser, deleteUser, loginUser} = require('../controllers/userController')

router.post('/register', registerUser)
router.put('/update', updateUser)
router.delete('/delete/:mail', deleteUser)
router.post('/login', loginUser)

module.exports = router