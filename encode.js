// Conectamos el html con el el JS

const texto = document.querySelector(".texto-ingresado");
const encriptarBtn = document.querySelector(".encriptar");
const desencriptarBtn = document.querySelector(".desencriptar");
const resultado = document.querySelector("#texto-encriptado");
const ningunResultado = document.querySelector("#ningun-resultado");
const copiarBtn = document.querySelector(".copiar");
const limpiarBtn = document.querySelector(".limpiar");
const ventana = document.querySelector(".ventana-emergente");



function encriptarTexto() {
    const textoAceptado = /^[a-z\s]+$/;
    const textoIngresado = texto.value;
    let nuevoTexto = "";
    if (textoAceptado.test(textoIngresado)) {
        for (let i = 0; i < textoIngresado.length; i++) {
            let vocal = textoIngresado.charAt(i);
            switch (vocal) {
                case "a":
                    nuevoTexto += "ai";
                    break;
                case "e":
                    nuevoTexto += "enter";
                    break;
                case "i":
                    nuevoTexto += "imes";
                    break;
                case "o":
                    nuevoTexto += "ober";
                    break;
                case "u":
                    nuevoTexto += "ufat";
                    break;
                case " ":
                    nuevoTexto += " ";
                    break;
                default:
                    nuevoTexto += vocal;
                    break;
            }
        }
        mostrarTexto();
        resultado.textContent = nuevoTexto;
    } else {
        mostrarTexto();
        resultado.textContent = "Revisa tu texto";
    }
}

function desencriptarTexto() {
    const textoAceptado = /^[a-z\s]+$/
    const textoIngresado = texto.value;
    let textoDeco = textoIngresado;
    if (textoAceptado.test(textoIngresado)) {
        textoDeco = textoDeco.replace(/ai/g, "a");
        textoDeco = textoDeco.replace(/enter/g, "e");
        textoDeco = textoDeco.replace(/imes/g, "i");
        textoDeco = textoDeco.replace(/ober/g, "o");
        textoDeco = textoDeco.replace(/ufat/g, "u");
        mostrarTexto();
        return resultado.textContent = textoDeco;
    } else {
        mostrarTexto();
        resultado.textContent = "Revisa tu texto";
    }
}

function ventanaEmergente() {
    ventana.hidden = false;
    setTimeout(() => {
        ventana.hidden = true;
    }, 2500);
}


function mostrarTexto() {
    ningunResultado.style.display = "none";
    resultado.style.display = "flex";
}


function limpiar() {
    texto.value = "";
    resultado.textContent = "";
    ningunResultado.style.display = "flex";
    resultado.style.display = "none";
}


function copiar() {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    ventanaEmergente();
}


// Escuchando los eventos de los botones

encriptarBtn.addEventListener("click", encriptarTexto);
desencriptarBtn.addEventListener("click", desencriptarTexto);
limpiarBtn.addEventListener("click", limpiar);
copiarBtn.addEventListener("click", copiar);
