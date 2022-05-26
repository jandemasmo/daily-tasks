const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const registerValidator = require("../../middlewares/registerValidator");
const loginValidator = require("../../middlewares/loginValidator");
const auth = require("../../middlewares/auth");

router.get("/", auth.userAutenticated, homeController.home );

router.get("/register", homeController.register );
router.post("/register-user", registerValidator.validator, homeController.registerUser );

router.get("/login", homeController.login );
router.post("/login-user", loginValidator.validator, homeController.loginUser );



module.exports =  router;