
// const req = require("express/lib/request");
// /*express cannot read the encoded data to want that the url read uncoded data so we use these two line 
// app.use(express.urluncoded(extended:true));
// app.use(express.json());
// */


const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port , ()=>{
console.log(`server is start at the port number ${port}`);

})
app.get('/',(req,res)=>{
    res.send('home screen is access here')
})
app.get('/register' , (req , res) =>{
    console.log(req.query);
    let {user, password} = req.query;
    res.send('standard get request');
})
app.post('/register', (req,res) =>{
    let {user,password} = req.body;
    res.send('Standard post request is access here');
})
