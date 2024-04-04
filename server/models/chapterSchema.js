const mongoose = require('mongoose')

const chapterSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        default : "My first chapter!"
    }
})

const chapters = mongoose.model('Chapter', chapterSchema)

module.exports = chapters