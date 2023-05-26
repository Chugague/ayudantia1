function inicioSesion(){

    const contrasenia = '123';
    const usuario = 'user123';
    let nombre_usuario = document.getElementById('nombre_usuario').value;
    let password_usuario = document.getElementById('password_usuario').value;

    if(contrasenia == password_usuario && usuario == nombre_usuario){
        localStorage.setItem('nombre_usuario', nombre_usuario);
        localStorage.setItem('password_usuario', password_usuario);
        window.location.href = 'index.html';

    }
}
function cerrarSesion(){
    let usuario = localStorage.getItem('nombre_usuario');
    let contrasenia = localStorage.getItem('password_usuario');
    console.log(contrasenia);
    if(usuario != null && contrasenia != null){
        localStorage.clear();
        window.location.href = 'login.html';

        }
    }
    

