const Joi = require('joi')

const chapterStruc = Joi.object({
    title: Joi.string().required(),
    dateCreated: Joi.date().required(),
    content: Joi.string().required()
})

module.exports = chapterStruc