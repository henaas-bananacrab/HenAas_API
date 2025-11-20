const express = require('express');

const movieRoutes = require('./v1/routes/movieRoutes');

const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());

//Setup Routes | www.localhost:3002/api/v1/movies
app.use('/api/v1/movies', movieRoutes);



app.listen(3002, () => {
    console.log('Server rueeing on port 3002');
})