let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;
let maximosIntentos = 6;


function asignarTextoElemento(elemento, texto) { 
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function enter(e){
    if(e.keyCode == 13){
         verificarIntento();
    }
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Ganaste!!!👍🏆 Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor⬇️');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor⬆️');
        }
        intentos++;
        limpiarCaja();
        if (intentos > maximosIntentos) {
            asignarTextoElemento('p', `Perdiste 👎😞, Llegaste al maximo de ${maximosIntentos} intentos. El numero secreto era: ${numeroSecreto}` );
            document.getElementById('reiniciar').removeAttribute('disabled');
         }
   }
   return;
}

 function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
 }


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento ('p', 'ya se sortearon todos los números posibles');
    } else {
    // si el numero generado esta incluido en la lista
       if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
     } else {
    //
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
             }
         }
      }

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {

    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar el num secreto
    //Inicializar el num de intentos
    condicionesIniciales();
    //Deshabilitar el boton 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
 
condicionesIniciales();


















