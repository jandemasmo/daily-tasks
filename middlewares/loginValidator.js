const expressValidator  = require("express-validator");

const validator = expressValidator.checkSchema({
    email:{
        isEmail: true,
        normalizeEmail: true,
        errorMessage: "Infome um e-mail válido"
    },
    password:{
        isLength: {
            options: {min: 2}
        },
        errorMessage: "Senha precisa de pelo menos 2 caracteres"
    }
})
       

module.exports = {
    validator
}