const http = require('node:http') // para el protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')

// console.log(process.env)
// const desiredPort = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

/* server.listen(3000, () => {
  console.log('server listening on port 3000')
}) */

// server.listen(0, () => {
// console.log('server listening on port http://localhost:${server.address().port}')
// })
// -> puerto 0, buscará automáticamente el primer puerto libre disponible.

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
