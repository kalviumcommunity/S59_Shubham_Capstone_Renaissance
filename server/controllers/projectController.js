const projectModel = require('../models/projectSchema')

const getData = async (req, res) => {
    try {
        const data = await projectModel.find()
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = getData