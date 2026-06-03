function register(){

    let email =
    document.getElementById("registerEmail").value;

    let password =
    document.getElementById("registerPassword").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    window.location.href = "index.html";
}

function login(){

    let email =
    document.getElementById("loginEmail").value;

    let password =
    document.getElementById("loginPassword").value;

    let savedEmail =
    localStorage.getItem("email");

    let savedPassword =
    localStorage.getItem("password");

    if(
        email === savedEmail &&
        password === savedPassword
    ){

        localStorage.setItem(
        "loggedIn",
        "true"
        );

        window.location.href =
        "dashboard.html";

    }else{

        alert("Invalid Email or Password");
    }
}

function checkLogin(){

    if(
    localStorage.getItem("loggedIn")
    !== "true"
    ){

        window.location.href =
        "index.html";
    }
}

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href =
    "index.html";
}