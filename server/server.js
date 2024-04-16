const express = require('express')
const connectToDB = require('./config/db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require('./routes/userRoutes')
const artistRoutes = require('./routes/artistRoutes')

connectToDB()

app.use(cors())
app.use(express.json())
app.use('/project', projectRoutes)
app.use('/user', userRoutes)
app.use('/artist', artistRoutes)

app.listen(PORT, () => {
    console.log("Listening at Port", PORT)
})