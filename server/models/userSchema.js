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
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }],
        default: []
    },
    forkedProjects: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }],
        default: []
    },
    occupations: {
        type: Array,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next()
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, salt)
        this.password = hash
        next()
    }
    catch (error) {
        next(error)
    }
})
const user = mongoose.model('user', userSchema)
module.exports = user