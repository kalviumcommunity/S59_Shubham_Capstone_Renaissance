const express = require('express')
const router = express.Router()
const { getAllChaptersForProject, getChapter, addNewChapter, updateChapter, deleteChapter } = require('../controllers/chapterController')

router.get('/project-chapters/:projectID', getAllChaptersForProject)
router.get('/get-chapter/:chapterID', getChapter)
router.post('/add-chapter/:projectID', addNewChapter)
router.put('/update-chapter/:chapterID', updateChapter)
router.delete('/delete-chapter/:chapterID', deleteChapter)

module.exports = router