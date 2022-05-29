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
        const task = await TaskSchema.find({_id: id, authorTask: req.user._id})
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
    try {
        taskExists = await TaskSchema.findOne({_id: req.params.id, authorTask: req.user._id})
        if(taskExists){
            taskExists.title = req.body.title || taskExists.title
            taskExists.body = req.body.body || taskExists.body
        }
        await taskExists.save()
        res.status(200).json({message: {sucess: "Task atualizada com sucesso!", taskExists}})
    } catch (error) {
        res.status(500).json({message: {error: "Erro interno tente novamente"}})
    }
}

const deleteTask = async (req, res) => {
    try {
        await TaskSchema.findOneAndDelete({_id: req.params.id, authorTask: req.user._id})
        res.status(200).json({message: {sucess: "Task deletada com sucesso!"}})
    } catch (error) {
        res.status(500).json({message: {error: "Erro interno tente novamente"}})
    }
}

module.exports = {
    getAllTask,
    getTask,
    addTask,
    updateTask,
    deleteTask
}