const express = require("express");
const app = express();
const port = 8080;

// Set the view engine before defining routes
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Server is started on port number ${port}`);
});

app.get("/", (req, res) => {
    res.send("Home page is accessed here");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const follower = ["waseem" , "ashiq" , "rizwan" , "ramzan" , "nazeer"];
    res.render("instagram", { username , follower }); // No need for ".ejs"
});
