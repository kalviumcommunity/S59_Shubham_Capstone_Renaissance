const express = require('express')
const router = express.Router()
const { getAllChaptersForProject, addNewChapter } = require('../controllers/chapterController')

router.get('/project-chapters/:projectID', getAllChaptersForProject)
router.post('/add-chapter/:projectID', addNewChapter)

module.exports = router