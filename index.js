/**
 * Obtener los valores del formulario de registro
 */

function obtenerValoresFormulario() {
    let correo = document.getElementById("txtCorreo").value
    let nombre = document.getElementById("txtNombre").value
    let celular = document.getElementById("txtCelular").value
    let clave = document.getElementById("txtclave").value
    let direccion = document.getElementById("txtDireccion").value
    

//forma de crear un objeto

//Inicializar un objeto con propiedades
let usuario = {celular,"clave":clave}

//Agregar propiedades a un JSON
usuario.correo=correo
usuario.direccion=direccion

// agregar propiedades con Bracket notation ["key"]
usuario["nombre"] = nombre 

//forma rapida de crear un objeto
//let usuario{correo,nombre,celular,clave,dirección} 


console.log(usuario);
}
