const express = require('express');
const router = express.Router();
const movieController = require('../controller/movies');




router.post('/addMovie',movieController.addMovies);
router.get('/getMovieById',movieController.getMovieDetailsById);
router.get('/getMovieByTitle',movieController.getMovieDetailsByTitle);
router.get('/getMovieByGenre',movieController.getMovieDetailsByGenre);
router.get('/getMovieByDirector',movieController.getMovieDetailsByDirector);
router.get('/getAllMovies',movieController.viewAllMovies);
router.put('/updateMovieById',movieController.updateMovieById);
router.delete('/deleteMovieById',movieController.deleteMovieById);




module.exports = router;