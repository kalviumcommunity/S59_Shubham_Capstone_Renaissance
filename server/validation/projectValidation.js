const Joi = require('joi')

const projectStruc = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    contributors: Joi.array().items(Joi.string()).required(),
    status: Joi.string().required(),
    projectOwner: Joi.string().required()
})

module.exports = projectStruc