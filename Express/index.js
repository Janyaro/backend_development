const express = require('express');
const app = express();
let port = 3000;
// console.dir(app);
app.listen(port , ()=>{
    console.log(`server is starting at port number ${port}`);  
})
// app.use((req , res) =>{
    
//     console.log("request recieved");
//     /* to send the request to the server we use the res.send() method and in this we send 
//     all the parameter  */
//     // res.send("hi i am sending request to the server");
//     // also send an array, object and even a html page
//     // res.send([2,"its me " , true]);
//     res.send({
//         name : "waseem akram ",
//         rollnumber : "21SW025"
//     })
// })
/* to send request specific page we use the get request here we define the to parameter*/
app.get("/" , (req , res) =>{
    console.log('The request is send to the root path');
    res.send('lets check nodemon package , wah yaar it will work');
})
// to make the search query we use this

// app.get("/search" , (req , res) =>{
//     let {q} = req.query;
//   if(!q){
//     res.send('default page will be shown to the user')
//   }
// res.send(`query parameter is ${q}`);

// })
//to create the path parameter which is a variable path and this path will change every time
// app.get("/:username/:id" , (req , res) =>{
//     // let {}
//     console.log(req.params);
//     let {username , id} = req.params;
    
//     res.send(`The request is send to the @${username}`)
// })

// app.get("/home" , (req , res) =>{
//     console.log('The request is send to the root path');
//     res.send('Your request is send to the home path');
// })

// app.get("/about" , (req , res) =>{
//     console.log('The request is send to the root path');
//     res.send('Your request is send to the about path');
// })
// app.get("*" , (req , res) =>{
//     res.send('The page doesnot exist ');
// })

// app.post("/" , (req,res) =>{
//     res.send('you send the post request do you know ');
// })