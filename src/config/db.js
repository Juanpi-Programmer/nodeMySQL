const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost' ,
    database: 'crud',
    user: 'root',
    password: ''
});

conexion.connect((err) => {
    if(err) throw err;
    else console.log('CONEXION EXITOSA');
});

module.exports = conexion;