// Elementos
var input = document.getElementById('input');
var btn = document.getElementById('btn-copy');
var output = document.getElementById('output');
var btn_close = document.getElementById('btn-close');
var no_output_div = document.getElementById('no-output-div');
var btn_encrypt = document.getElementById('btn-encrypt');
var btn_decrypt = document.getElementById('btn-decrypt');
var btn_copy = document.getElementById('btn-copy');

// Funciones
function gestionarBotonLimpiarCampos() {
    if (input.value == "" || input.value == null) {
        btn_close.classList.add('d-none');
    } else {
        btn_close.classList.remove('d-none');
    }
}

function formatearTexto() {
    input.value = input.value.toLowerCase();
    input.value = input.value.replace("ñ", "nh");
    input.value = input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    if (input.value.match(/[^a-zA-Z]/)) {
        input.value = "";
        btn_close.classList.add('d-none');
    }
}

function limpiarCampos() {
    input.value = '';
    output.value = '';
    output.classList.add('d-none');
    btn_copy.classList.add('d-none');
    btn_close.classList.add('d-none');
    no_output_div.classList.remove('d-none');
}

function encriptar(texto) {
    let texto_encriptado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    return texto_encriptado;
}

function desencriptar(texto) {
    let texto_desencriptado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return texto_desencriptado;
}

function mostrarOuput(resultado){
    output.value = resultado;
    output.classList.remove('d-none');
    btn_copy.classList.remove('d-none');
    no_output_div.classList.add('d-none');
}

function mostrarTextoEncriptado() {
    let texto_encriptado = encriptar(input.value);
    mostrarOuput(texto_encriptado);
}

function mostrarTextoDesencriptado() {
    let texto_desencriptado = desencriptar(input.value);
    mostrarOuput(texto_desencriptado);
}

function copiarResultado() {
    let resultado = output.value;
    navigator.clipboard.writeText(resultado);
    alert('Texto copiado');
}
    
// Eventos
input.addEventListener('input', gestionarBotonLimpiarCampos);

input.addEventListener('input', formatearTexto);

btn_close.addEventListener('click', limpiarCampos);

btn_encrypt.addEventListener('click', mostrarTextoEncriptado);

btn_decrypt.addEventListener('click', mostrarTextoDesencriptado);

btn_copy.addEventListener('click', copiarResultado);