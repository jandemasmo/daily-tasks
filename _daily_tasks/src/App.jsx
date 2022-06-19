import "./styles/global.css"
import { Routes, Route } from "react-router-dom";
import { WithAuth } from "./components/WithAuth";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UpdateTask } from "./pages/UpdateTask";
import { CreateTask } from "./pages/CreateTask";


export function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<WithAuth> <Home/> </WithAuth>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/updatetask/:id" element={<WithAuth> <UpdateTask/> </WithAuth>} />
            <Route path="/createtask" element={<WithAuth> <CreateTask/> </WithAuth>} />
        </Routes>
    )
}

