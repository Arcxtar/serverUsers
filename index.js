const express = require('express');
const conectarDB = require('./config/db');

//Creación del servidor
const app = express();

//Conectamos a la base de datos
conectarDB();

//middleware
app.use(express.json());

app.use('/api/usuarios', require('./routes/user'));

app.listen(4000, () => {
    console.log('Servidor corriendo exitosamente')
}) 

/*const conectarDB = require('./config/db');
const cors = require("cors");



//Conectamos a la base de datos
conectarDB();

//middleware
app.use(cors());

app.use(express.json());

app.use('api/usuarios', require('./routes/user'));

app.listen(4000, () => {
    console.log('Servidor corriendo exitosamente')
}) */
