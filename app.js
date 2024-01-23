const express = require('express');
const db = require('./Models/db.js'); 
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('views'));

app.set("view engine", "ejs")
app.set("views", "views");



app.get('/', (req, res) => {
      db.query('SELECT * FROM todo_list', (error, results, fields) => {
     const datas = JSON.parse(JSON.stringify(results));
      if (results.length > 5) {
        res.status(404).send("data tidak boleh lebih dari 5");
      }else{

    if (error) {
      console.error('Error dalam query:', error);
      res.status(500).send('Error dalam query');
    } else {
       res.render('index', {title:"Remind Me :)", data:datas});
      }
        }
  });
   
});


app.post('/', (req, res) => {
    var sql = `INSERT INTO todo_list (tugas,dl) VALUES ('${req.body.tugas}', '${req.body.dl}')`;
    console.log(sql);
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.redirect('/')
    console.log(result);
 });
  
   
});







process.on('SIGINT', () => {
  db.end((err) => {
    if (err) {
      console.error('Error saat menutup koneksi:', err);
    } else {
      console.log('Koneksi MySQL ditutup');
    }
    process.exit();
  });
});

// Port yang digunakan oleh server
const port = 3000;

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
