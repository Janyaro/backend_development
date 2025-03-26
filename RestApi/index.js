const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.set('view engine' ,'ejs');
app.set('views' , path.join(__dirname , 'views'));  
app.use(express.static(path.join(__dirname , 'public')));  
app.listen(port , ()=>{
    console.log(`server is started at the port number ${port}`);
})
let posts = [
    {
        username:'waseem akram',
        content :'coding is important'
      },
      {
        username:'jatio',
        content :'everything is temporary'
      },
      {
        username:'basit khan',
        content :'mujhe seo sekhna hai '
      },
      {
        username:'danish khan',
        content :'game khelne de',
      },
];
app.get('/posts' , (req,res)=>{
        res.render('index.ejs' , {posts});
})

app.get('/posts/new' , (req,res) =>{
    res.render('new.ejs');
})
app.post('/posts' , (req,res) =>{
    let {username,content} = req.body;
    posts.push({username,content});
    res.send('data save successfully');
})