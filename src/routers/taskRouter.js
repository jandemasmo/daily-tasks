const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const auth = require("../../middlewares/auth");
const taskValidator = require("../../middlewares/taskValidator");

router.get("/",auth.userAutenticated, taskController.getAllTask );
router.get("/:id",auth.userAutenticated, taskController.getTask );
router.post("/",auth.userAutenticated, taskValidator.validator, taskController.addTask );
router.put("/",auth.userAutenticated, taskValidator.validator, taskController.updateTask );
router.delete("/",auth.userAutenticated, taskController.deleteTask );

module.exports = router;