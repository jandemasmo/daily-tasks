import { useState } from "react";
import {Navigate} from "react-router-dom";
import UsersService from "../../services/usersService"
export function MenuLoggedIn() {
    const [redirectLogoutUser, setRedirectLogoutUser] = useState(false);

    const logout = async function(event){
        await UsersService.logout();
        setRedirectLogoutUser(true)
    }

    if(redirectLogoutUser){
        return <Navigate to={"/login"}/>
    }

    return (
        <ul>
            <li><a href="#" onClick={logout}>Logout</a></li>
            <li><a href="#" >Profile</a></li>
        </ul>
    )
}