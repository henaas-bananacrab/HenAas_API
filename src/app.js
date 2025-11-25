const express = require('express');

const movieRoutes = require('./v1/routes/movieRoutes');
const movieRoutesV2 = require('./v2/routes/movieRoutesV2');

const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());

//Setup Routes | www.localhost:3002/api/v1/movies
app.use('/api/v1/movies', movieRoutes);
app.use('/api/v2/movies', movieRoutesV2);



app.listen(3002, () => {
    console.log('Server running on port 3002');
})