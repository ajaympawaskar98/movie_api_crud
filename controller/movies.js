const Movies = require("../model/movies");

exports.addMovies = async (req, res,next) =>{

  let id = req.body.id;
  let title = req.body.title;
  let genre = req.body.genre;
  let actor = req.body.actor;
  let director = req.body.director;
  let year = req.body.year;

  try {
    let result = await Movies.addMovie(id,title,genre,actor,director,year);
    if (!result.affectedRows) {
        return res.status(400).json({ status: 400, error: null, response: result,message:"movie details not added" });
      }
      return res
      .status(200)
      .json({ status: 200, message: "movie details added successfully" });

    
  } catch (error) {
    next(error);
  }
}


exports.viewAllMovies = async (req, res, next) => {
    try {
      let result = await Movies.fetchAll();
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
        return res
          .status(200)
          .json({ status: 200, error: null, response: result });
      }
    } catch (e) {
      next(e);
    }
  };



    exports.getMovieDetailsById = async (req, res, next) => {
    let mid = req.body.mid;
  
    try {
      let result = await Movies.getMovieById(mid);
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
  
        return res.status(200).json({
          status: 200,
          response: result,
        });
      }
    } catch (e) {
      next(e);
    }
  };

  exports.getMovieDetailsByTitle = async (req, res, next) => {
    let title = req.body.title;
  
    try {
      let result = await Movies.getMovieByTitle(title);
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
  
        return res.status(200).json({
          status: 200,
          response: result,
        });
      }
    } catch (e) {
      next(e);
    }
  };

  exports.getMovieDetailsByGenre = async (req, res, next) => {
    let genre = req.body.genre;
  
    try {
      let result = await Movies.getMovieByGenre(genre);
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
  
        return res.status(200).json({
          status: 200,
          response: result,
        });
      }
    } catch (e) {
      next(e);
    }
  };

  exports.getMovieDetailsByDirector = async (req, res, next) => {
    let director = req.body.director;
  
    try {
      let result = await Movies.getMovieByDirector(director);
      {
        if (!result.length) {
          return res.status(200).json({ status: 200, error: null, response: result,message:"No Record Found" });
        }
  
        return res.status(200).json({
          status: 200,
          response: result,
        });
      }
    } catch (e) {
      next(e);
    }
  };


  exports.updateMovieById = async (req, res, next) => {

    let mid = req.body.mid
    let id = req.body.id;
    let title = req.body.title;
    let genre = req.body.genre;
    let actor = req.body.actor;
    let director = req.body.director;
    let year = req.body.year;
  
  
    try {
      let result = await Movies.update(id,title,genre,actor,director,year,mid);
      {
        if (!result.affectedRows) {
            return res.status(400).json({ status: 400, error: null, response: result,message:"Not Updated" });
        }
  
        return res.status(200).json({
          status: 200,
          message: "movie details updated successfully",
        });
      }
    } catch (e) {
      next(e);
    }
  };


  exports.deleteMovieById = async (req, res, next) => {  
    let mid = req.body.mid;
  
    try {
      let result = await Movies.delete(mid);
      {
        if (!result.affectedRows) {
          return res.status(400).json({ status: 400, error: null,message:"No Record Found" });
        }
  
        return res.status(200).json({
          status: 200,
          message:"Movie details Deleted Successfully"
        });
      }
    } catch (e) {
      next(e);
    }
  };


