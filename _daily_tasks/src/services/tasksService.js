import Api  from "./api";

export const TasksService = {
    createTask: async (params) => {
        await Api.post("/task", params,  {
            headers: {"authorization": `Bearer ${localStorage.getItem('token')}` }
        });
    }
}
