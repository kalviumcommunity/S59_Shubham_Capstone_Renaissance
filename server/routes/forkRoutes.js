const express = require('express')
const router = express.Router()
const { forkProject } = require('../controllers/forkController')

router.post('/fork-project/:userID/:projectID', forkProject)

module.exports = router