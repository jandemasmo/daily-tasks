import Api from "./api";

const UsersService = {
    register: (params) => Api.post("/register", params),
    login: async (params) => {
        const response = await Api.post("/login", params );
        localStorage.setItem("user", JSON.stringify(response.data.userVerify))
        localStorage.setItem("token", response.data.token);
    },
    logout: () =>{
        localStorage.removeItem("user", null);
        localStorage.removeItem("token", null);
    },
}

export default UsersService;

