const urlBase = "http://localhost:3000";
const urlFrontend = "http://127.0.0.1:5501/_frontend"
const registerNewUser = { url: "/register-user", method: "POST"};
const loginUser = { url: "/login-user", method: "POST"};
let userAutenticated = false;

function inicializate() {
    document.querySelector(".button_form_register, .button_form_login").addEventListener("click", getDataForm)
}

function getDataForm(event) {
    event.preventDefault()

    if (event.target.classList[1] == "button_form_register") {
        //getting data for register new user
        const name = document.querySelector("#form_register #name").value
        const email = document.querySelector("#form_register #email").value
        const password = document.querySelector("#form_register #password").value
        //registerNewUser({ name, email, password });

        requestApi({ name, email, password }, registerNewUser.url, registerNewUser.method)

    } else if (event.target.classList[1] == "button_form_login") {
        //sending user data for login 
        const email = document.querySelector("#form_login #email").value
        const password = document.querySelector("#form_login #password").value
        requestApi({ email, password }, loginUser.url, loginUser.method );
    }
}


function requestApi(data, url, method){
    if(!data){
        return 
    }
    fetch(`${urlBase}${url}`, {
        method: `${method}`,
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        return response.json();
    }).then((messages) => {
        if(messages.token){
            saveUserAutenticated(messages.token)
        }else{
            printMessageInForm(messages)
        }
        
    })
}

function printMessageInForm(messages) {
    elemento = document.querySelector("#box_message");

    for (key in messages.message){
        let spanMessage = document.createElement("p");
        spanMessage.classList.add("input--message");
        spanMessage.innerHTML = messages.message[key]
        elemento.appendChild(spanMessage)
        clearMessage(elemento, spanMessage) 
    }
}

function saveUserAutenticated(token){
    localStorage.setItem("tokenUser", token)
    userAutenticated = true;
    window.location.href = `${urlFrontend}/index.html`;
}


function clearMessage(elemento, item) {
    setTimeout(() => {
        elemento.removeChild(item)
    }, 4000)
}




inicializate()