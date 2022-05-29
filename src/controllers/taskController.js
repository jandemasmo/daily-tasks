
const getAllTask =  (req, res) => {
    res.status(200).json({message: {teste: "OGet All task"}})
}

const getTask =  (req, res) => {
    res.status(200).json({message: {teste: "get Task"}})
}

const addTask = async (req, res) => {

}

const  updateTask= async (req, res) => {

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