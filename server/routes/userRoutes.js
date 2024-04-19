const express = require('express')
const router = express.Router()
const { registerUser, updateUser, deleteUser, getUserProjects } = require('../controllers/userController')

router.post('/register', registerUser)
router.put('/update', updateUser)
router.delete('/delete/:mail', deleteUser)
router.get('/userProjects/:userId', getUserProjects)

module.exports = router