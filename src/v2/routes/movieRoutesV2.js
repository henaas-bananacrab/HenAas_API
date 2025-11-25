const express = require('express');

const { getAllMovies, getSingleMovie, getSingleMoviePlot, createMovie, updateMovie, deleteMovie } = require('../controllers/movieControllerV2');

const router = express.Router();


//GET | www.localhost:3002/api/v2/movies
router.get('/', getAllMovies);

//GET | www.localhost:3002/api/v2/movies/???(valuen til variablen id)
router.get('/:id', getSingleMovie);

//GET | www.localhost:3002/api/v2/movies/???(valuen til variablen id)/plot
router.get('/:id/plot', getSingleMoviePlot);

//POST | www.localhost:3002/api/v2/movies
router.post('/', createMovie);

//PUT | www.localhost:3002/api/v2/movies/???(valuen til variablen id)
router.put('/:id', updateMovie);

//DELETE | www.localhost:3002/api/v2/movies/???(valuen til variablen id)
router.delete('/:id', deleteMovie);

module.exports = router;