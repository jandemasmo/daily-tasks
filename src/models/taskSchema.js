const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true},
    body: { type: String, requireed: true},
    createdAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
    authorTask: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
        required: true
    } 
})

module.exports = mongoose.model("TaskSchema", taskSchema);