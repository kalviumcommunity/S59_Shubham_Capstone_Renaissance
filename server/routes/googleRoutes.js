const passport = require('passport')
const express = require('express')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userSchema')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router()
require('dotenv').config()

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const SERVER_URI = process.env.SERVER_URI;
const CLIENT_URI = process.env.CLIENT_URI;
const SECRET = process.env.SECRET;

passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: `${SERVER_URI}/google-auth/google/callback`,
    scope: ['profile', 'email']
},
    async (accessToken, refreshToken, profile, callback) => {
        try {
            const data = profile._json;
            const email = data.email;
            const name = profile.displayName;
            let user = await userModel.findOne({ email: email });
            if (!user) {
                user = new userModel({
                    username: name,
                    email: email
                })
                await user.save()
            }
            return callback(null, user)
        }
        catch (error) {
            console.log("Error during authentication:", error)
            return callback(error, null)
        }
    }
))

passport.serializeUser((user, callback) => {
    console.log("Serializing the user:", user)
    callback(null, user._id)
})

passport.deserializeUser(async (id, callback) => {
    try {
        const user = await userModel.findById(id)
        console.log("Deserializing user:", user)
        callback(null, user)
    }
    catch (error) {
        console.log("Error during deserialization:", error)
        callback(error, null)
    }
})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: `${CLIENT_URI}/register`, successRedirect: `${CLIENT_URI}/success` }))
router.get('/google/callback', (req, res, next) => {
    passport.authenticate('google', (err, user, info) => {
        if (err) {
            console.log("Authentication error:", err);
            return res.redirect(`${CLIENT_URI}/register?error=${encodeURIComponent(err.message)}`);
        }
        if (!user) {
            console.log("No user returned during authentication:", info);
            return res.redirect(`${CLIENT_URI}/register?error=User not authenticated`);
        }
        req.logIn(user, (loginErr) => {
            if (loginErr) {
                console.log("Login error:", loginErr);
                return res.redirect(`${CLIENT_URI}/register?error=${encodeURIComponent(loginErr.message)}`);
            }
            res.redirect(`${CLIENT_URI}/success`);
        });
    })(req, res, next);
});

router.get('/google/session', async (req, res) => {
    if (req.session.passport) {
        const userID = req.session.passport.user
        const findUser = await userModel.findById(userID)
        const accessToken = jwt.sign({ userID: findUser._id, userName: findUser.username, email: findUser.email }, SECRET, { expiresIn: '6h' })
        res.status(200).json({ message: "Login Sucessfull", accessToken: accessToken })
    } else {
        return res.status(401).json({ message: "Not authenticated. Please log in." });
    }
})

module.exports = router
