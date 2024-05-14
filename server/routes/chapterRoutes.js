const express = require('express')
const router = express.Router()
const { getAllChaptersForProject, getChapter, addNewChapter, updateChapter, deleteChapter, getAllChaptersForForkedProject } = require('../controllers/chapterController')

router.get('/project-chapters/:projectID', getAllChaptersForProject)
router.get('/get-chapter/:chapterID', getChapter)
router.get('/forked-chapters/:forkID/:userID', getAllChaptersForForkedProject)
router.post('/add-chapter/:forkID', addNewChapter)
router.put('/update-chapter/:chapterID', updateChapter)
router.delete('/delete-chapter/:chapterID', deleteChapter)


module.exports = router