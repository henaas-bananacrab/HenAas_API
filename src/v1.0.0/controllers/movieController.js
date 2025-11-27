const {getAllObjects, getObjectById, addObject, updateObjectById, deleteObjectById} = require('../data/databaseGeneric');

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

const createMovie = async (req, res) => {
    try {
        const { title, director, releaseYear } = req.body;
        const newMovie = await addObject({ title, director, releaseYear});
        res.status(201).json({success: true, data: newMovie});
    } catch (error) {
        res.status(500).json({success: false, error: 'something went wrong'});
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, director, releaseYear } = req.body;
        //const oldObject = await getObjectById(req.params.id);
        /*if (!title) {
            const newTitle = oldObject.title;
            console.log(newTitle);
        } else {
            const newTitle = title;
        }
        
        if (!director) {
            const newDirector = oldObject.director;
            console.log(newDirector);
        } else {
            const newDirector = director;
        }
        
        if (!releaseYear) {
            const newReleaseYear = oldObject.releaseYear;
            console.log(newReleaseYear);
        } else {
            const newReleaseYear = releaseYear;
        }*/
        const updateObject = await updateObjectById(id, { title, director, releaseYear  /*newTitle, newDirector, newReleaseYear*/});
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

module.exports = { getAllMovies, getSingleMovie, createMovie, updateMovie, deleteMovie };