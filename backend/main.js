const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ilham234',
  database: 'ibos'
});

// Image Storage Configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

// Routes
app.get("/", (req, res) => {
  return res.json("From backend side");
});

app.get("/news", (req, res) => {
  const sql = "SELECT * FROM news";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(data);
  });
});

app.get("/olahraga", (req, res) => {
  const sql = "SELECT * FROM jadwal_olahraga";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(data);
  });
});

// Dokumentasi Routes
app.get("/dokumentasi/:kategori", (req, res) => {
  const { kategori } = req.params;
  const sql = "SELECT * FROM dokumentasi WHERE kategori = ?";
  db.query(sql, [kategori], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(data);
  });
});

// Upload Routes
app.post('/upload', upload.single('file'), (req, res) => {
  const { judul, deskripsi, tanggal, lokasi, kategori } = req.body;
  const gambar = req.file.filename;

  const sql = "INSERT INTO news(`judul`, `deskripsi`, `tanggal`, `gambar`, `lokasi`, `kategori`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [judul, deskripsi, tanggal, gambar, lokasi, kategori];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error in upload query:", err);
      return res.status(500).json({ error: 'Error in upload query' });
    }
    return res.json({ status: "Success" });
  });
});

app.post('/upload/komunitas', upload.single('file'), (req, res) => {
  const { nama, bidang, alamat, jadwal } = req.body;
  const aturan = req.file.filename;
  const pengurus = req.file.filename;
  const beritaAcara = req.file.filename;

  const sql = "INSERT INTO news(`nama`, `bidang`, `alamat`, `jadwal`, `aturan`, `pengurus`, `beritaAcara`) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [nama, bidang, alamat, jadwal, aturan, pengurus, beritaAcara];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error in upload query:", err);
      return res.status(500).json({ error: 'Error in upload query' });
    }
    return res.json({ status: "Success" });
  });
});

app.post('/upload/dokumentasi', upload.single('file'), (req, res) => {
    const { nama, kategori } = req.body;
    const media = req.file.filename;
  
    const sql = "INSERT INTO dokumentasi(nama, kategori, media) VALUES (?, ?, ?)";
    const values = [nama, kategori, media];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error in upload query:', err);
        return res.status(500).json({ error: 'Error in upload query' });
      }
      return res.json({ status: 'Success' });
    });
  });

// Percobaan login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND pw = ?';
  const values = [email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Internal Server Error");
    }

    if (data.length > 0) {
      return res.status(200).json("Login Successfully");
    } else {
      return res.status(404).json("No Record");
    }
  });
});

// Port pemakaian
app.listen(5000, () => {
  console.log("Server is running....");
});
