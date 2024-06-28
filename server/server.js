const express = require('express')
require('dotenv').config({ path: './envFiles/.env' })
const session = require("express-session")
const passport = require("passport")
const rateLimit = require('express-rate-limit')
const connectToDB = require('./config/db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080
const SESSION_SECRET = process.env.SESSION_SECRET
const CLIENT_URI = process.env.CLIENT_URI
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require('./routes/userRoutes')
const artistRoutes = require('./routes/artistRoutes')
const chapterRoutes = require('./routes/chapterRoutes')
const pullRoutes = require('./routes/pullRoutes')
const forkRoutes = require('./routes/forkRoutes')
const fileRoutes = require('./routes/fileUpload')
const googleRoutes = require('./routes/googleRoutes')
const socialRoutes = require('./routes/SocialRoutes')
const otpRoutes = require('./routes/otpRoutes')
const cookieParser = require('cookie-parser')

connectToDB()
const corsOptions = {
  origin: CLIENT_URI,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions))
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
)
const limiter = rateLimit({
  max: process.env.PULL_RATE,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests. Try again after an hour'
})
app.use('/pull/pull', limiter)
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('public'))
app.use(express.json())
app.use('/project', projectRoutes)
app.use('/user', userRoutes)
app.use('/artist', artistRoutes)
app.use('/file', fileRoutes)
app.use('/chapter', chapterRoutes)
app.use('/pull', pullRoutes)
app.use('/fork', forkRoutes)
app.use('/google-auth', googleRoutes)
app.use('/socials', socialRoutes)
app.use('/otp', otpRoutes)

app.listen(PORT, () => {
  console.log("Listening at Port", PORT)
})