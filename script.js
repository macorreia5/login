function logar() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if (login == "admin" && password == "admin") {
        alert("Success!!");
    }
    else {
        alert("Wrong login or password!");
    }
}
