
function clickUsuario(){
    let ventana_usuario = document.getElementById('ventana_usuario');
    let ventana_clases = ventana_usuario.className;
    let ventana_abierta = ventana_clases.includes('mostrar-ventana');
    //si le quitamos la clase mostrar-ventana , la ventana se cierra
    if(ventana_abierta){
        ventana_usuario.classList.remove('mostrar-ventana'); 
    } else {
        ventana_usuario.classList.add('mostrar-ventana');
    }
//console.log('ventana: ', ventana_abierta);
}
function cerrarVentana(){
    let ventana_usuario = document.getElementById('ventana_usuario');
    let ventana_clases = ventana_usuario.className;
    let ventana_abierta = ventana_clases.includes('mostrar-ventana'); 
    if(ventana_abierta){
        ventana_usuario.classList.remove('mostrar-ventana'); 
    }
}

function validarInicioSesion(){
    let usuario = localStorage.getItem('nombre_usuario');
    let contrasenia = localStorage.getItem('password_usuario');
    console.log(usuario);
    console.log(contrasenia);
    if(usuario == null && contrasenia == null){
        window.location.href= 'login.html';
    }

}


window.addEventListener("click",function(event){
    console.log('evento: ',event.target.id);
    if(event.target.id !== 'ventana_usuario' 
        && event.target.id !=='btn_usuario' 
        && event.target.id !== 'close_icon'){
        cerrarVentana();
    }
    
})
validarInicioSesion();
    

