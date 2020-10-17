// Este archivo se encarga de levantar todos los servicios

// el dotenv debe ser la primer línea en ejecutarse
require('dotenv').config()

// equivale a
// const dotenv = require('dotenv)
// dotenv.config()

const db = require('./src/lib/db')
const server = require('./src/server')

const { PORT = 3030 } = process.env

console.log('env: ', process.env.DB_USER)

db.connect()
  .then(() => {
    console.log('DB connected')
    server.listen(PORT, () => console.log(`Server is running at ${PORT}`))
  })
  .catch(error => {
    console.error('DB ERROR: ', error)
  })
