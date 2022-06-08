import Api from "./api";

const usersService = {
    register: (params) => {
        Api.post("/register", params);
    }
}

export default usersService;