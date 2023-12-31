const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

const movieRoutes = require("./routes/movies");

app.use(bodyParser.urlencoded({extended:false})); //x-www-form-urlencoded <form>
app.use(express.json()); //application/json 

app.use('/movie',movieRoutes);



const port = Number(process.env.PORT || 5000);
const server = app.listen(port, () => {
console.log(`Server is running on port ${port}.`);
});
