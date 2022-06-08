import Api from "./api";

const UsersService = {
    register: (params) => Api.post("/register", params),
    
}

export default UsersService;

