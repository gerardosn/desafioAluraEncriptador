// mapeo letras/numeros a números
const tablaSustitucion = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  
      function codificar(text) {
        let encrypted = '';
        for (let i = 0; i < text.length; i++) {
            // Convierte cada carácter a su código ASCII y agrégalo a la cadena
            encrypted += text.charCodeAt(i) + ' ';
        }
        // Elimina el espacio adicional al final
        return encrypted;
      }
  //let text = "Hola Mundo";
  //let textoEncriptado = codificar(text);
  //console.log("Texto encriptado:", textoEncriptado);
  
      function decodificar(numeroCod){
        let decrypted = '';
            // Divide la cadena encriptada por los espacios para obtener los códigos ASCII
            let asciiCodes = numeroCod.split(' ');
            for (let i = 0; i < asciiCodes.length; i++) {
                // Convierte cada código ASCII de vuelta a su carácter correspondiente
                decrypted += String.fromCharCode(asciiCodes[i]);
            }
            return decrypted;
        }
  
      
      function encriptar() {
        const texto = document.getElementById("textoEntrada").value.toLowerCase();
        let numeroCifrado = codificar(texto);

        document.getElementById("resultado").innerHTML = `
          
          <p>${numeroCifrado}</p>
          <div class="btn-copiar" onclick="copiarTexto()">Copiar</div>
        `;
      }
  
      function desencriptar() {
      
        const numeros = document.getElementById("textoEntrada").value;
        const textoOriginal = decodificar(numeros);
        
        document.getElementById("resultado").innerHTML = `
          
          <p>${textoOriginal}</p>
          <div class="btn-copiar" onclick="copiarTexto()">Copiar</div>
        `;
      }

      function copiarTexto() {
        // Obtener el elemento <p>
        var parrafo = document.querySelector('#resultado p');
        
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