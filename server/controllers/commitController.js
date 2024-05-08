const projectModel = require('../models/projectSchema')
const userModel = require('../models/userSchema')
const chapterModel = require('../models/chapterSchema')
const commitModel = require('../models/commitSchema.js')

const setCommit = async (req, res) => {
    const newCommit = new commitModel({
        projectID: req.body.projectID,
        timestamp: req.body.timestamp,
        userID: req.body.userID,
        updatedChapter: req.body.chapterID
    })
    try {
        const committedPost = await newCommit.save()
        await userModel.findByIdAndUpdate(req.body.commits, { $push: { commits: committedPost._id } })
        res.status(201).json(committedPost)
    }
    catch (error) {
        await newCommit.deleteOne()
        console.log('Error committing data: ', error.message)
        res.status(500).json({ message: "Failed to Commit. Could not Commit data" })
    }
}

const getApprovalRequests = async (req, res) => {
    try {
        const userID = req.params.userID
        const requests = await commitModel.find({ userID: userID })
        if (!requests || requests.length === 0) {
            return res.status(404).json({ message: "No requests for now" })
        }
        res.status(200).json(requests)
    }
    catch (error) {
        console.log("Error fetching requests: ", error)
        res.status(500).json({ message: "Failed to fetch Requests. Could not fetch Requests" })
    }
}

const getOneCommit = async (req, res) => {
    try {
        const commitID = req.params.commitID
        const commit = await commitModel.findById(commitID)
        if (!commit) {
            console.log("Commit not found")
            return res.status(404).json({ message: "Commit not found" })
        }
        res.status(200).json(commit)
    }
    catch (error) {
        console.log('Error fetching commit: ', error.message)
        res.status(500).json({ message: "Failed to fetch. Could not find commit" })
    }
}

const clearCommit = async (req, res) => {
    try {
        const commitID = req.params.commitID
        const commitToClear = await commitModel.findByIdAndDelete(commitID)
        if (!commitToClear) {
            console.log("Commit does not exist")
            return res.status(404).json({ message: "Commit not found. Check the id" })
        }
        await userModel.updateMany({ commits: commitID }, { $pull: { commits: commitID } })
        console.log("Commit cleared successfully")
        res.status(200).json({ message: "Commit cleared successfully" })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Commit failed. Try again later." })
    }
}

module.exports = { setCommit, getApprovalRequests, getOneCommit, clearCommit }