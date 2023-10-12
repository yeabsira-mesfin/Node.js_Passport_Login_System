const express = require('express');
const app = express();

const users = [];
app.set('view-engine','ejs')
app.use(express.urlencoded({extended: false}))
app.get('/',(req,res)=>{
    res.render('index.ejs', {name: "Yeab"})
})
app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.get()
app.get('/register',(req,res)=>{
    res.render('register.ejs');
})
// app.post('/register',(req,res)=>{
// })
app.listen(3000);