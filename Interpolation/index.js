const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port , ()=>{
    console.log(`server is start with the port number ${port}`);
    
})

app.set("view engine" , "ejs");

// app.set("views" , path.join(__dirname , "/views"));
app.set('views' , path.join(__dirname , '/views'));

app.get("/" , (req, res) =>{
    res.send('home page is access');
});

// app.get("/:username/:rollnumber" , (req, res) =>{
//     let {username , rollnumber} = req.params; 
//     res.send(`home page is access by @${username} and ${rollnumber}`) ;
// });

app.get("/ig/:username" , (req , res) =>{
    let {username} = req.params;
    const InstaData = require("./data.json");
    const data = InstaData[username];
    if (data) {
        res.render('instagram' , {data});
        
    } else {
        res.render('error' );
        
    }
})

