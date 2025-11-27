let objects = [ // add a variable called "info" to each object that contains (director + releaseYear + rating + genre)||change "title" to "movieTitle"
    { id: 1, 
        movieTitle: 'Nosferatu',
        info: { genre: 'Horror',
            ageRating: 'PG',
            director: 'F.W. Murnau',
            releaseYear: 1922,
            imdbRating: 7.8,
            plotSummary: "Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter's wife."
        }
    },
    { id: 2,
        movieTitle: 'Friday The 13th',
        info: { genre: 'Horror',
            ageRating: 'R',
            director: 'Sean S. Cunningham',
            releaseYear: 1980,
            imdbRating: 6.4,
            plotSummary: "A group of teenage camp counselors attempt to re-open an abandoned summer camp with a tragic past, but they are stalked by a mysterious, relentless killer."
        }
    },
    { id: 3,
        movieTitle: 'The Terminator',
        info: { genre: 'Sci-Fi',
            ageRating: 'R',
            director: 'James Cameron',
            releaseYear: 1984,
            imdbRating: 8.1,
            plotSummary: "A cyborg assassin from the future attempts to find and kill a young woman who is destined to give birth to a warrior that will lead a resistance to save humankind from extinction."
        }
    },
    { id: 4,
        movieTitle: 'The Shining',
        info: { genre: 'Horror',
            ageRating: 'R',
            director: 'Stanley Kubrick',
            releaseYear: 1980,
            imdbRating: 8.4,
            plotSummary: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future."
        }
    },
    { id: 5,
        movieTitle: 'Jurassic Park',
        info: { genre: 'Adventure',
            ageRating: 'PG-13',
            director: 'Steven Spielberg',
            releaseYear: 1993,
            imdbRating: 8.2,
            plotSummary: "An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyone's lives, including his grandchildren's, in danger."
        }
    },
];

// get all objects
const getAllObjects = () => {
    return [...objects];
}

// add object
const addObject = (object) => {
    const id = objects.length ? objects[objects.length - 1].id + 1 : 1; // ensure the id is unique by checking the length of the array
    const newObject = { id, ...object };
    objects.push(newObject);
    return newObject;
}

// get object by id
const getObjectById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null; // return null if id is not a number
    return objects.find((object) => object.id === id); // ensure the id is a number with parseInt
}

// get object plot summary by id
const getObjectPlotById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null;
    const object = objects.find((object) => object.id === id); // ensure the id is a number with parseInt
    return object ? { movieTitle: object.movieTitle, plotSummary: object.info.plotSummary } : null; // return movieTitle and plot summary if object is found
}

// delete object by id
const deleteObjectById = (id) => {
    id = parseInt(id); // ensure the id is a number
    if (isNaN(id)) return false; // return false if id is not a number

    // makes index = id of movie
    const index = objects.findIndex((object) => object.id === id);

    //checks if index is not -1/does not exist | if it dose not exist , delete it by splicing. Splicing removes the element at the specified index
    if (index !== -1) {
        objects.splice(index, 1);
        return true;
    }
    return false;
}

// update object by id
const updateObjectById = (id, updatedObject) => {
    id = parseInt(id); // ensure the id is a number
    if (isNaN(id)) return false; // Handle invalid ids

    // makes index = id of object | check if id/object exists | if it dose not exist, update it
    const index = objects.findIndex((object) => object.id === id);
    if (index !== -1) {
        objects[index] = { ...objects[index], ...updatedObject };
        return objects[index];
    }
    return null;
}

module.exports = {
    getAllObjects,
    addObject,
    getObjectById,
    getObjectPlotById,
    deleteObjectById,
    updateObjectById
}