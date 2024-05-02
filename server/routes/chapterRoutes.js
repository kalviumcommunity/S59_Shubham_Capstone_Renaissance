const express = require('express')
const router = express.Router()
const { getAllChaptersForProject, addNewChapter, updateChapter, deleteChapter } = require('../controllers/chapterController')

router.get('/project-chapters/:projectID', getAllChaptersForProject)
router.post('/add-chapter/:projectID', addNewChapter)
router.put('/update-chapter/:chapterID', updateChapter)
router.delete('/delete-chapter/:chapterID', deleteChapter)

module.exports = router