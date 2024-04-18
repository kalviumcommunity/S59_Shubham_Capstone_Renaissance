const Joi = require('joi')

const userStruc = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    occupations: Joi.array().items(Joi.string()).required(),
    password: Joi.string().required(),
})


module.exports = userStruc