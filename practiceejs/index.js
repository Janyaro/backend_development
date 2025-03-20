const express = require("express");
const app = express();
const port = 3000;

// Set the view engine before defining routes
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Server is started on port number ${port}`);
});

app.get("/", (req, res) => {
    res.send("Home page is accessed here");
});

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     const follower = ["waseem" , "ashiq" , "rizwan" , "ramzan" , "nazeer"];
//     res.render("instagram", { username , follower }); // No need for ".ejs"
// });

// app.get("/insta/:username" , (req , res) =>{
//     let {username} = req.params;
//     const follower = ["Wasim" , "umair" , "rizwan" , "saim"];
//     res.render("instagram" , {username , follower})
// })

app.get("/ig/:username" , (req , res) =>{
    let {username} = req.params;
    const InstaData = require("../EJSDIR/data.json");
    let data = InstaData['username'];
    res.render('insta')
})