let nombre = "Juan"

let apellido = "Vivas"

const persona = {
    nombre: "Juan",
    apellido: "Vivas"
}

//sessionStorage.setItem("persona", JSON.stringify(persona))

//localStorage.setItem("persona", JSON.stringify(persona))

let fechaExpiracion = new Date();
fechaExpiracion.setTime(fechaExpiracion.getTime() + (2 * 60 * 1000));
document.cookie = "miObjeto=" + JSON.stringify(objeto) + "; expires=" + fechaExpiracion.toUTCString();

