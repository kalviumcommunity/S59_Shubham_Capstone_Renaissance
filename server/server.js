const express = require('express')
const connectToDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 8080
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require('./routes/userRoutes')

connectToDB()

app.use(express.json())
app.use('/project', projectRoutes)
app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log("Listening at Port", PORT)
})