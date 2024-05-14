const mongoose = require('mongoose')

const pullSchema = mongoose.Schema({
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required : true
    },
    timestamp: {
        type: Date,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedChapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
        required : true
    },
    message : {
        type : String,
        default : "No message provided"
    }
})

const pulls = mongoose.model('pull', pullSchema)
module.exports = pulls
