const chapterModel = require('../models/chapterSchema')
const projectModel = require('../models/projectSchema')
const chapterStruc = require('../validation/chapterValidation')
const checkValidation = require('../validation/checkValidation')

const getAllChaptersForProject = async (req, res) => {
    try {
        const projectID = req.params.projectID
        const project = await projectModel.findById(projectID)
        if (!project) return res.status(404).json({ message: "Project does not exist" })
        const chapters = await chapterModel.find({ _id: { $in: project.chapters } })
        res.status(200).json(chapters)
    }
    catch (error) {
        console.log("Failed to fetch chapters:", error)
        res.status(500).json({ message: "Failed to fetch. Try again later" })
    }

}

const addNewChapter = async (req, res) => {
    const newChapter = new chapterModel({
        title: req.body.title,
        content: req.body.content,
        dateCreated: req.body.dateCreated
    })
    if (!checkValidation(req.body, chapterStruc)) {
        return res.status(400).json({ message: "Validation Failed" })
    }
    const projectID = req.params.projectID
    try {
        const savedChapter = await newChapter.save()
        await projectModel.findByIdAndUpdate(projectID, { $push: { chapters: savedChapter._id } })
        res.status(201).json(savedChapter)
    }
    catch (error) {
        await newChapter.remove()
        console.log("Failed to post chapter:", error)
        res.status(500).json({ message: "Failed to post chapter. Try again later" })
    }

}

module.exports = { getAllChaptersForProject, addNewChapter }