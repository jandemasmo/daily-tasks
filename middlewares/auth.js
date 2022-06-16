const jwt = require("jsonwebtoken");
const UserSchema = require("../src/models/userSchema");

const userAutenticated = async (req, res, next) => {

    if(!req.headers.authorization && req.headers.authorization != "Bearer"){
        return res.status(401).json({message: "Acesso não permitido!"});
    }
    

    const [authType, token] = req.headers.authorization.split(" ");
    if(authType != "Bearer"){
        return res.status(401).json({message: "Acesso não permitido!"});
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        req.user =  await UserSchema.findOne({email: user.email})
        next()
    } catch (error) {
        res.status(403).json({message: "Você não possui acesso"})
    }
}


module.exports = {
    userAutenticated
}