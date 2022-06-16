import { Navigate } from "react-router-dom"

export function WithAuth({children} ){
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
        return children
    }
    return <Navigate to={"/login"} />
    
};
