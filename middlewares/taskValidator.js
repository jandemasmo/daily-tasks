const expressValidator  = require("express-validator");

const validator = expressValidator.checkSchema({
    title:{
        trim: true,
        isLength: {
            options: {min: 2}
        },
        errorMessage: "Título precisa ter pelo menos 2 caracteres"
    },

    body:{
        trim: true,
        isLength: {
            options: {min: 2}
        },
        errorMessage: "Task precisa ter pelo menos 2 caracteres"
    },
})
       

module.exports = {
    validator
}