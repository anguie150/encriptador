const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const muñeco = document.querySelector(".muñeco");
const contenedorMensajes = document.querySelector(".contenedor-mensajes");
const botonCopiar = document.querySelector(".copiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    ocultarImagenes();
}

function encriptar(stringencriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringencriptado = stringencriptado.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringencriptado.includes(matrizCodigo[i][0])){
            stringencriptado = stringencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringencriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    ocultarImagenes();
}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
}

function desencriptar(stringdesencriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringdesencriptado = stringdesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptado.includes(matrizCodigo[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0], )
        }
    }
    return stringdesencriptado
}

function ocultarImagenes(){
    muñeco.style.display='none';
    contenedorMensajes.style.display='none';
    botonCopiar.style.display='unset';
}