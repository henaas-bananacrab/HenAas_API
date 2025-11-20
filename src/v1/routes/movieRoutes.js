const express = require('express');

const router = express.Router();


//GET | www.localhost:3002/api/v1/movies
router.get('/', );

//GET | www.localhost:3002/api/v1/movies/???(valuen til variablen id)
router.get('/:id', );

//POST | www.localhost:3002/api/v1/movies
router.post('/', );

//PUT | www.localhost:3002/api/v1/movies/???(valuen til variablen id)
router.put('/:id', );

//DELETE | www.localhost:3002/api/v1/movies/???(valuen til variablen id)
router.delete('/:id', );

module.exports = router;