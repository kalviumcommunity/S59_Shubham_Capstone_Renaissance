const otpGenerator = require('otp-generator')
const otpModel = require('../models/otpSchema')
const userModel = require('../models/userSchema')

const sendOTP = async (req, res) => {
    try {
        const { email } = req.body
        const findUser = await userModel.findOne({ email: email })
        console.log(findUser)
        if (findUser) return res.status(401).json({ message: "User already exists" })
        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
            digits: true,
        })
        let result = await otpModel.findOne({ otp: otp })
        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
                digits: true,
            })
            result = await otpModel.findOne({ otp: otp })
        }
        const otpPayLoad = new otpModel({ email, otp })
        await otpPayLoad.save()
        res.status(200).json({ otp: otp })
    }
    catch (error) {
        console.log("Error occurred sending the otp:", error)
        return res.status(500).json({ message: "Failed to generate OTP" })
    }
}

module.exports = sendOTP