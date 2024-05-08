const express = require('express')
const router = express.Router()
const { setCommit, getApprovalRequests, getOneCommit, clearCommit } = require('../controllers/commitController')

router.get('/get-commit/:commitID', getOneCommit)
router.get('/requests/:userID', getApprovalRequests)
router.post('/commit', setCommit)
router.delete('/clear-commit/:commitID', clearCommit)

module.exports = router
