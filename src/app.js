const express = require("express");

const app = express();

app.get('/saludar',(req, res) => {
    console.log("me ejecute");
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log('Server running on port 3000! 😊');
});