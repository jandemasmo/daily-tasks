import "./styles/global.css"
import {Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SingleTask } from "./pages/SingleTask";
import { AddAndEdit } from "./pages/AddAndEdit";

export function App(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/task" element={<SingleTask/>} />
            <Route path="/addtask" element={<AddAndEdit/>} />
            <Route path="/updatetask" element={<AddAndEdit/>} />
        </Routes>
    )
}