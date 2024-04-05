const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    projects: {
        type: Array,
        default: []
    },
    occupation: {
        type: Array,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function (newUser) {
    try {
        const userExists = await this.findOne({ email: newUser.email })
        if (userExists) {
            throw new Error("User already exists")
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)
        const user = this.create({
            username: newUser.username,
            email: newUser.email,
            projects: newUser.projects,
            occupation: newUser.occupation,
            password: hash
        })
        return user
    }
    catch (error) {
        throw error
    }

}

const user = mongoose.model('user', userSchema)
module.exports = user