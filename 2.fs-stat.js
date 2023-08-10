const fs = require('node:fs') // a partir de Node 16, se recomienda poner node:

// método síncrono statSync:
const stats = fs.statSync('./archivo.txt')
// statSync es para tener la información de este archivo

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)
