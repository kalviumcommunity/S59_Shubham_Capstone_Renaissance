const projectModel = require('../models/projectSchema')

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

module.exports = getData