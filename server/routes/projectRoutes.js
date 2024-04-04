const express = require('express')
const router = express.Router()
const {getData, postData}= require('../controllers/projectController')

router.get('/', getData)
router.post('/add-project', postData)

module.exports = router