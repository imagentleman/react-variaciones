# pellizco
Librería que da soporte a gestos de zoom mediante pellizcos

## Demo
http://imagentleman.github.io/pellizco

## Tamaño
Pesa 838 bytes minificado y 409 bytes comprimido con gzip.

## Instalación

### Browser
* Descarga la versión UMD de la librería (https://github.com/imagentleman/pellizco/blob/master/dist/pellizco.umd.min.js).
* Agrega el script como se muestra en el ejemplo que incluye la librería (https://github.com/imagentleman/pellizco/blob/master/dist/index.html)

### Node
La carpeta ```dist``` incluye versiones de CommonJS y ES2015 para ser utilizadas desde Node (https://github.com/imagentleman/pellizco/tree/master/dist).

## Ejemplo de Uso 
https://github.com/imagentleman/pellizco/blob/master/dist/index.html

    <!doctype html>

    <p></p>

    <script src=pellizco.umd.min.js></script>

    <script>
      // Inicializa la librería, la cual empezará a escuchar los eventos:
      // "pinchin" o "pinchout"
      pellizco();

      var message = document.querySelector("p");

      document.body.addEventListener("pinchin", function() {
        message.textContent = "pinchin (hicimos zoom!)";
        message.classList = "";
        message.classList.add("pinchin");
      });

      document.body.addEventListener("pinchout", function() {
        message.textContent = "Evento pinchout (deshicimos el zoom!)";
        message.classList = "";
        message.classList.add("pinchout");
      });
    </script>
