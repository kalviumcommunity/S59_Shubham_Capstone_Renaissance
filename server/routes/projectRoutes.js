const express = require('express')
const router = express.Router()
const { getData, getOneData, postData, deleteData, getLatestData } = require('../controllers/projectController')

router.get('/', getData)
router.get('/:dataID', getOneData)
router.get('/latest', getLatestData )
router.post('/add-project', postData)
router.delete('/delete/:id', deleteData)

module.exports = router