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
    }
}
