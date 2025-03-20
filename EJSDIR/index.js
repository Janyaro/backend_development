
const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port , () =>{
    console.log(`server will be started at the port number ${port}`);
    
})
// app.use(express.static('public'));
// app.use(express.static('/public'));
app.use(express.static(path.join(__dirname , "public")));
app.get('/about' , (req , res) =>{
    res.send("request will be send at home page");
})

app.get('/home' , (req , res) =>{
    res.send('home page pa aa jaye hum');
})
app.get('/home/:username' , (req , res) =>{
    let {username} =req.params;
    res.send(`the parameters will be send with the username is ${username}`)
})
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));
app.get('/' ,(req , res) =>{
    res.render('home.ejs');
})
app.get('/rolldice' ,(req , res) =>{
    let dicevalue = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs' , {
        data :dicevalue
    });
})
 app.set('view engine','ejs');

 app.get("/ig/:username" , (req , res) =>{
    let {username} = req.params;
    const InstaData = require("./data.json");
    const data = InstaData[username];
    if(data){
        res.render('instagram' , {data});
    }else{
        res.render('error');
    }
})

// /*if we access the ejs from parent directory so the app is not runing because it look the views folder from parent directory
// and its not find so to solve this issue we set the path
// */ 
//  app.set("views" ,path.join(__dirname , "/views") ); 
//  app.get("/" , (req , res)=>{
//      res.render("home.ejs");  
//  })

//  app.get("/home/:username" , (req , res) =>{
//      let {username} = req.params;
//      res.send(`main home page hoon ${username}` );})

//  app.get("/search", (req, res) =>{
//      let {q} = req.query;
//      if(!q){
//          res.send('Kuch send nhi howa hai default page will be');
//          console.log(q);
        
//      }
//      else{
//          res.send(`aap ne yeh search kiya hai ${q}` );
//      }
//  })
 