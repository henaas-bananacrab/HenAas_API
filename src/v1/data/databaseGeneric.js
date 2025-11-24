let objects = [
    { id: 1, title: 'Nosferatu', director: 'F.W. Murnau', releaseYear: 1922 },
    { id: 2, title: 'Friday The 13th', director: 'Sean S. Cunningham', releaseYear: 1980 },
    { id: 3, title: 'The Terminator', director: 'James Cameron', releaseYear: 1984 },
    { id: 4, title: 'The Shining', director: 'Stanley Kubrick', releaseYear: 1980 },
    { id: 5, title: 'Jurassic Park', director: 'Steven Spielberg', releaseYear: 1993 },
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
    return null; // Return null if object with the given id does not exist
}

module.export = {
    getAllObjects,
    addObject,
    getObjectById,
    deleteObjectById,
    updateObjectById
};