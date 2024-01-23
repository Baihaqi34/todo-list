const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'username',
//   password: '',

// });

// // Membuka koneksi ke database




const connection = mysql.createPool({
	  host: 'localhost',
	  user: 'username',
	  password: '',
	  database:'ci_crud'
	});


if (connection) {
	console.log('succes');
}else{
	console.log('failed');
}


module.exports = connection;

