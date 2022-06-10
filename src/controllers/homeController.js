const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const expressValidator = require("express-validator");

const home = (req, res) => {
    res.status(200).json({message: {teste: "Aqui é a home"}});
}

const login = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req).formatWith(({msg}) => {
            return msg
        });
        if(!errors.isEmpty()){
            return res.status(401).json({ message: errors.mapped() });
        }

        const userVerify = await UserSchema.findOne({email: req.body.email})
        if(!userVerify){
           return res.status(401).json({ message: {error: "Usuário não cadastrado!"}}); 
        }

        const validatePassword = bcrypt.compareSync(req.body.password, userVerify.password)
        if(!validatePassword){
            return res.status(403).json({ message: {error: "E-mail ou password inválido!"}}); 
        }

        const token = jwt.sign({email: userVerify.email}, process.env.JWT_SECRET_TOKEN )
        res.status(200).json({token, userVerify});

    } catch (error) {
        res.status(500).json({ error: {error: "Erro interno. Tente novamente!"} });
    }
}

const register = async (req, res) => {

    try {
        const errors = expressValidator.validationResult(req).formatWith(({msg}) => {
            return msg
        });

        if(!errors.isEmpty()){
            return res.status(401).json( {message: errors.mapped()});
        }


        let verifyEmail = await UserSchema.findOne({ email: req.body.email });
        
        if (!verifyEmail) {
            const passwordEcrypted = bcrypt.hashSync(req.body.password, 10)
            req.body.password = passwordEcrypted;
            const { name, email, password } = req.body;
            const newUser = new UserSchema({ name, email, password });
            await newUser.save();
            res.status(200).json({message: {success: {msg: "Usuário registrado com sucesso!"}}});
        } else {
            res.status(401).json({message: {error: "E-mail já cadastrado!"}})
        }
    } catch (error) {
            res.status(500).json({message: {error: "Erro interno. Tente novamente!"}});
    }
}


module.exports = {
    home,
    login,
    register,
}