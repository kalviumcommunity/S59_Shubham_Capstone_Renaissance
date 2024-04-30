const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    dateCreated : {
        type : Date,
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
        required : false
    },
    status : {
        type : String,
        required : true
    },
    projectOwner : {
        type : String,
        required : true
    },
    chapters :{
        type : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Chapter'
        }],
        default : []
    }
})

const projects = mongoose.model('project', projectSchema)

module.exports = projects
