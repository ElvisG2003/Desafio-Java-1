let amigos = [];
let nombre = "";

function agregarAmigos(){
    nombre = document.getElementById(`agregarAmigos`).value;
    if (nombre.trim()=! "") { //Con .trim eliminamos los espacios vacios al principio y final del nombre, de tal forma que los espacios vacios no se suman a la lista//
       amigos.push(nombre);
       console.log(amigos); 
    } else {
        alert("Ingresa un nombre valido")
    }
}

