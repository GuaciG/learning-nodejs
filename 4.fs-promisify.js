const fs = require('node:fs')
// Otra forma de usar promesas en los módulos nativos para cuando no haya promesas nativa:
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8').then(text => {
  console.log('primer texto', text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8').then(text => {
  console.log('segundo texto', text)
})
