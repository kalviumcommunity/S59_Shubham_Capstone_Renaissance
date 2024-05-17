const userModel = require('../models/userSchema')

const updateProfileImage = async (req, res) => {
    try {
        const userID = req.params.userID
        const findUser = await userModel.findById(userID)
        if (!findUser) return res.status(404).json({ message: "User not found" })
        findUser.profileImage = req.file.path
        const savedUser = await findUser.save()
        res.status(200).json(savedUser)
    }
    catch (error) {
        console.log("Error updating the profile image. Try again later", error)
        res.status(500).json({ message: "Error updating the profile image. Try again later" })
    }
}

module.exports = { updateProfileImage }