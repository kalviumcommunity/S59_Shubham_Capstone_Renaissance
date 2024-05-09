const projectModel = require('../models/projectSchema')
const forkModel = require('../models/forkSchema')
const userModel = require('../models/userSchema')
const checkValidation = require('../validation/checkValidation')
const forkStruc = require('../validation/forkValidation')

const forkProject = async (req, res) => {
    const projectID = req.params.projectID
    const userID = req.params.userID
    const newForkProject = new forkModel({
        dateCreated: req.body.dateCreated,
        userID: userID,
        projectID: projectID,
        chapters: req.body.chapters
    })
    if (!checkValidation(req.body, forkStruc)) {
        return res.status(400).json({ message: "Validation Failed" })
    }
    try {
        const forkedProject = await newForkProject.save()
        await userModel.findByIdAndUpdate(userID, { $push: { forkedProjects: forkedProject._id } })
        res.status(201).json(forkedProject)
    }
    catch (error) {
        console.log("Error forking project", error)
        res.status(500).json({ message: "Failed to fork Project. Try again later." })
    }
}

module.exports = {forkProject}