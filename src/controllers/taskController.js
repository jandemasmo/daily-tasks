const TaskSchema = require("../models/taskSchema");
const expressValidator = require("express-validator");


const getAllTask = async (req, res) => {
    try {
        const tasks  = await TaskSchema.find({authorTask: req.user._id});
        
        if(!tasks){
            return res.status(404).json({ message: {error: "Você não possui nenhuma task!"} });
        }
        res.status(200).json({ message: { tasks } })
       
    } catch (error) {
        res.status(500).json({message: {error: "Erro interno tente novamente"}})
    }
    
}

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskSchema.findById({_id: id})
        res.status(200).json({message: {task}})
    } catch (error) {
        res.status(500).json({message: {error: "Erro interno tente novamente"}})
    }
}

const addTask = async (req, res) => {
    try {
        const { title, body } = req.body
        const errors = expressValidator.validationResult(req).formatWith(({msg}) => msg)
        if(!errors.isEmpty()){
            return res.status(401).json({ message: errors.mapped() });
        }

        const task = await TaskSchema.create({title, body, authorTask: req.user._id});
        res.status(200).json({message: {sucess: "Task adicionada com sucesso!", task}})

    } catch (error) {
        res.status(500).json({message: {error: "Erro interno tente novamente"}})
    }
}

const updateTask = async (req, res) => {

}

const deleteTask = async (req, res) => {

}

module.exports = {
    getAllTask,
    getTask,
    addTask,
    updateTask,
    deleteTask
}