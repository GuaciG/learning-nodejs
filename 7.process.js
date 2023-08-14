// process es un objeto globar que proporciona información y control sobre el proceso actual de ejecución.
// por ejemplo: los argumentos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(0)

// podemos controlar eventos del proceso
/* process.on('exit', () => {
  //limpiar recursos o limpiar la consola, etc.
}) */

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
