import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tasks } from "../../components/Tasks"

import  {useEffect} from "react";

export function Home() {

    useEffect(() => {
        if(!localStorage.getItem("user") && !localStorage.getItem("token")){
            alert("não existe usuário")
        }
    }, []);

    return (
        <>
            <Header />
            <Tasks/>
            <Footer />
        </>
    )
}