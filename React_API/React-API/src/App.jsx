import { useEffect, useState } from "react";
import { fetchMovies, createMovie, updateMovie, deleteMovie } from './api';
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDirector, setNewDirector] = useState('');
  const [newReleaseYear, setNewReleaseYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  async function loadMovies() {
    try {
      const resp = await fetchMovies();
      // API returns { success: true, data: [...] }
      const moviesData = resp && resp.data ? resp.data : [];
      setMovies(moviesData);
      console.log('Loaded movies:', moviesData);
    } catch (error) {
      console.error("(Error 404) could not fetch movies:", error);
    }
  }
  
  useEffect(() => {
    loadMovies();
  }, []);

  async function handleAddMovie() {
    if (!newTitle || !newDirector || !newReleaseYear) return setErrorMessage(<p style={{color: 'red'}}>ALL FIELDS MUST BE FILLED</p>);
    const movieData = {
      title: newTitle,
      director: newDirector,
      releaseYear: parseInt(newReleaseYear, 10),
    };
    try {
      const resp = await createMovie(movieData);
      const createdMovie = resp && resp.data ? resp.data : resp;
      setMovies(prev => [...prev, createdMovie]);
      setNewTitle('');
      setNewDirector('');
      setNewReleaseYear('');
      setErrorMessage('');
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  }

  async function handleUpdateMovie(id) {
    if (!newTitle || !newDirector || !newReleaseYear) return setErrorMessage(<p style={{color: 'red'}}>ALL FIELDS MUST BE FILLED</p>);
    const movieData = {
      title: newTitle,
      director: newDirector,
      releaseYear: parseInt(newReleaseYear, 10),
    };
    try {
      const resp = await updateMovie(id, movieData);
      const updatedMovie = resp && resp.data ? resp.data : resp;
      setMovies(prev => [...prev.filter(movie => movie.id !== id), updatedMovie]);
      setNewTitle('');
      setNewDirector('');
      setNewReleaseYear('');
      setErrorMessage('');
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  }

  async function handleDeleteMovie(id) {
    try {
      await deleteMovie(id);
      console.log(movies);
      setMovies(prev => prev.filter(movie => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  }

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div>
        <input
          id="inputTitle"
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          id="inputDirector"
          type="text"
          placeholder="Director"
          value={newDirector}
          onChange={(e) => setNewDirector(e.target.value)}
        />
        <input
          id="inputReleaseYear"
          type="number"
          placeholder="Release Year"
          value={newReleaseYear}
          onChange={(e) => setNewReleaseYear(e.target.value)}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      {errorMessage}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> directed by {movie.director} ({movie.releaseYear})
            <button onClick={() => handleUpdateMovie(movie.id)}>Update</button>
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App