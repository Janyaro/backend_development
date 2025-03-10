const express = require('express');
const app = express();
let port = 3000;
// console.dir(app);
app.listen(port , ()=>{
    console.log(`server is starting at port number ${port}`);  
})
app.use((req , res) =>{
    
    console.log("request recieved");
    /* to send the request to the server we use the res.send() method and in this we send 
    all the parameter  */
    // res.send("hi i am sending request to the server");
    // also send an array, object and even a html page
    // res.send([2,"its me " , true]);
    res.send({
        name : "waseem akam ",
        rollnumber : "21SW025"
    })
    
})