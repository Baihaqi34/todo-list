const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: '',

});

// Membuka koneksi ke database





module.exports = connection;

