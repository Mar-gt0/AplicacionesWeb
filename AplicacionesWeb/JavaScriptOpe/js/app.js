let sumar = document.getElementById("sumar");

function realizarSuma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    
    let resultado = numero1 + numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es: " + resultado + "</p>" 
    
    console.log("El resultado es: "+ resultado);
}

sumar.addEventListener("click", realizarSuma);

let restar = document.getElementById("restar");

function realizarResta(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    
    let resultado = numero1 - numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es: " + resultado + "</p>" 
    
    console.log("El resultado es: "+ resultado);
}

restar.addEventListener("click", realizarResta);

let multiplicar = document.getElementById("multiplicar");

function realizarMulti(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    
    let resultado = numero1 * numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es: " + resultado + "</p>" ;
    
    console.log("El resultado es: "+ resultado);
}

multiplicar.addEventListener("click", realizarMulti);

let dividir = document.getElementById("dividir");

function realizarDivi(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 / numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p> El resultado es: " + resultado + "</p>";

    console.log("El resultado es: "+ resultado);
}

dividir.addEventListener("click", realizarDivi);