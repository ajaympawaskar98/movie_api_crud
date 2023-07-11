const mysql = require("mysql2");

// const dotenv = require("dotenv");
// dotenv.config();

const connection = mysql.createConnection(
  // {
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME,
  //   port: process.env.PORT
  // });
  {
    host: 'sql.freedb.tech',      
    user: 'freedb_movies-user',   
    password: 'wNVp!*8r&EGG&?U',  
    database: 'freedb_movies_d'
  });


  connection.connect((err) => {
    if(err){
      console.log('Error connecting to Db',err);
      return;
    }
    console.log('Connection established');
  });
  
module.exports = connection;

// const pool = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user:process.env.DB_USER,
//   password:process.env.DB_PASS,
//   database:process.env.DB_NAME
// });

// pool.getConnection((err,conn)=>{
//   if(err) console.log(err)
//   console.log("Connected Successfully");
// })

// module.exports = pool.promise()