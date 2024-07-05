//Programa para juego secreto
let numeroSecreto; //inicializar variables vacias
let intentos; //en la funcion condiciones iniciales se le asignara un valor
let listaNumerosSorteados = []; //variable para almacenar numeros jugados
let numeroMaximo = 10;

console.log(numeroSecreto); 
function asignarTextoElemento(elemento, texto){ //funcion creada para poder utilizarla varias veces y no tener tantas lineas de codigo
    let elementoHTML = document.querySelector(elemento); //retorna el elemento que se menciona entre parentesis, es un objeto no una variable, titulo
    elementoHTML.innerHTML = texto; //asigna un texto al objeto o elemento h1 establecido en HTML
    return; //
}

console.log(intentos);
function verificarIntento(){ //declaracion de una funcion y en HTML se manda a llamar
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //getElement se utiliza para acceder a un elemento por su id, este id
    //sale de input, el punto se utiliza para que devuelva el atributo que requerimos, parseInt es para forzar que sea un número y no string
    if (numeroDeUsuario === numeroSecreto){ //compara los valores y retorna un booleano true/false
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);//cambia el texto que contiene el elemento denominado 'p'
        document.getElementById('reiniciar').removeAttribute('disabled'); //se habilita el boton de nuevo juego al quitar la etiqueta disabled
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++; //contador que aumenta en cada intento
        limpiarCaja(); //se llama a la funcion que limpia la caja
    }
    return;
}
// funcion para limpiar el campo donde van los números
function limpiarCaja (){
    document.querySelector('#valorUsuario').value = ''; //querySelector con utilizando ID, con las comillas se deja el espacio en blanco
}
//Condiciones iniciales del juego
function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del número secreto'); //mensaje inicial
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); //mensaje inicial
    numeroSecreto = generarNumeroSecreto(); //genera un numero aleatorio
    intentos = 1; //inicia la variable en 1
}
//funcion para reiniciar juego
function reiniciarJuego(){
    limpiarCaja(); //limpiar caja
    condicionesIniciales(); //activa las condiciones iniciales
    document.querySelector('#reiniciar').setAttribute('disabled','true');//desahabilitar el boton de juego nuevo
}
function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //no es necesario crear una variable para asignar la operacion
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //al sortearse todos los numeros disponibles
    if (listaNumerosSorteados.length == numeroMaximo){ //verifica si todos los numeros disponibles ya se sortearon
        asignarTextoElemento('p','Ya se sortearon todos los números posibles'); //funcion de salida de la recursividad
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){ //si el numero generado esta incluido en la lista
            return generarNumeroSecreto(); //accion al cumplirse la condicion
        } else {
            listaNumerosSorteados.push(numeroGenerado); //si la condicion no se cumple incluira a la lista el numero generado
            return numeroGenerado;
        }
    }
}
condicionesIniciales();