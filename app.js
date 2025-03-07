let amigos = [];

function agregarAmigos(){
    let nombre = document.getElementById(`amigo`).value;
    if (nombre.trim() !== "") { //Con .trim eliminamos los espacios vacios al principio y final del nombre, de tal forma que los espacios vacios no se suman a la lista//
        if (amigos.includes(nombre)) {
            alert("Este amigo ya esta en tu lista")       
        } else {
            amigos.push(nombre);
            console.log(amigos);
            document.getElementById(`amigo`).value = "";
            agregarLista();
        }
    } else {
        alert("Ingresa un nombre valido")
    }
}

function agregarLista(){
    let lista = document.getElementById(`listaAmigos`);
    lista.innerHTML = ""; //Nos aseguramos que lista este vacio//

    for (let i = 0; i <amigos.length; i++){ //For funciona similar a un bucle controlado, donde damos el primer parametro, el cual marcara el inicio del bucle, el segundo parametro que hara la comparacion de hasta donde ira el for y el tercero que nos dira que aspectos cambian despues de cada bucle//
        let li = agregarLi(amigos[i]);
        lista.appendChild(li); //Insertamos li al ul//
    }
}

function sortearAmigo() {
    if (amigos.length > 0 ){
        let resultado = document.getElementById(`resultado`);
        resultado.innerHTML = "";
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let li = agregarLi(amigoSorteado);
        resultado.appendChild(li);
    }else{
        alert("No tienes amigos en tu lista")
    }
}

function agregarLi(texto){ //Debido al repetido uso del li, simplificaremos con esta funcion//
    let li = document.createElement(`li`);
    li.textContent = texto;
    return li;
}