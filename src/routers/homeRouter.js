const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const registerValidator = require("../../middlewares/registerValidator");
const loginValidator = require("../../middlewares/loginValidator");


router.get("/", homeController.home );
router.post("/register", registerValidator.validator, homeController.login );
router.post("/login", loginValidator.validator, homeController.login );



module.exports =  router;