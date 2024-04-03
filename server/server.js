const express = require('express')
const connectToDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 8080


connectToDB()
app.listen(PORT, () => {
    console.log("Listening at Port", PORT)
})