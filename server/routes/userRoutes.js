const express = require('express')
const router = express.Router()
const { registerUser, updateUser, deleteUser, getUserProjects, loginUser, getForkedProjects } = require('../controllers/userController')

router.post('/register', registerUser)
router.put('/update', updateUser)
router.delete('/delete/:mail', deleteUser)
router.post('/login', loginUser)
router.get('/user-project/:id', getUserProjects)
router.get('/forkedProjects/:userID', getForkedProjects)

module.exports = router