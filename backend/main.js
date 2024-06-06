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

app.listen(5000, ()=> {
    console.log("listening");
})