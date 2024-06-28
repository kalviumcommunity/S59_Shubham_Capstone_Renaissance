const express = require('express')
const Router = express.Router()
const sendOTP = require('../controllers/otpController')

Router.post('/send-otp', sendOTP)

module.exports = Router