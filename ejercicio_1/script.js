let loginBtn = document.getElementById("loginBtn")
let formUser = document.getElementById("formUser")
let saveBtn = document.getElementById("saveBtn")

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (username == "admin" && password == "123") {
        localStorage.setItem("user", username)
    } else {
        alert("Usuario o contraseña incorrecto")
    }

    window.location.reload()

})

let user = localStorage.getItem("user")

if (user == null) {

    console.log("No hay usuario logueado")
    formUser.classList.add("hide")

} else {

    let logoutBtn = document.createElement('button')
    logoutBtn.innerText = 'Cerrar sesión'

    logoutBtn.addEventListener('click', (e) => {
        localStorage.removeItem('user')
        window.location.reload()
    })

    document.body.appendChild(logoutBtn)

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo)

    if (userInfo != null) {
        document.getElementById("nombre").value = userInfo.nombre
        document.getElementById("apellido").value = userInfo.apellido
        document.getElementById("dni").value = userInfo.dni
        document.getElementById("fecha_nacimiento").value = userInfo.fechaNacimiento
        document.getElementById("hobbies").value =  userInfo.hobbies
    }


}

function guardarInfoUsuario() {

    let userInfo = {};

    userInfo.nombre = document.getElementById("nombre").value;
    userInfo.apellido = document.getElementById("apellido").value;
    userInfo.dni = document.getElementById("dni").value;
    userInfo.fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    userInfo.hobbies = document.getElementById("hobbies").value;

    console.log(userInfo)
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    guardarInfoUsuario();
    window.location.reload()
})