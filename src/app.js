const express = require("express");
const app = express();
const cors = require("cors");
const database = require("../config/database");
const homeRouter = require("./routers/homeRouter");
require("dotenv-safe").config();



database.connect()
app.use(express.json())
app.use(cors());


app.use("/", homeRouter );



module.exports = app;