const express = require('express')
const router = express.Router()
const getData = require('../controllers/projectController')

router.get('/', getData)

module.exports = router