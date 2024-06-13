const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ilham234',
    database: 'ibos'
})

// buat nyimpen gambar
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/images");
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

app.get("/", (req, res) => {
    return res.json("From backend side");
});

app.get("/olahraga", (req, res) => {
    const sql = "select * from jadwal_olahraga";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json({ error: err.message }); // Mengembalikan pesan kesalahan dalam objek
        return res.json(data);
    })
});


// Percobaan untuk upload news
const upload = multer({ storage }).single('file');
app.post('/upload', upload, (req, res) => {
    const sql = "INSERT INTO upload_news(`judul`, `deskripsi`, `tanggal`, `gambar`, `lokasi`, `kategori`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      req.body.judul,
      req.body.deskripsi,
      req.body.tanggal,
      req.file.filename,
      req.body.lokasi,
      req.body.kategori,
    ];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error in upload query:", err);
        return res.status(500).json({ error: 'Error in upload query' });
      }
      return res.json({ status: "Success" });
    });
  });
  
  

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
            return res.status(500).json("Internal Server Error" );
        }

        if (data.length > 0) {
            return res.status(200).json( "Login Successfully" )
        } else {
            return res.status(404).json( "No Record" )
        }
    });
});

app.listen(5000, () => {
    console.log("Server is running...");
})
