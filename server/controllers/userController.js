const userModel = require('../models/userSchema')
const checkValidation = require('../validation/checkValidation')
const userStruc = require('../validation/userValidation')

const registerUser = async (req, res) => {
    const findUser = await userModel.findOne({ email: req.body.email })
    if (findUser) {
        console.log("User already Exists")
        return res.status(409).json({ message: "User already exists" })
    }
    if (!checkValidation(req.body, userStruc)) {
        console.log("Data Failed the validation")
        return res.status(400).json({ message: "Data validation failed. Please add data as per the norms" })
    }
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        occupation: req.body.occupation,
        password: req.body.password
    }
    try {
        const user = await userModel.signup(newUser)
        res.status(201).json(user)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Registration Failed" })
    }
}

module.exports = registerUser