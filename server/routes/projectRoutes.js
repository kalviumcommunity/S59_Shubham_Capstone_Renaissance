const express = require('express')
const router = express.Router()
const { getData, postData, deleteData } = require('../controllers/projectController')

router.get('/', getData)
router.post('/add-project', postData)
router.delete('/delete/:id', deleteData)

module.exports = router