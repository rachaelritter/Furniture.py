import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
 res.send("<h1>Hello</h1>");
 });

app.get("/contact", (req, res) => {
    res.send("<h1>Phone Number</h1><p>My name is Rachael</p>");
    });

 
 app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
    });
 

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})