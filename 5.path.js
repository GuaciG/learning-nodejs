const path = require('node:path')

// barra separadora de carpetas según SO
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// nombre del archivo
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

// nombre del archivo sin la extensión
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

// uno de los más utilizados, para conseguir la extensión
const extension = path.extname('image.jpg')
console.log(extension)
