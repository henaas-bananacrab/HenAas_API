const {getAllObjects, getObjectById, getObjectPlotById, addObject, updateObjectById, deleteObjectById} = require('../data/databaseGenericV2');

const getAllMovies = async (req, res) => {
    try {
        const movies = await getAllObjects();
        res.status(200).json({success: true, data: movies});
    } catch (error) {
        res.status(500).json({success: false, error: 'something went wrong'});
    }
};

const getSingleMovie = async (req, res) => {
    try {
        const movie = await getObjectById(req.params.id);
        res.status(200).json({success: true, data: movie});
    } catch (error) {
        res.status(500).json({success: false, error: 'something went wrong'});
    }
};

const getSingleMoviePlot = async (req, res) => {
    try {
        const plotSummary = await getObjectPlotById(req.params.id);
        if (plotSummary) {
            res.status(200).json({success: true, data: plotSummary});
        } else {
            res.status(404).json({success: false, error: 'Movie plot not found'});
        }
    } catch (error) {
        res.status(500).json({success: false, error: 'something went wrong'});
    }
};

const createMovie = async (req, res) => {
    try {
        const { movieTitle, director, releaseYear, genre, ageRating, imdbRating } = req.body;
        const newMovie = await addObject({ movieTitle, info: { director, releaseYear, genre, ageRating, imdbRating } });
        res.status(201).json({success: true, data: newMovie});
    } catch (error) {
        res.status(500).json({success: false, error: 'something went wrong'});
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, director, releaseYear } = req.body;
        const updateObject = await updateObjectById(id, { title, director, releaseYear});
        res.status(200).json({success: true, data: updateObject});
    } catch (error) {
        res.status(500).json({success: false, error: 'something went wrong'});
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteObjectById(id);
        res.status(200).json({success: true, message: 'Movie deleted successfully'});
    } catch (error) {
        res.status(500).json({success: false, error: 'something went wrong'});
    }
};

module.exports = { getAllMovies, getSingleMovie, getSingleMoviePlot, createMovie, updateMovie, deleteMovie };