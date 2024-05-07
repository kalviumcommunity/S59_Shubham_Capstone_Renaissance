const express = require('express')
const router = express.Router()
const { getData, getOneData, postData, deleteData, getLatestData, forkProject } = require('../controllers/projectController')

router.get('/', getData)
router.get('/get-project/:dataID', getOneData)
router.get('/latest/:userID', getLatestData)
router.post('/add-project', postData)
router.post('/fork-project/:userID/:projectID', forkProject)
router.delete('/delete/:id', deleteData)

module.exports = router