import "./styles/global.css"
import { Routes, Route } from "react-router-dom";
import { WithAuth } from "./components/WithAuth";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SingleTask } from "./pages/SingleTask";
import { AddAndEdit } from "./pages/AddAndEdit";


export function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<WithAuth> <Home/> </WithAuth>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/task" element={<WithAuth> <SingleTask/> </WithAuth>} />
            <Route path="/addtask" element={<WithAuth> <AddAndEdit/> </WithAuth>}/>
            <Route path="/updatetask" element={<WithAuth> <AddAndEdit/> </WithAuth>} />
        </Routes>
    )
}

