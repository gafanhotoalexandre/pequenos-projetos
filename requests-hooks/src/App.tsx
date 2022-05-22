import { useEffect, useState } from "react";
import { CircleNotch } from 'phosphor-react';

import { Movie } from './types/Movie';

const URL = 'https://api.b7web.com.br/cinema/';

function App() {
  const [moviesInTheaters, setMoviesInTheaters] = useState<Movie[]>([]);
  const [loadingMovies, setLoadingMovies] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      setLoadingMovies(true);

      const res = await fetch(URL);
      const data = await res.json();

      setLoadingMovies(false);
      setMoviesInTheaters(data);
    }
    loadMovies();
  }, []);

  function handleLoadMovies() {
    fetch(URL)
      .then(response => response.json())
      .then(data => setMoviesInTheaters(data));
  }

  return (
    <div>
      { loadingMovies &&
        <div className="flex justify-center items-center my-5">
          <CircleNotch weight="bold" className="w-10 h-10 animate-spin text-blue-500" />
        </div>
      }

      <div
        className="grid grid-cols-6 gap-3 content-center mt-5"
      >
          { moviesInTheaters.map((movie, index) => (
            <div
              key={index}
            >
              <img
                src={movie.avatar}
                alt="Imagem do Filme"
                className="w-32 block"
              />
              <p>{movie.titulo}</p>
            </div>
          )) }
      </div>
    </div>
  );
}

export default App

// https://api.b7web.com.br/cinema/
