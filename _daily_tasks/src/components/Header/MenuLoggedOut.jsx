import {Link } from "react-router-dom";

export function MenuLoggedOut() {



    return (
        <ul>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/register"}> Register</Link></li>
        </ul>
    )
}