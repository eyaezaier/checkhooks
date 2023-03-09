import './App.css';
import React, {useState} from 'react';
import  MovieList  from './Components/MovieList/MovieList';
import  Navigation  from './Components/Navigation/Navigation';
import {moviesData} from './Data.js';
import AddMovie from './Components/AddMovie/AddMovie'
import FilterMovie from './Components/FilterMovie/FilterMovie';
function App() {
   
  const [movies, setMovies] = useState(moviesData)
   
  const [inputSearch, setInputSearch]=useState('')

  const [newRate, setNewRate]=useState(0)

  const add = (newMovie) => {
      setMovies([...movies, newMovie])
    }
    return (
    <div className="App">
        <Navigation/>
        <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} newRate={newRate} setNewRate={setNewRate} />
        <AddMovie AddMovie  add={add}/>
        <MovieList movies={movies} inputSearch={inputSearch}   newRate={newRate} />
    </div>
  );
}

  export default App;
