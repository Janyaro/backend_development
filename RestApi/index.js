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
      id : '1a',
        username:'waseem akram',
        content :'coding is important'
      },
      {
        id : '1b',
        username:'jatio',
        content :'everything is temporary'
      },
      {
        id : '1c',
        username:'basit khan',
        content :'mujhe seo sekhna hai '
      },
      {
        id : '1d',
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
    res.redirect('/posts');
})
app.get('/posts/:id' , (req , res) =>{
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);

  // console.log(typeof post);
  res.render('show.ejs' , {post});
})