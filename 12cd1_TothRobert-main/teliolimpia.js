const express =  require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

app.use(cors())

app.use(bodyparser.json())

const db = mysql.createConnection(
    {
    user: "root",
    host: "localhost",
    port: 3307,
    password: "",
    database: "teliolimpia"
    }
)

app.get("/",(req, res) => {
    res.send("Mukodik a szerver.")
})

app.get/("/v", (req, res) => {
    const sql = "SELECT * FROM versenyzok";
    db.query(sql, (err, result) => {
        if (err) return res.tatus(500).json({error: err.message})
        res.json(results);
    })
})

app.listen(3000, () =>  {
    console.log('A teli olimpia szervere a 3000-es porton fut.')
}) 