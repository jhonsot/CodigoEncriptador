
const textArea = document.querySelector("#texto1");
const mensaje = document.querySelector("#textoEncriptado");
const copia = document.querySelector("#botoncopiar");


function validarTexto() {
  let textoEscrito = textArea.value;
  let validador = textoEscrito.match(/^[a-z]*[\s]*/);

  if (!validador || validador === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.innerText = textoEncriptado;
    textArea.value = "";
    document.querySelector(".imagen2").style.display ="none";
    document.querySelector(".mensaje").style.display ="none";
    document.querySelector("#botoncopiar").style.display ="block";
    //*copia.style.display = "block";
  }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.innerText = textoEncriptado;
  textArea.value = "";
  document.querySelector(".imagen2").style.display ="none";
  document.querySelector(".mensaje").style.display ="none";
  document.querySelector("#botoncopiar").style.display ="block";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copiar() { 
  navigator.clipboard.writeText(mensaje.innerText);
  alert("Texto Copiado");
} 
