const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    tags : {
        type : Array,
        required : true
    },
    contributors : {
        type : Array,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    projectOwner : {
        type : String,
        required : true
    },
    chapters : {
        type : Array,
        required : true
    },
})

const projects = mongoose.model('project', projectSchema)

module.exports = projects