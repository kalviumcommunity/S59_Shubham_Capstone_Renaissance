const express = require('express')
const connectToDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes/projectRoutes')

connectToDB()
app.use(express.json())
app.use('/api', routes)
app.listen(PORT, () => {
    console.log("Listening at Port", PORT)
})