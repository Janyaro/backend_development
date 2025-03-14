const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port , () =>{
    console.log(`server will be started at the port number ${port}`);
    
})

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




// app.set('view engine','ejs');

// /*if we access the ejs from parent directory so the app is not runing because it look the views folder from parent directory
// and its not find so to solve this issue we set the path
// */ 
// app.set("views" ,path.join(__dirname , "/views") ); 
// app.get("/" , (req , res)=>{
//     res.render("home.ejs");  
// })

// app.get("/home/:username" , (req , res) =>{
//     let {username} = req.params;
//     res.send(`main home page hoon ${username}` );
// })

// app.get("/search", (req, res) =>{
//     let {q} = req.query;
//     if(!q){
//         res.send('Kuch send nhi howa hai default page will be');
//         console.log(q);
        
//     }
//     else{
//         res.send(`aap ne yeh search kiya hai ${q}` );
//     }
// })
// app.listen(port , () =>{
//     console.log(`server is started at the port number ${port}`);
    
// })