function codificarTexto() {
    let texto = document.getElementById("txtIn").value;

    let textoCifrado = codificar(texto);
    console.log("Estoy aca ", texto, " ",textoCifrado);//bandera
    
    document.getElementById("resultado").textContent = textoCifrado;
    document.getElementById("contBtnCopiar").innerHTML= `
    <button class="btndesencriptar" onclick="copiarTexto()">Copiar</button>
    `;
    document.getElementById("h1Resultado").remove();
}
function codificar(textIn) {

    // Creamos una variable para almacenar el texto cifrado
    let txtEncrypted = "";

    // Recorremos cada caracter del texto original
    for (let i = 0; i < textIn.length; i++) {
      let caracter = textIn[i]; // Convertimos a minúscula para una comparación más sencilla

      switch (caracter) {
        case "a":
          txtEncrypted += "ai";

          break;
        case "e":
          txtEncrypted += "enter";
          break;
        case "i":
          txtEncrypted += "imes";
          break;
        case "o":
          txtEncrypted += "ober";
          break;
        case "u":
          txtEncrypted += "ufat";
          break;
        default:
          txtEncrypted += caracter; // Si no es una vocal a, e o i, se agrega tal cual

        }
    }  
    return txtEncrypted;
}

  function copiarTexto() {
    // Obtener el elemento <p>
    var parrafo = document.querySelector('#resultado');
    
    // Obtener el texto dentro del elemento <p>
    var texto = parrafo.textContent;
    
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar texto: ', err);
      });
  }

  function decodificarTexto() {
    let texto = document.getElementById("txtIn").value;
    let textoCifrado = decodificar(texto);
    document.getElementById("resultado").textContent = textoCifrado;
    document.getElementById("h1Resultado").remove();
    document.getElementById("contBtnCopiar").innerHTML= `
    <button class="btndesencriptar" onclick="copiarTexto()">Copiar</button>
    `;
}
function decodificar(textIn) {
    let txtDecrypted = textIn.replace(/ai/g, 'a')
                             .replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    return txtDecrypted;
}

