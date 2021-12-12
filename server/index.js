const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'infosystem'
});


app.post('/creat', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    

    db.query("INSERT INTO users (userName, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted");
        }
    }
    );
})

app.get('/user', (req, res) => {
    db.query("SELECT * FROM users ORDER BY userName", (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.post('/info', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneno = req.body.phoneno;
    const hobby = req.body.hobby;

    db.query("INSERT INTO userinfo (name, email, phoneNo, hobbies) VALUES (?,?,?,?)",
    [name, email, phoneno, hobby],
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted to userinfo");
        }
    }
    );
})


app.listen(3001, () => {
    console.log('running server ');
});
