const mongoose = require('mongoose')

const commitSchema = mongoose.Schema({
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
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
        ref: 'Chapter'
    }
})

const commits = mongoose.model('commit', commitSchema)
module.exports = commits
