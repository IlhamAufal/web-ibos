const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'ilham234',
    database:'ibos'
})

app.get("/", (req, res)=> {
    return res.json("From backend side");
});

app.get("/olahraga", (req, res)=> {
    const sql = "select * from jadwal_olahraga";
    db.query(sql, (err,data)=>{
        if (err) throw res.json(err);
        return res.json(data);
    })
});

// Percobaan multi table data
// app.get("/olahraga", (req, res) => {
//     const sqlJadwal = "SELECT * FROM jadwal_olahraga";
//     const sqlBerita = "SELECT * FROM berita";

//     db.query(sqlJadwal, (err, jadwalData) => {
//         if (err) return res.json(err);

//         db.query(sqlBerita, (err, beritaData) => {
//             if (err) return res.json(err);

//             // Gabungkan kedua data dalam satu objek respon
//             return res.json({
//                 jadwal: jadwalData,
//                 berita: beritaData
//             });
//         });
//     });
// });

// Percobaan untuk login
app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ? AND pw = ?';
    const values = [
        req.body.email,
        req.body.password,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error" );
        }
        
        if (data.length > 0) {
            return res.status(200).json("Login Successfully" );
        } else {
            return res.status(404).json("No Record" );
        }
    });
});

app.listen(5000, ()=> {
    console.log("listening");
})