// Este archivo se encarga de levantar todos los servicios

// el dotenv debe ser la primer línea en ejecutarse
require('dotenv').config()

// equivale a
// const dotenv = require('dotenv)
// dotenv.config()

console.log('env: ', process.env.DB_USER)

