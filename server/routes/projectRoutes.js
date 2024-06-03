const express = require('express')
const router = express.Router()
const { getData, getOneData, postData, deleteData, getLatestData, getContributorsList } = require('../controllers/projectController')

router.get('/', getData)
router.get('/get-project/:dataID', getOneData)
router.get('/get-contributers/:projectID', getContributorsList)
router.get('/latest/:userID', getLatestData)
router.post('/add-project', postData)
router.delete('/delete/:id', deleteData)

module.exports = router