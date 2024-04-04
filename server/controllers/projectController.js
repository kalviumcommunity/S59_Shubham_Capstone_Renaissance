const projectModel = require('../models/projectSchema')
const checkValidation = require('../validation/checkValidation')
const projectStruc = require('../validation/projectValidation')

const getData = async (req, res) => {
    try {
        const data = await projectModel.find()
        res.status(200).json(data)
    }
    catch (error) {
        console.log('Error fetching data: ', error.message)
        res.status(500).json({ message: "Failed to fetch. Could not find data" })
    }

}

const postData = async (req, res) => {
    const newPost = new projectModel({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        contributors: req.body.contributors,
        status: req.body.status,
        projectOwner: req.body.projectOwner,
    })
    if (!checkValidation(req.body, projectStruc)) {
        return res.status(400).json({ message: "Validation Failed" })
    }
    try {
        const savedPost = await newPost.save()
        res.json(savedPost)
    }
    catch (error) {
        console.log('Error Posting data: ', error.message)
        res.status(500).json({ message: "Failed to Post. Could not Post data" })
    }
}

module.exports = { getData, postData }