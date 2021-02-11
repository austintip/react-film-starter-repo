import React, { useState } from 'react';
import './index.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

function App() {

  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = film => {
    console.log(`Fetching details for ${film}`)
    setCurrent(film)
}

  return (
    <div className="film-library">
      <FilmListing films={films}
      handleDetailsClick={handleDetailsClick}
      />
      <FilmDetails films={films}
        film={current}
      />
    </div>
  );
}

export default App;