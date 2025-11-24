const express = require('express');

const { getAllMovies, getSingleMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');

const router = express.Router();


//GET | www.localhost:3002/api/v1/movies
router.get('/', getAllMovies);

//GET | www.localhost:3002/api/v1/movies/???(valuen til variablen id)
router.get('/:id', getSingleMovie);

//POST | www.localhost:3002/api/v1/movies
router.post('/', createMovie);

//PUT | www.localhost:3002/api/v1/movies/???(valuen til variablen id)
router.put('/:id', updateMovie);

//DELETE | www.localhost:3002/api/v1/movies/???(valuen til variablen id)
router.delete('/:id', deleteMovie);

module.exports = router;