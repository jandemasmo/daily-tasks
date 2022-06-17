import Api  from "./api";

export const TasksService = {
    createTask: async (params) => {
        await Api.post("/task", params,  {
            headers: {"authorization": `Bearer ${localStorage.getItem('token')}` }
        });
    }, 
    getAllTasks: async () => {
        const tasks = await Api.get("/task", {
            headers: {"authorization": `Bearer ${localStorage.getItem('token')}` }
        })
       return tasks.data.message.tasks
    },
    getTask: async (params) =>{
        const task = await Api.get(`/task/${params.id}`, {
            headers: {"authorization": `Bearer ${localStorage.getItem('token')}` }
        })
        return task.data.message.task
    },
    updateTask: async (params) => {
        const updatedTask = await Api.put(`/task/${params.id}`, params, {
            headers: {"authorization": `Bearer ${localStorage.getItem('token')}` }
        })
        return updatedTask.data.message.sucess
    }
}
