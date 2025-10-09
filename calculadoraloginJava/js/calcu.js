let btnSumar = document.getElementById("suma");
let btnResta = document.getElementById("resta");
let btnMulti = document.getElementById("mult");
let btnDiv = document.getElementById("div");

//operacion suma
function Suma(){
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let mostrarResultado = document.getElementById("mostrarResultado");
    let resultado = numero + numero2;
    mostrarResultado.innerHTML = "El resultado es: "+resultado;
    console.log("El resultado es "+resultado);
}
function Resta(){
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let mostrarResultado = document.getElementById("mostrarResultado");
    let resultador = numero - numero2;
    mostrarResultado.innerHTML = "El resultado es: "+resultador;
    console.log("El resultado es "+resultador);
}
function Multi(){
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let mostrarResultado = document.getElementById("mostrarResultado");
    let resultadom = numero * numero2;
    mostrarResultado.innerHTML = "El resultado es: "+resultadom;
    console.log("El resultado es "+resultadom);
}
function Div(){
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let mostrarResultado = document.getElementById("mostrarResultado");
    let resultadod = numero / numero2;
    mostrarResultado.innerHTML = "El resultado es: "+resultadod;
    console.log("El resultado es "+resultadod);
}

btnSumar.addEventListener("click", Suma);
btnResta.addEventListener("click", Resta);
btnMulti.addEventListener("click", Multi);
btnDiv.addEventListener("click", Div);