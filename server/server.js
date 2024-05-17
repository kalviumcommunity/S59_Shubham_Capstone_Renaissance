const express = require('express')
const connectToDB = require('./config/db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require('./routes/userRoutes')
const artistRoutes = require('./routes/artistRoutes')
const chapterRoutes = require('./routes/chapterRoutes')
const pullRoutes = require('./routes/pullRoutes')
const forkRoutes = require('./routes/forkRoutes')
const fileRoutes = require('./routes/fileUpload')

connectToDB()

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use('/project', projectRoutes)
app.use('/user', userRoutes)
app.use('/artist', artistRoutes)
app.use('/file', fileRoutes)
app.use('/chapter', chapterRoutes)
app.use('/pull', pullRoutes)
app.use('/fork', forkRoutes)

app.listen(PORT, () => {
    console.log("Listening at Port", PORT)
})