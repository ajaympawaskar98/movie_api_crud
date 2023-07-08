const db = require("../db/db");

let Movies = (movies) =>{
    this.id = movies.id;
    this.title = movies.title;
    this.genre = movies.genre;
    this.actor = movies.actor;
    this.director = movies.director;
    this.year = movies.year;
}

Movies.addMovie = (id,title,genre,actor,director,year) =>{
    return new Promise ((resolve , reject)=>{
        let sql = `INSERT INTO movies_list(id,title,genre,actor,director,year) VALUES('${id}','${title}','${genre}','${actor}','${director}','${year}')`;
        db.query(sql, (err, res, fields) => {
            if (err) {
              console.log("error", err);
              return reject(err);
            }
            return resolve(res);
          });
    })
}

Movies.getMovieById = (mid) => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM movies_list WHERE mid = '${mid}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };

  Movies.getMovieByTitle = (title) => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM movies_list WHERE title = '${title}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };

  Movies.getMovieByGenre = (genre) => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM movies_list WHERE genre = '${genre}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };

  Movies.getMovieByDirector = (director) => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM movies_list WHERE director = '${director}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };

  Movies.fetchAll = () => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM movies_list`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };
  
  Movies.update = (id,title,genre,actor,director,year,mid) => {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE movies_list SET id = '${id}' ,title = '${title}' , genre = '${genre}' , actor = '${actor}' , director = '${director}',year = '${year}' WHERE mid = '${mid}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  };

  Movies.delete = (mid) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE from movies_list WHERE mid = '${mid}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };

module.exports = Movies;